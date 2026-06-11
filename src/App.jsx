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
    <div className="min-h-screen font-['Inter',sans-serif] bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <header className="relative border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent tracking-tight">
            Dashboard Financiero
          </h1>
          <span className="text-sm text-white/40 font-medium">Q2 2026</span>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:bg-white/10 transition-all duration-300">
            <p className="text-sm font-medium text-emerald-300/80 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ingresos Totales
            </p>
            <p className="text-3xl font-extrabold text-emerald-300 tracking-tight">
              ${totalIngresos.toLocaleString()}
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:bg-white/10 transition-all duration-300">
            <p className="text-sm font-medium text-rose-300/80 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              Gastos Totales
            </p>
            <p className="text-3xl font-extrabold text-rose-300 tracking-tight">
              ${totalGastos.toLocaleString()}
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:bg-white/10 transition-all duration-300">
            <p className="text-sm font-medium text-sky-300/80 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Balance Neto
            </p>
            <p className={`text-3xl font-extrabold tracking-tight ${balance >= 0 ? "text-sky-300" : "text-rose-300"}`}>
              ${balance.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-lg font-bold text-white/70 mb-5 flex items-center gap-2">
              <span className="text-emerald-400">◆</span>
              Ingresos
            </h2>
            <div className="space-y-3">
              {ingresos.map((item) => (
                <div
                  key={item.id}
                  className="group flex justify-between items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
                >
                  <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                    {item.concepto}
                  </span>
                  <span className="font-bold font-['Inter',sans-serif] text-emerald-300 tabular-nums">
                    ${item.monto.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white/70 mb-5 flex items-center gap-2">
              <span className="text-rose-400">◆</span>
              Gastos
            </h2>
            <div className="space-y-3">
              {gastos.map((item) => (
                <div
                  key={item.id}
                  className="group flex justify-between items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300"
                >
                  <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                    {item.concepto}
                  </span>
                  <span className="font-bold font-['Inter',sans-serif] text-rose-300 tabular-nums">
                    ${item.monto.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
