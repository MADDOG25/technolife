import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Carousel() {
  const slides = [
    {
      image: "/src/assets/tech/tech2.jpeg",
      alt: "Aréa de trabajo en reparación de celulares",
    },
    {
      image: "/src/assets/tech/tech3.jpeg",
      alt: "Revisión realizado en un dispositivo móvil",
    },
    {
      image: "/src/assets/tech/tech5.jpeg",
      alt: "Verificación de estado de equipo para mantenimiento",
    },
    {
      image: "/src/assets/tech/tech4.jpeg",
      alt: "Trabajo del estado de equipo para reparacion de placa",
    },
  ];

  return (
    <section className="mt-32 py-20">
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        Centro de Reparación
      </h2>
      <p className="text-xl max-w-xl mx-auto text-pink font-semibold text-center mb-10">
        Observa algunos de los trabajos realizados en nuestro centro de
        reparación. Garantizamos resultados de calidad y satisfacción para todos
        nuestros clientes.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-4xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <figure className="flex flex-col justify-center items-center">
              <img
                src={slide.image}
                alt={slide.alt}
                className="rounded-lg shadow-lg w-96 h-auto"
                loading="lazy"
              />
              <figcaption className="mt-4 font-normal text-white text-sm">
                {slide.alt}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
