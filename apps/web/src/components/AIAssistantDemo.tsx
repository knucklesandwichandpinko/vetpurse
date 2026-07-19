import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, RotateCcw, Sparkles } from 'lucide-react'
import { getAssistantResponse, suggestedPrompts } from '../data/inventoryDemo'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "Hi, I'm the VetPurse Assistant. Ask me about reorder priorities, expiring lots, or FEFO recommendations using our sample inventory.",
}

export default function AIAssistantDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  function ask(question: string) {
    const q = question.trim()
    if (!q) return
    const reply = getAssistantResponse(q)
    setMessages((m) => [...m, { role: 'user', content: q }, { role: 'assistant', content: reply }])
    setInput('')
  }

  function reset() {
    setMessages([GREETING])
    setInput('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto"
    >
      <div className="rounded-2xl bg-teal-deep border border-teal-line shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden">
        <div className="bg-ink text-cream px-5 py-4 flex items-center justify-between border-b border-teal-line">
          <div>
            <p className="text-[14.5px] font-semibold">VetPurse Assistant</p>
            <p className="text-[11px] text-mint uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
              <Sparkles size={11} /> Interactive demo &middot; Sample data
            </p>
          </div>
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-[12px] text-sage hover:text-mint transition-colors"
            aria-label="Reset conversation"
          >
            <RotateCcw size={13} /> Reset
          </button>
        </div>

        <div ref={scrollRef} className="h-72 overflow-y-auto px-4 py-4 space-y-2.5 bg-ink/40">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[13.5px] leading-relaxed ${
                m.role === 'user'
                  ? 'bg-mint text-ink ml-auto rounded-br-sm'
                  : 'bg-teal-mid text-cream border border-teal-line rounded-bl-sm'
              }`}
            >
              {m.content}
            </div>
          ))}
        </div>

        <div className="px-4 pt-3 pb-2 flex flex-wrap gap-2 border-t border-teal-line">
          {suggestedPrompts.map((p) => (
            <button
              key={p}
              onClick={() => ask(p)}
              className="text-[12px] px-3 py-1.5 rounded-full border border-teal-line text-sage hover:border-mint hover:text-mint transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        <div className="px-4 pb-4 pt-1 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && ask(input)}
            placeholder="Ask about reorder, expiration, or FEFO..."
            className="flex-1 text-[13.5px] px-3.5 py-2.5 rounded-full bg-teal-mid border border-teal-line text-cream placeholder:text-sage focus:outline-none focus:border-mint"
          />
          <button
            onClick={() => ask(input)}
            disabled={!input.trim()}
            className="w-10 h-10 shrink-0 rounded-full bg-mint text-ink flex items-center justify-center disabled:opacity-40 hover:bg-mint-dim hover:text-cream transition-colors"
            aria-label="Send"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
