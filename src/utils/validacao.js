const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validarContato(valores) {
  const erros = {}
  const nome = valores.nome.trim()
  const mensagem = valores.mensagem.trim()

  if (nome.length < 2 || nome.length > 80) {
    erros.nome = 'Informe um nome entre 2 e 80 caracteres.'
  }

  if (!EMAIL_VALIDO.test(valores.email.trim())) {
    erros.email = 'Informe um e-mail em um formato válido.'
  }

  if (mensagem.length < 10 || mensagem.length > 1000) {
    erros.mensagem = 'A mensagem deve ter entre 10 e 1000 caracteres.'
  }

  if (valores.assunto === 'Avaliação' && !valores.nota) {
    erros.nota = 'Escolha uma nota de 1 a 5 estrelas.'
  }

  return erros
}
