const STRIPE_SECRET_KEY = "sk_test_51NxVulnerableKey_D3vS3c0p5_Pipeline_1234567890ABCDEF"

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
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Dashboard Financiero
          </h1>
          <span className="text-sm text-gray-500">Q2 2026</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-1">Ingresos Totales</p>
            <p className="text-3xl font-bold text-emerald-400">
              ${totalIngresos.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-1">Gastos Totales</p>
            <p className="text-3xl font-bold text-rose-400">
              ${totalGastos.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-1">Balance Neto</p>
            <p className={`text-3xl font-bold ${balance >= 0 ? "text-sky-400" : "text-rose-400"}`}>
              ${balance.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-lg font-semibold mb-4 text-gray-300">
              Ingresos
            </h2>
            <div className="space-y-3">
              {ingresos.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-900 border border-gray-800 rounded-lg px-5 py-4"
                >
                  <span>{item.concepto}</span>
                  <span className="font-mono text-emerald-400">
                    ${item.monto.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4 text-gray-300">
              Gastos
            </h2>
            <div className="space-y-3">
              {gastos.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-900 border border-gray-800 rounded-lg px-5 py-4"
                >
                  <span>{item.concepto}</span>
                  <span className="font-mono text-rose-400">
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
