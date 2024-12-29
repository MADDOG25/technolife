import Blog from "../components/Blog";

const testimonials = [
  {
    quote:
      "El equipo hizo un trabajo excepcional reparando mi celular. Su atención al detalle y rapidez fueron impresionantes. Estoy muy agradecida por su servicio.",
    name: "Judith Black",
    image: "/src/assets/clientes/cliente1.jpeg",
    rating: 5,
  },
  {
    quote:
      "La pantalla de mi teléfono quedó como nueva. Además, el trato fue muy amable y profesional. Definitivamente los recomendaré a mis amigos.",
    name: "Jaime Vespucio",
    image: "/src/assets/clientes/cliente2.jpeg",
    rating: 4,
  },
  {
    quote:
      "Mi experiencia fue excelente. Fueron muy claros con el diagnóstico y el tiempo de entrega. No podría estar más feliz con el resultado.",
    name: "Juan Vasquez",
    image: "/src/assets/clientes/cliente3.jpeg",
    rating: 5,
  },
  {
    quote:
      "El lugar es muy profesional, y el servicio fue de primera calidad. Mis dispositivos funcionan perfectamente. ¡Muy recomendados!",
    name: "Roberto Garcia",
    image: "/src/assets/clientes/cliente4.jpeg",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-blue mt-16 px-6 py-44 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.pink.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-blue shadow-xl shadow-white ring-1 ring-pink sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <h2 className="text-4xl mb-20 text-center font-semibold text-white sm:text-5xl">
          Testimonios
        </h2>
        <div className="mt-10 space-y-20">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="text-center">
              <blockquote className="text-xl font-semibold text-white sm:text-2xl">
                <p>{`“${testimonial.quote}”`}</p>
              </blockquote>
              <figcaption className="mt-8">
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="mx-auto size-40 rounded-2xl"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={
                        starIndex < testimonial.rating ? "currentColor" : "none"
                      }
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-pink"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.019 6.186a1 1 0 00.95.69h6.487c.969 0 1.371 1.24.588 1.81l-5.257 3.82a1 1 0 00-.364 1.118l2.019 6.186c.3.921-.755 1.688-1.538 1.118l-5.257-3.82a1 1 0 00-1.175 0l-5.257 3.82c-.783.57-1.838-.197-1.538-1.118l2.019-6.186a1 1 0 00-.364-1.118L2.049 11.613c-.783-.57-.381-1.81.588-1.81h6.487a1 1 0 00.95-.69l2.019-6.186z"
                      />
                    </svg>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <Blog />
      </div>
    </section>
  );
}
