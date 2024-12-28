export default function CallToAction() {
    return (
      <div className="bg-blue">
        <div className="container mx-auto max-w-7xl pt-10 pb-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-blue grid grid-cols-1 lg:grid-cols-2 px-6 pt-16 lg:pb-0 md:pb-20 pb-20 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            {/* Fondo radial decorativo */}
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#gradient-background)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="gradient-background">
                  <stop stopColor="#FFFFFF" />
                  <stop offset={1} stopColor="#CD0C6D" />
                </radialGradient>
              </defs>
            </svg>
  
            {/* Contenido */}
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-pink sm:text-4xl">
                Repara tu celular con expertos certificados
              </h2>
              <p className="mt-6 text-lg text-white">
                Ofrecemos servicios de reparación de celulares de todas las
                marcas, incluyendo cambios de pantalla, batería, y mantenimiento
                de software. Garantía y calidad en cada reparación.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/contacto"
                  className="rounded-md bg-pink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Agenda tu cita
                </a>
                <a href="/servicios" className="text-sm font-semibold text-white">
                  Más información <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
  
            {/* Imagen de reparación */}
            <div className="mt-10 mb-10 h-full flex justify-center items-center">
              <img
                alt="Técnico reparando un celular en un taller especializado"
                src="/src/assets/imagen-cta.jpg"
                width={500}
                height={500}
                className="w-96 max-h-full rounded-md bg-white ring-1 ring-white object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  