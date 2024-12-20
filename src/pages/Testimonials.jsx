const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name: "Judith Black",
    role: "CEO of Workcation",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    quote:
      "Doloribus, accusamus. Veniam delectus rerum, obcaecati asperiores porro molestiae similique voluptatibus nesciunt quasi libero. Velit atque consequuntur ipsam tempora aliquid.",
    name: "John Doe",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4,
  },
  {
    quote:
      "Explicabo nulla, adipisci tempora deleniti cupiditate voluptatibus sit rerum culpa temporibus natus facilis sunt, aspernatur eos quae.",
    name: "Emily Davis",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-blue px-6 py-44 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-blue shadow-xl shadow-white ring-1 ring-pink sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-4xl text-center font-semibold tracking-tight text-white sm:text-5xl">
          Testimonios
        </h2>
        <div className="mt-10 space-y-10">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="text-center">
              <blockquote className="text-xl font-semibold text-white sm:text-2xl">
                <p>{`“${testimonial.quote}”`}</p>
              </blockquote>
              <figcaption className="mt-8">
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="mx-auto size-10 rounded-full"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <svg
                    width={3}
                    height={3}
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="fill-white"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-white">{testimonial.role}</div>
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
      </div>
    </section>
  );
}
