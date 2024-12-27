const posts = [
  {
    id: 1,
    title: "Cómo reparar la pantalla rota de tu celular paso a paso.",
    href: "#", //Mejorar
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Reparación de Celulares", href: "#" }, //Mejorar links
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title:
      "5 consejos para extender la vida útil de la batería de tu smartphone.",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Cuidado de Smartphones", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Errores comunes en el mantenimiento de celulares y cómo evitarlos.",
    href: "#",
    description:
      "Descubre las mejores prácticas para mantener tu celular como nuevo, desde el cambio de batería hasta la limpieza de puertos.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Mantenimiento Preventivo", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-blue py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Consejos y Noticias sobre Reparación y Cuidado de Celulares
          </h2>
          <p className="mt-2 text-lg text-pink">
            Aprende cómo mantener tu celular en perfecto estado, solucionar
            problemas comunes y explorar nuestras guías de reparación.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-pink">
                  <a
                    href={post.href}
                    aria-label={`Leer más sobre: ${post.title}`}
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
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-white">{post.author.role}</p>
                  <a
                    href="/servicios"
                    className="text-sm font-semibold text-pink"
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
