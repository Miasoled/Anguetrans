"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Rastreo } from "../app/rastreo/page";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isRastreoOpen, setIsRastreoOpen] = useState(false); // ← Nuevo estado

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sobre nosotros", href: "/sobre-nosotros" },
    { name: "Contáctanos", href: "/contacto" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Nombre */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/img/logo.png"
              alt="AngueTrans"
              width={55}
              height={55}
              className="h-14 w-auto object-contain"
              priority
            />
            <div className="hidden sm:block">
              <div className="font-bold text-2xl tracking-tight">
                ANGUE<span className="text-red-600">TRANS</span>
              </div>
              <div className="text-xs text-gray-500 -mt-1 tracking-widest uppercase">
                TRANSPORTE TERRESTRE
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-6 transition-colors hover:text-red-600 ${
                  pathname === link.href
                    ? "text-red-600 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-red-600 after:w-full"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setIsRastreoOpen(true)}
              className="bg-[#003087] text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:bg-[#00225e]"
            >
              Rastreo
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-gray-700"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-6 bg-white">
            <div className="flex flex-col gap-6 px-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 ${pathname === link.href ? "text-red-600 font-semibold" : "text-gray-700"}`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsRastreoOpen(true);
                }}
                className="bg-[#003087] hover:bg-[#00225e] text-white py-4 text-center rounded-lg font-semibold mt-4"
              >
                Rastreo
              </button>
            </div>
          </div>
        )}
      </div>

      <Rastreo open={isRastreoOpen} onClose={() => setIsRastreoOpen(false)} />
    </nav>
  );
}
