function Hero({ aoAbrirContato }) {
  return (
    <section className="relative isolate overflow-hidden bg-fundo text-texto">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
        src="/img/banner-fundo.png"
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-fundo/60" />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <p className="text-sm font-medium text-azul-claro">Câmera Jovi, JOVI MATH</p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          Aponte a câmera. A conta se resolve sozinha.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-texto-suave sm:text-lg">
          O Codex integra uma IA de código aberto ao app nativo de câmera dos smartphones Jovi. Basta enquadrar uma equação na lousa, no caderno ou na apostila para receber a resolução completa, passo a passo, em segundos.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a className="rounded-sm bg-azul px-5 py-3 text-center text-sm font-medium text-superficie transition-colors hover:bg-azul-profundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul" href="#solucao">
            Ver como funciona
          </a>
          <button className="rounded-sm bg-superficie px-5 py-3 text-sm font-medium text-texto-escuro transition-colors hover:bg-azul-suave focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-superficie" type="button" onClick={aoAbrirContato}>
            Contate-nos
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
