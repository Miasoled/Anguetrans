import { Truck, Package, TrendingUpDown } from "lucide-react";
import Image from "next/image";

export function Stats() {
  const stats = [
    {
      number: "25+",
      label: "AÑOS DE EXPERIENCIA",
      description:
        "Trayectoria sólida y confiable en el mercado logístico nacional.",
      lineColor: "bg-[#003087]",
    },
    {
      number: "100%",
      label: "COBERTURA NACIONAL",
      description: "Llegamos a cada rincón de Ecuador con eficiencia total.",
      lineColor: "bg-red-600",
    },
    {
      number: "24/7",
      label: "MONITOREO GPS",
      description: "Seguridad garantizada con seguimiento en tiempo real.",
      lineColor: "bg-[#003087]",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4"
            >
              <div
                className={`h-1 w-12 rounded-full mb-8 ${stat.lineColor.replace("border", "bg")}`}
              />

              <div className="text-7xl font-bold text-[#003087] mb-3 tracking-tighter">
                {stat.number}
              </div>

              <div className="text-red-600 font-semibold text-xl tracking-wide mb-4">
                {stat.label}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Transporte de Carga Pesada",
      description:
        "Operaciones de alto tonelaje con conductores certificados y protocolos de seguridad rigurosos.",
      color: "border-blue-700",
    },
    {
      icon: Package,
      title: "Logística Integral",
      description:
        "Gestión completa de la cadena de suministro, desde el almacenamiento hasta la entrega final.",
      color: "border-red-600",
    },
    {
      icon: TrendingUpDown,
      title: "Cargas Especiales",
      description:
        "Transporte de maquinaria sobredimensionada y equipos industriales de alta complejidad.",
      color: "border-blue-700",
    },
  ];

  return (
    <section className="py-20 bg-[#F2F4F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Servicios <span className="text-red-600">Especializados</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-r-lg p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 ${service.color} group`}
              >
                <div className="mb-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-red-50 transition-colors">
                    <Icon className="w-8 h-8 text-gray-700 group-hover:text-red-600 transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function OperationalBase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Parte Izquierda - Texto */}
          <div className="space-y-10">
            <div>
              <p className="text-red-600 font-semibold tracking-widest text-sm mb-3">
                UBICACIÓN ESTRATÉGICA
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Nuestra base operacional
              </h2>
            </div>

            <p className="text-lg text-gray-600 max-w-md">
              Nuestra base central en Santo Domingo nos permite una conectividad
              sin precedentes con los principales puertos y centros comerciales
              del país.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm flex gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Nodo Central de Distribución
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Conexión directa con las 24 provincias.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Respuesta Inmediata
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Tiempos de carga reducidos en un 30%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Mapa */}
              <div className="relative h-[460px] bg-[#e6f0e6]">
                <Image
                  src="/img/mapa.png"
                  alt="Mapa de Ecuador - Base en Santo Domingo"
                  fill
                  className="object-cover"
                />

                <div className="absolute top-[45%] left-[48%] z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    {/* Etiqueta */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold whitespace-nowrap">
                      SANTO DOMINGO DE LOS TSACHILAS
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-t p-6 flex items-center justify-between">
                <div>
                  <p className="text-red-600 text-xs font-semibold tracking-widest">
                    ESTATUS OPERATIVO
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    Flota Activa: <span className="text-green-600">98%</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-2xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-sm">EN OPERACIÓN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
