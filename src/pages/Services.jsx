import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Carousel from "../components/Carousel";

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-blue px-6 py-44 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-blue">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-white">
                Servicios especializados
              </p>
              <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-pink sm:text-5xl">
                Soluciones para reparación y mantenimiento de celulares
              </h2>
              <p className="mt-6 text-xl text-white">
                Ofrecemos servicios de reparación de celulares, mantenimiento
                preventivo y asesoría para prolongar la vida útil de tus
                dispositivos móviles.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 lg:mt-10 p-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Imagen de reparación y mantenimiento de celulares"
            src="/src/assets/imagen-1.jpeg"
            className="w-full rounded-xl bg-white shadow-xl ring-1 ring-white"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-white lg:max-w-lg">
              <p>
                Nuestros servicios incluyen la reparación de pantallas rotas,
                reemplazo de baterías, optimización del rendimiento y limpieza
                de puertos USB para garantizar el correcto funcionamiento de tu
                dispositivo.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-white">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-pink"
                  />
                  <span>
                    <strong className="font-semibold text-white">
                      Diagnóstico rápido.
                    </strong>{" "}
                    Identificamos y solucionamos problemas en tu celular en el
                    menor tiempo posible.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-pink"
                  />
                  <span>
                    <strong className="font-semibold text-white">
                      Protección y seguridad.
                    </strong>{" "}
                    Instalamos certificados SSL y garantizamos la privacidad de
                    tus datos durante el proceso de reparación.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-pink"
                  />
                  <span>
                    <strong className="font-semibold text-white">
                      Respaldo de datos.
                    </strong>{" "}
                    Realizamos copias de seguridad para proteger tu información
                    antes de cualquier intervención.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Garantizamos servicios de calidad para que tus dispositivos
                estén siempre en perfectas condiciones. Confía en nosotros para
                el mantenimiento y cuidado de tu celular.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-pink">
                Soluciones sin complicaciones.
              </h2>
              <p className="mt-6">
                Ya sea que necesites una reparación rápida o un mantenimiento
                preventivo, nuestro equipo está aquí para ayudarte. Contáctanos
                y mantén tus dispositivos funcionando como nuevos.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Carrusel component */}
      <Carousel />
    </div>
  );
}
