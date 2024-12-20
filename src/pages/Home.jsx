export default function Home() {
  return (
    <div>
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-base text-white ring-1 ring-white hover:ring-white">
              Problemas con tu celular aqui puedes solucionarlo.{" "}
              <a href="/servicios" className="font-semibold text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                Leer mas <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-7xl">
              Reparacion y Mantenimiento de Celulares
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-white">
              TechnoLife servicio técnico para celulares
              cambio de pantalla, batería y más !
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contacto"
                className="rounded-xl bg-pink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contactanos 
              </a>
              <a href="/servicios" className="text-sm font-semibold text-white">
                Leer mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
