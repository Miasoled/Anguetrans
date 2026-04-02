"use client";
import { useState } from "react";

interface RastreoProps {
  open: boolean;
  onClose: () => void;
}

export function Rastreo({ open, onClose }: RastreoProps) {
  const [tipo, setTipo] = useState("Guía");
  const [numero, setNumero] = useState("");

  const handleRastrear = () => {
    if (!numero.trim()) return;
    console.log("Rastreando:", tipo, numero);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-10 flex flex-col items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
        >
          ✕
        </button>

        <div className="text-center">
          <p className="text-2xl font-black" style={{ color: "#0d1b2e" }}>
            ANGUETRANS
          </p>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
            Sistema de Rastreo
          </p>
        </div>

        <div className="w-full flex items-center gap-3">
          <label className="text-sm font-semibold text-gray-600 whitespace-nowrap">
            Seleccione:
          </label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 outline-none"
          >
            {["Guía", "Orden", "Cédula"].map((op) => (
              <option key={op}>{op}</option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <p className="text-center text-2xl font-black text-gray-300">
            Digite su número de {tipo}
          </p>
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleRastrear()}
            placeholder="Ej. 000123456"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-center outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        <button
          onClick={handleRastrear}
          className="w-full text-white font-black text-sm uppercase tracking-widest py-3 rounded-xl hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#B6171E" }}
        >
          Rastrear
        </button>

        <p className="text-xs text-gray-400">
          Anguetrans S.A. · Logística Industrial
        </p>
      </div>
    </div>
  );
}
