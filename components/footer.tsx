export function Footer() {
  const links = {
    COMPAÑÍA: ["Política de privacidad", "Términos de servicio"],
    RECURSOS: ["Portal del operador", "Red mundial"],
    VISIÓN: ["Sostenibilidad"],
  };

  const socials = [
    {
      href: "https://www.facebook.com/profile.php?id=100063934786819",
      icon: (
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      ),
    },
    {
      href: "https://www.instagram.com/transportes_anguetrans/?hl=es",
      icon: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
        </>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: "#0d1b2e" }}>
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-12">
        <div className="md:w-72 flex flex-col gap-5">
          <span className="text-white font-black text-lg tracking-wide">
            ANGUETRANS S.A.
          </span>
          <p className="text-gray-400 text-sm leading-relaxed">
            Monolito de logística industrial. Expertos en el transporte de carga
            pesada a nivel nacional con los más altos estándares de seguridad y
            eficiencia.
          </p>
          <div className="flex gap-3">
            {socials.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-wrap gap-10 md:justify-end">
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-3 min-w-[140px]">
              <p className="text-white text-xs font-bold uppercase tracking-widest">
                {title}
              </p>
              {items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="!text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-gray-500 text-xs">
            © 2026 Anguetrans S.A. Logística Industrial. Todos los derechos son
            reservados.
          </p>
          <div className="flex gap-1.5">
            {["#B6171E", "#003087", "#6b7280"].map((c) => (
              <div
                key={c}
                className="w-6 h-1 rounded-full"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
