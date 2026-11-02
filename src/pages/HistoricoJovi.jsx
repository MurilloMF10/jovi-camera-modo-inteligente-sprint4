import { useRef, useState } from 'react'
import { validarHistorico } from '../utils/validarHistorico'

const TAMANHO_MAXIMO = 5 * 1024 * 1024
const origens = { camera: 'Câmera', imagem: 'Imagem', digitado: 'Digitado' }

function formatarData(data) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(data))
}

function HistoricoJovi() {
  const [registros, setRegistros] = useState(null)
  const [mensagem, setMensagem] = useState('Selecione um arquivo JSON exportado pelo JOVI MATH.')
  const [carregando, setCarregando] = useState(false)
  const leituraAtual = useRef(0)

  async function importar(evento) {
    const arquivo = evento.target.files?.[0]
    const identificador = leituraAtual.current + 1
    leituraAtual.current = identificador
    setRegistros(null)
    setCarregando(false)

    if (!arquivo) {
      setMensagem('Nenhum arquivo selecionado.')
      return
    }
    if (arquivo.size > TAMANHO_MAXIMO) {
      setMensagem('O arquivo deve ter no máximo 5 MiB.')
      return
    }

    setCarregando(true)
    setMensagem('Lendo e validando o arquivo...')
    try {
      const bytes = await arquivo.arrayBuffer()
      const texto = new TextDecoder('utf-8', { fatal: true }).decode(bytes)
      const resultado = validarHistorico(JSON.parse(texto))
      if (identificador !== leituraAtual.current) return
      if (!resultado.valido) {
        setMensagem(resultado.erro)
        return
      }
      setRegistros(resultado.registros)
      setMensagem(resultado.registros.length ? `${resultado.registros.length} registro(s) importado(s) localmente.` : 'O arquivo é válido, mas não possui registros.')
    } catch (erro) {
      if (identificador !== leituraAtual.current) return
      if (erro instanceof TypeError) setMensagem('Não foi possível ler o arquivo como UTF-8 válido.')
      else if (erro instanceof SyntaxError) setMensagem('O arquivo não contém um JSON válido.')
      else setMensagem('Não foi possível ler o arquivo. Tente novamente.')
    } finally {
      if (identificador === leituraAtual.current) setCarregando(false)
    }
  }

  return (
    <section className="bg-secao-clara px-5 py-16 text-texto-escuro sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium text-azul">JOVI MATH</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Importar histórico do JOVI MATH</h1>
        <p className="mt-4 max-w-2xl leading-7 text-texto-escuro-suave">Escolha um JSON exportado pela opção 11 do Python. A leitura acontece somente neste navegador; o arquivo não é enviado nem salvo.</p>

        <div className="mt-8 border border-borda-sutil bg-superficie p-6 sm:p-8">
          <label className="block text-sm font-medium" htmlFor="arquivo-historico">Arquivo de histórico (.json)</label>
          <input className="mt-3 block w-full rounded-sm border border-borda-clara p-2 text-sm file:mr-4 file:rounded-sm file:border-0 file:bg-azul-suave file:px-3 file:py-2 file:font-medium file:text-azul-profundo focus:outline-2 focus:outline-offset-2 focus:outline-azul" id="arquivo-historico" type="file" accept="application/json,.json" onChange={importar} />
          <p className="mt-3 text-sm text-texto-escuro-suave">Tamanho máximo: 5 MiB.</p>
          <p className="mt-5 text-sm text-texto-escuro-suave" aria-live="polite" role={registros === null && !carregando && mensagem !== 'Selecione um arquivo JSON exportado pelo JOVI MATH.' ? 'alert' : undefined}>{carregando ? 'Lendo e validando o arquivo...' : mensagem}</p>
        </div>

        {registros?.length > 0 && <div className="mt-8 grid gap-5">
          {registros.map((registro) => <article key={registro.id} className="border border-borda-sutil bg-superficie p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div><p className="text-sm font-medium text-azul">{origens[registro.origem]}</p><h2 className="mt-2 text-xl font-semibold">{registro.expressao}</h2></div>
              <p className="text-sm text-texto-escuro-suave">{formatarData(registro.data_hora)}</p>
            </div>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2"><div><dt className="text-sm text-texto-escuro-suave">Resultado formatado</dt><dd className="mt-1 font-semibold">{registro.resultado_formatado}</dd></div><div><dt className="text-sm text-texto-escuro-suave">Resultado exato</dt><dd className="mt-1 font-semibold">{registro.resultado_exato}</dd></div></dl>
            <div className="mt-5 border-t border-borda-divisoria pt-5"><p className="text-sm font-medium">Explicação gerada por IA (pode conter erros)</p><p className="mt-2 whitespace-pre-wrap leading-7 text-texto-escuro-suave">{registro.explicacao ?? 'Sem explicação gerada'}</p></div>
          </article>)}
        </div>}
      </div>
    </section>
  )
}

export default HistoricoJovi
