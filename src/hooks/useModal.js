import { useEffect, useRef, useState } from 'react'

function useModal() {
  const [estaAberto, setEstaAberto] = useState(false)
  const elementoQueAbriu = useRef(null)

  function abrir(evento) {
    elementoQueAbriu.current = evento?.currentTarget || null
    setEstaAberto(true)
  }

  function fechar() {
    setEstaAberto(false)
  }

  useEffect(() => {
    if (!estaAberto) {
      return undefined
    }

    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function fecharComEsc(evento) {
      if (evento.key === 'Escape') {
        fechar()
      }
    }

    window.addEventListener('keydown', fecharComEsc)

    return () => {
      document.body.style.overflow = overflowAnterior
      window.removeEventListener('keydown', fecharComEsc)
      elementoQueAbriu.current?.focus()
    }
  }, [estaAberto])

  return { estaAberto, abrir, fechar }
}

export default useModal
