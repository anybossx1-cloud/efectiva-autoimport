import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative mx-auto min-h-screen max-w-[1024px] overflow-hidden bg-black px-8 py-8">
        {/* Header */}
        <header className="relative z-20 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black italic leading-none">
              EFECTIVA
            </h1>
            <p className="text-3xl font-black italic leading-none text-yellow-500">
              AUTOIMPORT
            </p>
            <p className="mt-1 text-xs tracking-[0.55em] text-gray-300">
              AUTOIMPORT
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-bold md:flex">
            <span className="border-b-2 border-yellow-500 pb-2 text-yellow-500">
              INICIO
            </span>
            <span>INVENTARIO</span>
            <span>FINANCIAMIENTO</span>
            <span>NOSOTROS</span>
            <span>CONTACTO</span>
          </nav>
        </header>

        {/* Título */}
        <section className="relative z-10 mt-12 text-center">
          <h2 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            TU PRÓXIMO <br />
            VEHÍCULO TE ESTÁ <br />
            <span className="text-yellow-500">ESPERANDO</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500" />

          <p className="mt-6 text-lg font-semibold text-yellow-400 md:text-xl">
            Financiamiento disponible • Vehículos importados • Aprobación rápida
          </p>
        </section>

        {/* Imagen carros */}
        <div className="relative mt-8 h-[440px] w-full overflow-hidden">
          <div className="absolute left-1/2 top-[58%] z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/25 blur-[110px]" />

          <Image
            src="/cars/car.png"
            alt="Vehículos Efectiva AutoImport"
            fill
            priority
            sizes="1024px"
            className="scale-125 object-cover object-center brightness-110 contrast-125 saturate-125"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Botón */}
        <div className="relative z-20 -mt-12 flex justify-center">
          <Link
            href="/precalificacion"
            className="group relative flex w-full max-w-[520px] items-center justify-between overflow-hidden rounded-2xl border border-yellow-300 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 px-8 py-5 text-xl font-black text-black shadow-[0_0_45px_rgba(234,179,8,0.55)] transition duration-300 hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />

            <span className="relative flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/15">
                👤
              </span>
              PRECALIFÍCATE AHORA
            </span>

            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black text-yellow-400">
              →
            </span>
          </Link>
        </div>

        {/* Clientes */}
        <div className="mx-auto mt-6 flex max-w-[620px] items-center justify-between rounded-xl border border-yellow-500/40 bg-black/70 px-8 py-5">
          <div>
            <p className="text-3xl font-black text-yellow-500">⭐ +1,000</p>
            <p className="font-bold">CLIENTES APROBADOS</p>
          </div>
          <div className="flex -space-x-3">
            <div className="h-10 w-10 rounded-full bg-gray-300" />
            <div className="h-10 w-10 rounded-full bg-gray-400" />
            <div className="h-10 w-10 rounded-full bg-gray-500" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 font-black text-black">
              +
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <div className="mt-6 grid grid-cols-4 overflow-hidden rounded-xl border border-yellow-500/20 bg-black/70">
          <div className="border-r border-yellow-500/20 p-6 text-center">
            <p className="text-4xl text-yellow-500">🛡️</p>
            <h3 className="mt-3 font-black">APROBACIÓN RÁPIDA</h3>
            <p className="mt-2 text-sm text-gray-300">Respuesta en minutos</p>
          </div>

          <div className="border-r border-yellow-500/20 p-6 text-center">
            <p className="text-4xl">💰</p>
            <h3 className="mt-3 font-black">FINANCIAMIENTO DISPONIBLE</h3>
            <p className="mt-2 text-sm text-gray-300">Planes a tu medida</p>
          </div>

          <div className="border-r border-yellow-500/20 p-6 text-center">
            <p className="text-4xl">🚗</p>
            <h3 className="mt-3 font-black">VEHÍCULOS NUEVOS Y USADOS</h3>
            <p className="mt-2 text-sm text-gray-300">Importados de calidad</p>
          </div>

          <div className="p-6 text-center">
            <p className="text-4xl">🤝</p>
            <h3 className="mt-3 font-black">ASESORÍA PERSONALIZADA</h3>
            <p className="mt-2 text-sm text-gray-300">Te acompañamos siempre</p>
          </div>
        </div>

        {/* Marcas */}
        <div className="mt-8 text-center">
          <p className="text-xl font-black text-yellow-500">
            MARCAS DISPONIBLES
          </p>

          <div className="mt-6 grid grid-cols-5 items-center gap-6">
            <Image
              src="/brands/kialogo.jpg"
              alt="Kia"
              width={130}
              height={70}
              className="mx-auto max-h-12 w-auto object-contain"
            />
            <Image
              src="/brands/hyundailogo.jpg"
              alt="Hyundai"
              width={130}
              height={70}
              className="mx-auto max-h-12 w-auto object-contain"
            />
            <Image
              src="/brands/hondalogo.png"
              alt="Honda"
              width={130}
              height={70}
              className="mx-auto max-h-12 w-auto object-contain"
            />
            <Image
              src="/brands/toyotalogo1.png"
              alt="Toyota"
              width={130}
              height={70}
              className="mx-auto max-h-12 w-auto object-contain invert"
            />
            <Image
              src="/brands/nissanlogo.png"
              alt="Nissan"
              width={130}
              height={70}
              className="mx-auto max-h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* Bancos */}
        <div className="mx-auto mt-8 rounded-xl border border-yellow-500/30 bg-[#07111f] px-8 py-6 text-center">
          <p className="font-bold text-yellow-500">CON EL RESPALDO DE</p>

          <div className="mt-5 grid grid-cols-3 items-center gap-8">
            <Image
              src="/images/banreservas.png"
              alt="Banreservas"
              width={180}
              height={80}
              className="mx-auto max-h-10 w-auto object-contain"
            />

            <Image
              src="/images/bhd.png"
              alt="BHD"
              width={140}
              height={70}
              className="mx-auto max-h-10 w-auto object-contain"
            />

            <Image
              src="/images/popularlogo.png"
              alt="Popular"
              width={160}
              height={70}
              className="mx-auto max-h-30 w-auto object-contain"
            />
          </div>
        </div>

        {/* Footer Badges */}
        <div className="mt-6 flex justify-center gap-10 pb-4 text-sm font-semibold">
          <span>🔒 100% SEGURO</span>
          <span>🛡️ TUS DATOS PROTEGIDOS</span>
          <span>🤝 CONFIANZA Y TRANSPARENCIA</span>
        </div>
      </section>
    </main>
  );
}