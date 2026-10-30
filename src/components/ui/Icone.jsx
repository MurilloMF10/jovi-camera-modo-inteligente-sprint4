import { createElement } from '@boxicons/js'
import { useEffect, useRef } from 'react'

function Icone({ definicao, className = '' }) {
  const iconeRef = useRef(null)

  useEffect(() => {
    const icone = createElement(definicao)
    icone.setAttribute('aria-hidden', 'true')
    icone.setAttribute('focusable', 'false')
    icone.classList.add('size-6')
    if (className) {
      icone.classList.add(className)
    }
    iconeRef.current.replaceChildren(icone)
  }, [className, definicao])

  return <span ref={iconeRef} aria-hidden="true" />
}

export default Icone
