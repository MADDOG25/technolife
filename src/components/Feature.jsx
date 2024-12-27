import {
  LockClosedIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Reparaciones Exprés",
    description:
      "Reparamos pantallas, baterías, y más en tiempo récord, garantizando resultados de calidad. Olvídate de largos tiempos de espera.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Seguridad Avanzada",
    description:
      "Protegemos tus datos y aseguramos que cada reparación se realice bajo estrictos estándares de seguridad y privacidad.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Reservas Simples",
    description:
      "Agenda tu cita en pocos pasos desde nuestra plataforma y recibe atención sin complicaciones.",
    icon: CalendarIcon,
  },
  {
    name: "Garantía en Reparaciones",
    description:
      "Cada trabajo está respaldado con una garantía para que tengas la tranquilidad de saber que estás en manos de expertos.",
    icon: LockClosedIcon,
  },
  {
    name: "Atención Personalizada",
    description:
      "Nuestro equipo está comprometido en ofrecerte soluciones a la medida de tus necesidades, con el mejor trato y profesionalismo.",
    icon: UserGroupIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-blue py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-pink">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
            Todo lo que necesitas para reparar tu celular
          </p>
          <p className="mt-6 text-lg text-white">
            Sabemos lo importante que es tu celular para tu día a día. Por eso,
            ofrecemos un servicio de reparación rápido, confiable y totalmente
            personalizado para devolverte la funcionalidad de tu dispositivo en
            tiempo récord.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-pink">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-white">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-pink"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
