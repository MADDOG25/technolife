const posts = [
  {
    id: 1,
    title: "Cómo reparar la pantalla rota de tu celular paso a paso.",
    href: "https://www.xataka.com/basics/se-me-ha-roto-pantalla-movil",
    description:
      "Aprende las herramientas necesarias, los pasos para desmontar tu dispositivo y cómo reemplazar correctamente la pantalla rota de tu celular.",
    date: "Dec 20, 2024",
    datetime: "2024-12-20",
    category: {
      title: "Reparación de Celulares",
      href: "https://www.xataka.com/basics/se-me-ha-roto-pantalla-movil",
    },
    author: {
      name: "Carlos Martínez",
      role: "Técnico en Electrónica",
      href: "/servicios",
      imageUrl: "https://via.placeholder.com/150/000000/FFFFFF/?text=Carlos",
    },
  },
  {
    id: 2,
    title:
      "5 consejos para extender la vida útil de la batería de tu smartphone.",
    href: "https://www.xataka.com/basics/como-cargar-telefono-movil-para-maximizar-vida-util-bateria",
    description:
      "Descubre cómo cuidar la batería de tu celular con buenas prácticas como evitar el sobrecalentamiento, usar cargadores certificados y mucho más.",
    date: "Dec 15, 2024",
    datetime: "2024-12-15",
    category: {
      title: "Cuidado de Smartphones",
      href: "https://www.xataka.com/basics/como-cargar-telefono-movil-para-maximizar-vida-util-bateria",
    },
    author: {
      name: "Laura Gómez",
      role: "Especialista en Reparación",
      href: "/servicios",
      imageUrl: "https://via.placeholder.com/150/000000/FFFFFF/?text=Laura",
    },
  },
  {
    id: 3,
    title: "Errores comunes en el mantenimiento de celulares",
    href: "https://www.simoptions.com/es/solucion-de-problemas-de-telefono-movil/",
    description:
      "Desde la limpieza de puertos de carga hasta el uso de protectores adecuados, conoce los errores más frecuentes y cómo prevenirlos.",
    date: "Dec 10, 2024",
    datetime: "2024-12-10",
    category: {
      title: "Mantenimiento Preventivo",
      href: "https://www.simoptions.com/es/solucion-de-problemas-de-telefono-movil/",
    },
    author: {
      name: "José Pérez",
      role: "Ingeniero",
      href: "/servicios",
      imageUrl: "https://via.placeholder.com/150/000000/FFFFFF/?text=Jose",
    },
  },
];

export default function Blog() {
  return (
    <div className="pt-44 pb-20">
      <div className="mx-auto px-2">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Consejos y Noticias sobre Reparación y Cuidado de Celulares
          </h2>
          <p className="mt-2 text-xl text-pink">
            Aprende cómo mantener tu celular en perfecto estado, solucionar
            problemas comunes y explorar nuestras guías de reparación.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-7xl lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-white">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white hover:bg-pink"
                  target="_blank"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-pink">
                  <a
                    href={post.href}
                    aria-label={`Leer más sobre: ${post.title}`}
                    target="_blank"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm text-white">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt={`Foto de ${post.author.name}, autor del artículo: ${post.title}`}
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-white"
                  loading="lazy"
                />
                <div className="text-sm/6 gap-y-2 grid">
                  <p className="font-semibold text-white">
                    <a href={post.author.href} target="_blank">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-white">{post.author.role}</p>
                  <a
                    href="/servicios"
                    className="text-sm font-semibold text-pink"
                    target="_blank"
                  >
                    Ver servicios de reparación →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
