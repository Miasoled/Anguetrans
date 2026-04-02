import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/camion.png"
          alt="Camión AngueTrans"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 31, 61, 0.85) 45%, rgba(10, 31, 61, 0.4) 55%)",
        }}
      />
      <div className="relative z-30 px-6 lg:px-12 flex flex-col items-start justify-center">
        <div className="max-w-xl">
          <div className="inline-block bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-md mb-6 tracking-wide">
            LÍDERES EN ECUADOR
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Compromiso y <span className="text-red-500">Seguridad</span> en
            <br />
            Cada Kilómetro
          </h1>

          <p className="text-lg text-gray-200 mb-10 max-w-md">
            Más de 25 años liderando el transporte de carga pesada en Ecuador
            con precisión industrial.
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-red-600 hover:bg-red-700 !text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all duration-300 active:scale-[0.98] shadow-xl"
          >
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </section>
  );
}
