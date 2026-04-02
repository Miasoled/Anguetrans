"use client";
import { Truck, Package, TrendingUpDown } from "lucide-react";
import { useState } from "react";
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

const destinos = [
  "Santo Domingo",
  "La Concordia",
  "Quininde",
  "Viche",
  "Esmeraldas",
  "Atacames",
  "Tonchigüe",
  "Muisne",
  "Borbon",
  "Río Verde",
  "San Lorenzo",
  "Los Bancos",
  "Pedro Vicente",
  "Puerto Quito",
  "La Sexta",
  "Golondrina",
  "Nanegal",
  "El Esfuerzo",
  "Luz de América",
  "Patricia Pilar",
  "Los Angeles",
  "La Catorce",
  "Santa María",
  "Bramadora",
  "El Carmen",
  "Pedernales",
  "Jama",
  "Cojimies",
  "Tres Vías",
  "Manta",
  "Portoviejo",
  "Los Ríos",
  "Quevedo",
];

export function Destination() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "var(--secondary)" }}
        >
          Nuestra Red
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Destinos Disponibles
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
        {destinos.map((ciudad, i) => (
          <button
            key={i}
            className="group flex flex-col items-start gap-2 bg-gray-50 hover:bg-white px-4 py-5 transition-colors duration-150 cursor-pointer"
          >
            {/* Pin icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className=" transition-transform duration-150 group-hover:scale-110"
              style={{ color: "var(--secondary)" }}
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium text-gray-800 text-left leading-snug">
              {ciudad}
            </span>
          </button>
        ))}

        <div
          className="col-span-2 sm:col-span-3 md:col-span-3 flex flex-col items-center justify-center gap-3 px-6 py-3"
          style={{ backgroundColor: "var(--secondary)" }}
        >
          <p className="text-white text-xl font-bold text-center">
            ¿No ves tu ciudad?
          </p>
          <button
            className="border border-white text-sm font-semibold px-6 py-2 rounded bg-white transition-colors duration-150"
            style={{ color: "#B6171E" }}
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}

export function CadenaSuministro() {
  return (
    <section className="relative w-full min-h-[320px] flex items-center overflow-hidden bg-black">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/warehouse-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Left: Text + Buttons */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight max-w-xs">
            Optimice su Cadena de Suministro
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Ofrecemos soluciones integrales de transporte desde Quito hacia todo
            el corredor occidental con la seguridad y puntualidad que su empresa
            merece.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <button
              className="text-white text-sm font-bold px-6 py-3 rounded transition-opacity duration-150 hover:opacity-90"
              style={{ backgroundColor: "#B6171E" }}
            >
              Solicitar Cotización
            </button>
            <button className="border border-white text-white text-sm font-bold px-6 py-3 rounded hover:bg-white hover:text-black transition-colors duration-150">
              Ver Tarifario
            </button>
          </div>
        </div>

        <div className="flex gap-4 flex-shrink-0">
          <div className="bg-black/50 border border-white/10 rounded-xl px-6 py-5 flex flex-col gap-3 min-w-[150px]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V5l-8-3z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="text-white font-bold text-sm">Seguro Total</p>
              <p className="text-gray-400 text-xs mt-0.5">Carga protegida</p>
            </div>
          </div>

          {/* Entregas 24h */}
          <div className="bg-black/50 border border-white/10 rounded-xl px-6 py-5 flex flex-col gap-3 min-w-[150px]">
            {/* Clock icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 7v5l3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="text-white font-bold text-sm">Entregas 24h</p>
              <p className="text-gray-400 text-xs mt-0.5">
                Rapidez garantizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CanalesDirectos() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    servicio: "Carga Pesada",
    mensaje: "",
  });
  const set = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-1"
          style={{ color: "#B6171E" }}
        >
          Canales Directos
        </p>
        <div
          className="w-10 h-0.5 mb-10"
          style={{ backgroundColor: "#B6171E" }}
        />

        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          {/* Left */}
          <div
            className="relative p-10 md:w-[42%] flex flex-col justify-between gap-8"
            style={{ backgroundColor: "#0d1b2e" }}
          >
            <div
              className="absolute right-0 top-0 h-full w-1.5"
              style={{ backgroundColor: "#B6171E" }}
            />
            <div>
              <h2 className="text-white text-3xl font-black leading-tight mb-4">
                ¿Listo para mover su carga?
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Complete el formulario y un asesor logístico se pondrá en
                contacto con usted en menos de 24 horas.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Whatsapp", value: "+593 99 235 0042" },
                {
                  label: "Messenger",
                  value: "Anguetrans S.A",
                },
              ].map(({ label, value }) => (
                <div key={value}>
                  <p className="text-gray-400 text-xs">{label}</p>
                  <p className="text-white font-bold text-sm mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white p-10 flex flex-col gap-5">
            <div className="flex gap-4">
              {[
                {
                  label: "Nombre Completo",
                  name: "nombre",
                  placeholder: "Ej. Juan Pérez",
                },
                {
                  label: "Empresa",
                  name: "empresa",
                  placeholder: "Nombre de su empresa",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name} className="flex-1 flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    {label}
                  </label>
                  <input
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={set}
                    placeholder={placeholder}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-gray-400"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-700">
                Tipo de Servicio
              </label>
              <select
                name="servicio"
                value={form.servicio}
                onChange={set}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400"
              >
                {[
                  "Carga Pesada",
                  "Carga Liviana",
                  "Encomiendas",
                  "Carga Refrigerada",
                ].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-700">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={set}
                rows={4}
                placeholder="Describa sus necesidades logísticas..."
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-gray-400 resize-none"
              />
            </div>
            <button
              className="w-full text-white text-sm font-black uppercase tracking-widest py-4 rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#B6171E" }}
            >
              Enviar Solicitud
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
