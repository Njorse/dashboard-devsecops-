import { useState, useRef, useEffect } from "react"

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
const MODEL = "llama-3.1-8b-instant"
// GROQ_API_KEY inyectada via VITE_GROQ_API_KEY en build de GitHub Actions

function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! Soy tu asesor financiero IA. ¿En qué puedo ayudarte?" },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function handleSend() {
    if (!input.trim()) return
    const userMsg = { role: "user", content: input }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: "system", content: "Eres un asesor financiero experto. Respondes en español con consejos claros y precisos sobre finanzas personales, inversiones, ahorro y presupuestos." },
            ...messages,
            userMsg,
          ],
          temperature: 0.7,
          max_tokens: 512,
        }),
      })

      if (!res.ok) throw new Error(`Groq API error: ${res.status}`)

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || "Lo siento, no pude generar una respuesta."
      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error al conectar con el asesor. Verifica la API key e intenta de nuevo." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-black/60 flex flex-col z-50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">Asesor Financiero IA</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white text-lg leading-none">&times;</button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-sky-600 text-white rounded-br-md"
                      : "bg-gray-800 text-gray-200 rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-400 rounded-xl rounded-bl-md px-4 py-2.5 text-sm italic">Escribiendo...</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-gray-700 px-4 py-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Consulta financiera..."
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-sky-500 transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-sky-600 hover:bg-sky-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-full shadow-lg shadow-sky-500/30 flex items-center justify-center text-2xl z-50 transition-all duration-200 hover:scale-105"
        title="Asesor Financiero IA"
      >
        ⌨
      </button>
    </>
  )
}

export default AIChatbot
