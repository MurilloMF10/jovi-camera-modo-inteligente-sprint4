function Estrelas({ notaSelecionada, aoSelecionar, erro }) {
  return (
    <fieldset aria-describedby={erro ? 'erro-nota' : undefined}>
      <legend className="text-sm font-medium text-texto-escuro">Sua nota</legend>
      <div className="mt-2 flex gap-2" role="radiogroup" aria-label="Nota de 1 a 5 estrelas">
        {[1, 2, 3, 4, 5].map((nota) => (
          <label key={nota} className="cursor-pointer">
            <input
              className="sr-only"
              type="radio"
              name="nota"
              value={nota}
              checked={notaSelecionada === nota}
              onChange={aoSelecionar}
            />
            <span className={`flex h-10 w-10 items-center justify-center rounded-md border text-lg transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-azul ${nota <= notaSelecionada ? 'border-azul bg-azul text-white' : 'border-[#c8cbd2] text-texto-escuro-suave hover:border-azul'}`} aria-hidden="true">★</span>
            <span className="sr-only">{nota} estrela{nota > 1 ? 's' : ''}</span>
          </label>
        ))}
      </div>
      {erro && <p id="erro-nota" className="mt-2 text-sm text-red-700">{erro}</p>}
    </fieldset>
  )
}

export default Estrelas
