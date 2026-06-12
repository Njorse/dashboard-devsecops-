import AIChatbot from "./components/AIChatbot"

const navItems = [
  { label: "Dashboard", icon: "◈", active: true },
  { label: "Ingresos", icon: "↑" },
  { label: "Gastos", icon: "↓" },
  { label: "Reportes", icon: "☰" },
  { label: "Configuración", icon: "⚙" },
]

function App() {
  const ingresos = [
    { id: 1, concepto: "Ventas Online", monto: 12500 },
    { id: 2, concepto: "Suscripciones", monto: 8400 },
    { id: 3, concepto: "Consultoría", monto: 3200 },
  ]

  const gastos = [
    { id: 1, concepto: "Infraestructura Cloud", monto: 4500 },
    { id: 2, concepto: "Marketing Digital", monto: 2800 },
    { id: 3, concepto: "Nómina", monto: 9600 },
  ]

  const totalIngresos = ingresos.reduce((acc, i) => acc + i.monto, 0)
  const totalGastos = gastos.reduce((acc, g) => acc + g.monto, 0)
  const balance = totalIngresos - totalGastos

  return (
    <>
    <div className="min-h-screen font-['Inter',sans-serif] flex bg-black">
      <aside className="w-64 shrink-0 border-r border-gray-800 bg-gray-950 flex flex-col">
        <div className="px-6 py-6 border-b border-gray-800">
          <h1 className="text-lg font-extrabold text-white tracking-tight">
            Finance<span className="text-gray-400">Pro</span>
          </h1>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                item.active
                  ? "bg-white text-black shadow-lg"
                  : "text-gray-500 hover:text-white hover:bg-gray-900"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-black">
              JD
            </div>
            <div className="text-sm">
              <p className="text-gray-300 font-medium">Juan Pérez</p>
              <p className="text-gray-600 text-xs">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="border-b border-gray-800 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="px-8 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">
              Dashboard
            </h2>
            <span className="text-sm text-gray-500 font-medium">Q2 2026</span>
          </div>
        </header>

        <main className="flex-1 px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-white/20 hover:shadow-lg transition-all duration-300">
              <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Ingresos Totales
              </p>
              <p className="text-3xl font-extrabold text-white tracking-tight">
                ${totalIngresos.toLocaleString()}
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-white/20 hover:shadow-lg transition-all duration-300">
              <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Gastos Totales
              </p>
              <p className="text-3xl font-extrabold text-white tracking-tight">
                ${totalGastos.toLocaleString()}
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-white/20 hover:shadow-lg transition-all duration-300">
              <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Balance Neto
              </p>
              <p className="text-3xl font-extrabold text-white tracking-tight">
                ${balance.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section>
              <h2 className="text-base font-semibold text-gray-400 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-white" />
                Ingresos
              </h2>
              <div className="space-y-2">
                {ingresos.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 hover:border-white/20 hover:bg-gray-900 transition-all duration-200"
                  >
                    <span className="text-gray-300">{item.concepto}</span>
                    <span className="font-bold text-white tabular-nums">
                      ${item.monto.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-400 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-white" />
                Gastos
              </h2>
              <div className="space-y-2">
                {gastos.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 hover:border-white/20 hover:bg-gray-900 transition-all duration-200"
                  >
                    <span className="text-gray-300">{item.concepto}</span>
                    <span className="font-bold text-white tabular-nums">
                      ${item.monto.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
      <AIChatbot />
    </>
  )
}

// UI layout verified by QA
export default App
