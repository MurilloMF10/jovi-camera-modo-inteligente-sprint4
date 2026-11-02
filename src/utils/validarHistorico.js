const CAMPOS_RAIZ = ['versao_schema', 'projeto', 'exportado_em', 'registros']
const CAMPOS_REGISTRO = ['id', 'expressao', 'resultado_exato', 'resultado_formatado', 'origem', 'data_hora', 'explicacao']
const CODIGOS_ESPACO = new Set([9, 10, 11, 12, 13, 28, 29, 30, 31, 32, 133, 160, 5760, 8232, 8233, 8239, 8287, 12288])

function temSomenteCampos(objeto, campos) {
  if (!objeto || Array.isArray(objeto) || typeof objeto !== 'object') return false
  const chaves = Object.keys(objeto)
  return chaves.length === campos.length && campos.every((campo) => Object.hasOwn(objeto, campo))
}

function textoValido(texto, limite, permitirNull = false) {
  if (permitirNull && texto === null) return true
  if (typeof texto !== 'string' || Array.from(texto).length > limite || Array.from(texto).every((caractere) => CODIGOS_ESPACO.has(caractere.codePointAt(0)))) return false

  for (let indice = 0; indice < texto.length; indice += 1) {
    const codigo = texto.charCodeAt(indice)
    if ((codigo >= 0xd800 && codigo <= 0xdbff && (indice + 1 >= texto.length || texto.charCodeAt(indice + 1) < 0xdc00 || texto.charCodeAt(indice + 1) > 0xdfff)) ||
      (codigo >= 0xdc00 && codigo <= 0xdfff && (indice === 0 || texto.charCodeAt(indice - 1) < 0xd800 || texto.charCodeAt(indice - 1) > 0xdbff)) ||
      (codigo <= 0x1f && codigo !== 0x09 && codigo !== 0x0a) || codigo === 0x7f) return false
  }

  return true
}

function dataValida(valor) {
  if (typeof valor !== 'string' || valor.length > 40 || Array.from(valor).some((caractere) => caractere.codePointAt(0) > 127)) return false
  const partes = valor.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,6})?(Z|[+-]\d{2}:\d{2})$/)
  if (!partes) return false

  const [, anoTexto, mesTexto, diaTexto, horaTexto, minutoTexto, segundoTexto, fuso] = partes
  const ano = Number(anoTexto)
  const mes = Number(mesTexto)
  const dia = Number(diaTexto)
  const hora = Number(horaTexto)
  const minuto = Number(minutoTexto)
  const segundo = Number(segundoTexto)
  const diasNoMes = [31, ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if (ano < 1 || mes < 1 || mes > 12 || dia < 1 || dia > diasNoMes[mes - 1] || hora > 23 || minuto > 59 || segundo > 59) return false
  if (fuso !== 'Z' && (Number(fuso.slice(1, 3)) > 23 || Number(fuso.slice(4, 6)) > 59)) return false
  return true
}

function expressaoValida(expressao) {
  if (!textoValido(expressao, 200) || expressao !== expressao.normalize('NFC') || !/^[0-9()+*/-]+$/.test(expressao) || !/[+*/-]/.test(expressao)) return false
  let indice = 0

  function numero() {
    const inicio = indice
    while (/\d/.test(expressao[indice])) indice += 1
    return indice > inicio && (indice - inicio === 1 || expressao[inicio] !== '0')
  }

  function fator() {
    if (expressao[indice] === '(') {
      indice += 1
      if (!termo()) return false
      if (expressao[indice] !== ')') return false
      indice += 1
      return true
    }
    return numero()
  }

  function termo() {
    if (!fator()) return false
    while (expressao[indice] === '*' || expressao[indice] === '/') {
      indice += 1
      if (!fator()) return false
    }
    while (expressao[indice] === '+' || expressao[indice] === '-') {
      indice += 1
      if (!fator()) return false
      while (expressao[indice] === '*' || expressao[indice] === '/') {
        indice += 1
        if (!fator()) return false
      }
    }
    return true
  }

  return termo() && indice === expressao.length
}

function resultadoFormatado(exato) {
  const [numeradorTexto, denominadorTexto] = exato.split('/')
  const numerador = BigInt(numeradorTexto)
  if (!denominadorTexto) return numerador.toString()
  const denominador = BigInt(denominadorTexto)
  const negativo = numerador < 0n
  let valor = (negativo ? -numerador : numerador) * 100n
  let quociente = valor / denominador
  if ((valor % denominador) * 2n >= denominador) quociente += 1n
  const inteiro = quociente / 100n
  const casas = (quociente % 100n).toString().padStart(2, '0')
  return `${negativo && quociente !== 0n ? '-' : ''}${inteiro}.${casas}`
}

function resultadoExatoValido(resultado) {
  if (!textoValido(resultado, 512) || !/^-?(?:0|[1-9]\d*)(?:\/[1-9]\d*)?$/.test(resultado)) return false
  const [numeradorTexto, denominadorTexto] = resultado.split('/')
  if (!denominadorTexto) return numeradorTexto !== '-0'
  const numerador = BigInt(numeradorTexto)
  const denominador = BigInt(denominadorTexto)
  if (denominador <= 1n) return false
  let a = numerador < 0n ? -numerador : numerador
  let b = denominador
  while (b) [a, b] = [b, a % b]
  return a === 1n
}

function validarRegistro(registro, ids) {
  if (!temSomenteCampos(registro, CAMPOS_REGISTRO)) return 'Cada registro deve conter apenas os campos previstos.'
  if (typeof registro.id !== 'string' || !/^[A-Za-z0-9_-]{1,80}$/.test(registro.id) || ids.has(registro.id)) return 'Há um ID inválido ou repetido no histórico.'
  if (!expressaoValida(registro.expressao)) return 'Há uma expressão inválida no histórico.'
  if (!resultadoExatoValido(registro.resultado_exato)) return 'Há um resultado exato inválido no histórico.'
  if (!textoValido(registro.resultado_formatado, 512) || registro.resultado_formatado !== resultadoFormatado(registro.resultado_exato)) return 'Há um resultado formatado incompatível no histórico.'
  if (!['camera', 'imagem', 'digitado'].includes(registro.origem)) return 'Há uma origem inválida no histórico.'
  if (!dataValida(registro.data_hora)) return 'Há uma data e hora inválida no histórico.'
  if (!textoValido(registro.explicacao, 2000, true)) return 'Há uma explicação inválida no histórico.'
  ids.add(registro.id)
  return ''
}

export function validarHistorico(historico) {
  if (!temSomenteCampos(historico, CAMPOS_RAIZ)) return { valido: false, erro: 'O arquivo não segue o formato esperado do JOVI MATH.' }
  if (!Number.isInteger(historico.versao_schema) || historico.versao_schema !== 1 || typeof historico.projeto !== 'string' || historico.projeto !== 'JOVI MATH' || !dataValida(historico.exportado_em) || !Array.isArray(historico.registros) || historico.registros.length > 1000) return { valido: false, erro: 'O arquivo não segue o contrato público do JOVI MATH.' }

  const ids = new Set()
  for (const registro of historico.registros) {
    const erro = validarRegistro(registro, ids)
    if (erro) return { valido: false, erro }
  }
  return { valido: true, registros: historico.registros }
}
