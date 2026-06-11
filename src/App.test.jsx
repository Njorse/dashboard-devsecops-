import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Dashboard Financiero", () => {
  it("renderiza el sidebar y el header", () => {
    render(<App />)
    expect(screen.getAllByText("Dashboard").length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText("Configuración")).toBeDefined()
  })

  it("muestra las secciones de ingresos y gastos", () => {
    render(<App />)
    const ingresos = screen.getAllByText("Ingresos")
    expect(ingresos.length).toBeGreaterThanOrEqual(1)
    const gastos = screen.getAllByText("Gastos")
    expect(gastos.length).toBeGreaterThanOrEqual(1)
  })

  it("calcula el balance correctamente", () => {
    render(<App />)
    expect(screen.getByText("$24,100")).toBeDefined()
  })
})
