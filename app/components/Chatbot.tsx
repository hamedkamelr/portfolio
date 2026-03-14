'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

// ─── Knowledge Base ───────────────────────────────────────────────────────────

type Intent = {
  patterns: string[]
  responses: string[]
}

const KB: Record<string, Intent> = {
  greeting: {
    patterns: ['hello', 'hi', 'hey', 'howdy', 'good morning', 'good afternoon', 'sup', 'greetings'],
    responses: [
      "Hey there! 👋 I'm Hamed's AI assistant. Ask me anything about his experience, skills, projects, or how to get in touch!",
      "Hello! I'm here to tell you all about Hamed Kamel Rahimi. What would you like to know?",
      "Hi! Great to meet you. I can tell you about Hamed's career, skills, projects — just ask away!",
    ],
  },
  farewell: {
    patterns: ['bye', 'goodbye', 'see you', 'take care', 'later', 'ciao', 'farewell', 'thanks bye'],
    responses: [
      "Thanks for stopping by! Feel free to reach out to Hamed directly at hamed.kamel35@gmail.com 🙌",
      "Goodbye! Don't hesitate to connect with Hamed on LinkedIn: linkedin.com/in/hamedkamel",
      "See you! If you're interested in working with Hamed, drop him an email at hamed.kamel35@gmail.com",
    ],
  },
  about: {
    patterns: [
      'who is hamed', 'tell me about', 'about hamed', 'who are you', 'introduce',
      'summary', 'overview', 'background', 'profile',
    ],
    responses: [
      "Hamed Kamel Rahimi is an IT Specialist and AI & Automation Enthusiast based in Greater Brisbane, QLD. He bridges enterprise IT infrastructure with cutting-edge AI — from managing Azure cloud environments to building deep-learning models with 98% accuracy. He's passionate about solving real-world problems with technology and loves connecting with new people.",
      "Hamed is a tech professional with a unique blend of enterprise IT expertise and hands-on AI/ML experience. Currently an IT Support Analyst with the Queensland Government, he also has a Master's in Data Science and has built everything from voice agents using LLMs to Alzheimer's prediction models. He's a fast learner who thrives in fast-paced environments.",
    ],
  },
  current_role: {
    patterns: [
      'current role', 'current job', 'currently working', 'where do you work',
      'present job', 'now working', 'present role', 'current position', 'working now',
    ],
    responses: [
      "Hamed is currently an **IT Support Analyst** at the Department of Transport and Main Roads in Brisbane, QLD (February 2025 – Present). He manages Azure Active Directory, Microsoft Intune, Microsoft Exchange, and drives IT service improvements within Agile frameworks — supporting critical Queensland government infrastructure.",
      "Right now, Hamed works as an **IT Support Analyst** at Queensland's Department of Transport and Main Roads. He handles enterprise IT support, endpoint management via Intune, Azure AD administration, and service improvement initiatives. He's been there since February 2025.",
    ],
  },
  experience: {
    patterns: [
      'experience', 'work history', 'career', 'previous jobs', 'past roles',
      'employment', 'worked at', 'career journey', 'positions held', 'resume',
    ],
    responses: [
      "Hamed has 2+ years of professional IT experience:\n\n• **IT Support Analyst** — Dept of Transport & Main Roads (2025–Present)\n• **ICT Solution Analyst** — Tech Mahindra (2024–2025)\n• **ICT Student Services** — USQ (2022–2024)\n• **Student Researcher** — USQ, 98% accuracy AI model (2023)\n• **Business Development Associate** — Taban Infrastructure (2021–2022)",
      "Hamed's career spans government IT, enterprise solutions, academic research, and business development:\n\n1. **Dept of Transport & Main Roads** — current IT Support Analyst role in Brisbane\n2. **Tech Mahindra** — ICT solution design for enterprise clients\n3. **University of Southern Queensland** — IT services & AI deep-learning research\n4. **Taban Infrastructure** — business development & KPI analysis",
    ],
  },
  skills: {
    patterns: [
      'skills', 'technologies', 'tech stack', 'tools', 'what can you do',
      'expertise', 'proficient', 'know how to', 'technical skills', 'capabilities',
    ],
    responses: [
      "Hamed's skills span four key areas:\n\n☁️ **Cloud & Infrastructure**: Azure AD, Intune, Exchange, SharePoint, M365, Azure AZ-900\n🤖 **AI & ML**: LLMs, RAG, Deep Learning, Computer Vision, Python, TensorFlow/Keras\n📊 **Data Analytics**: Power BI, DAX, Data Modeling, ETL Pipelines, Business Intelligence\n⚙️ **IT Operations**: IT Support, Agile/Scrum, Incident Management, Oracle Service Cloud",
      "On the technical side, Hamed is strong in Microsoft Azure cloud (Azure AD, Intune, Exchange), AI/ML development (LLMs, RAG, deep learning with Python/TensorFlow), Power BI data analytics with DAX, and enterprise IT operations. He also holds Microsoft certifications in Power BI and Azure Fundamentals.",
    ],
  },
  ai_ml: {
    patterns: [
      'ai', 'machine learning', 'deep learning', 'artificial intelligence',
      'neural network', 'llm', 'language model', 'rag', 'automation', 'ml model',
    ],
    responses: [
      "Hamed is deeply hands-on with AI! He's built:\n\n• **Voice agents** using RAG architecture, LLMs, APIs & Webhooks for enterprise automation\n• **Alzheimer's prediction model** — two CNNs on MRI images, 98% accuracy\n• **Automated data pipelines** for extracting business insights\n\nHe works with Python, TensorFlow, Keras, and LLM APIs. AI automation is one of his biggest passions.",
      "AI is one of Hamed's core strengths. He's worked with RAG-based voice agents, fine-tuned deep-learning CNNs for medical imaging, and built LLM-powered automation workflows. His research on Alzheimer's disease prediction achieved 98% accuracy — a published academic result.",
    ],
  },
  alzheimer: {
    patterns: [
      'alzheimer', 'mri', 'brain', 'medical', 'thesis', 'research', 'cnn',
      'image classification', 'disease prediction', '98%', 'accuracy',
    ],
    responses: [
      "This is one of Hamed's most impressive projects! For his Master's thesis at USQ, he built and optimised two Convolutional Neural Networks (CNNs) trained on 2D MRI brain scan images to predict the stages of Alzheimer's disease. The models achieved **98% classification accuracy** — a result that was published as peer-reviewed academic research. He used Python, TensorFlow, and Keras.",
      "Hamed's Alzheimer's research involved applying deep learning to medical imaging. He developed two CNN models trained on MRI data to classify disease stages with 98% accuracy. It was his Master's thesis at the University of Southern Queensland and resulted in a published paper — a great example of applying AI to real healthcare problems.",
    ],
  },
  voice_agent: {
    patterns: [
      'voice agent', 'voice ai', 'voice bot', 'rag', 'retrieval', 'chatbot',
      'webhook', 'api integration', 'conversational ai', 'llm agent',
    ],
    responses: [
      "Hamed built an end-to-end **AI Voice Agent** system using RAG (Retrieval-Augmented Generation) architecture combined with LLMs, REST APIs, and Webhooks. The system handles dynamic conversational flows for enterprise automation — think intelligent voice interfaces that can answer questions and trigger backend actions in real time.",
      "The voice agent project is a great showcase of Hamed's AI skills. He designed and built the full pipeline: LLM for language understanding, RAG for grounding responses in real data, API integration for external services, and Webhooks for real-time event handling. It's production-grade enterprise automation.",
    ],
  },
  powerbi: {
    patterns: [
      'power bi', 'powerbi', 'dashboard', 'dax', 'data analytics', 'business intelligence',
      'kpi', 'report', 'data visualization', 'analytics', 'bi',
    ],
    responses: [
      "Hamed is **Power BI certified (PL-300)** and has built production dashboards for call centre operations tracking KPIs like AHT, FCR, SLA adherence, and agent performance. He uses advanced DAX calculations, data modeling best practices, and drill-through reports to give stakeholders real-time operational visibility.",
      "Data analytics via Power BI is a strong suit for Hamed. He's designed interactive dashboards with complex DAX measures, handled data modeling from multiple sources, and delivered BI solutions that drive data-driven decisions. He holds multiple Microsoft PL-300 certifications.",
    ],
  },
  azure_cloud: {
    patterns: [
      'azure', 'cloud', 'microsoft', 'intune', 'exchange', 'active directory',
      'azure ad', 'sharepoint', 'm365', 'microsoft 365', 'office 365', 'az-900',
    ],
    responses: [
      "Azure and Microsoft 365 are Hamed's bread and butter! He manages Azure Active Directory (identity & access), Microsoft Intune (device management & MDM), Exchange Online (email infrastructure), and SharePoint (collaboration) — both in his current government role and at the University of Southern Queensland. He holds the **Azure Fundamentals AZ-900** certification.",
      "Hamed has hands-on experience with the full Microsoft 365 stack: Azure AD for identity management, Intune for endpoint configuration and MDM, Exchange Online for email, and SharePoint for document management and teamwork. He's managed these at government and university scale.",
    ],
  },
  education: {
    patterns: [
      'education', 'degree', 'university', 'study', 'studied', 'qualification',
      'masters', 'mba', 'data science', 'academic', 'graduated', 'school',
    ],
    responses: [
      "Hamed holds multiple postgraduate degrees:\n\n🎓 **MS Data Science** — University of Southern Queensland (2022–2024)\n📐 **Master's in Analytics** — Northeastern University (2021)\n🌐 **MBA, International Business** — Azad University / IAU (2014–2016)\n🗣️ **CELTA (ESL)** — ITI Istanbul (2017)\n\nHis MSc thesis on Alzheimer's AI prediction was published as academic research.",
      "Academically, Hamed has an MS in Data Science from USQ (where his deep-learning research achieved 98% accuracy), a Master's in Analytics from Northeastern University, and an MBA in International Business from Azad University. That combination of technical depth and business acumen is pretty rare!",
    ],
  },
  certifications: {
    patterns: [
      'certification', 'certificate', 'certified', 'pl-300', 'az-900',
      'microsoft certified', 'credential', 'badge',
    ],
    responses: [
      "Hamed's certifications:\n\n📊 **Power BI Data Analyst Associate (PL-300)** — Microsoft\n☁️ **Azure Fundamentals (AZ-900)** — Microsoft\n📐 PL-300 Cert Prep: DAX Calculations — LinkedIn Learning\n🏗️ PL-300 Cert Prep: Power BI Data Modeling — LinkedIn Learning\n📈 Power BI Data Modeling with DAX — LinkedIn Learning",
      "On the certification front, Hamed is Microsoft certified in both Power BI (PL-300) and Azure Fundamentals (AZ-900), plus multiple Power BI specialisation courses covering DAX and data modeling. He keeps his skills sharp with continuous learning.",
    ],
  },
  contact: {
    patterns: [
      'contact', 'email', 'reach', 'hire', 'get in touch', 'connect',
      'linkedin', 'message', 'available', 'opportunity', 'work together',
    ],
    responses: [
      "You can reach Hamed directly:\n\n📧 **Email**: hamed.kamel35@gmail.com\n💼 **LinkedIn**: linkedin.com/in/hamedkamel\n📍 **Location**: Greater Brisbane Area, QLD, Australia\n\nHe loves connecting with new people — don't hesitate to reach out!",
      "Hamed is always open to interesting conversations and opportunities! Best ways to connect:\n\n• Email: hamed.kamel35@gmail.com\n• LinkedIn: linkedin.com/in/hamedkamel\n\nHe's based in Greater Brisbane and responds promptly.",
    ],
  },
  location: {
    patterns: [
      'location', 'where', 'based', 'brisbane', 'australia', 'queensland',
      'qld', 'city', 'country', 'live', 'reside',
    ],
    responses: [
      "Hamed is based in the Greater Brisbane Area, Queensland, Australia. He currently works for the Queensland Government (Department of Transport and Main Roads).",
      "He's in Brisbane, QLD, Australia — working in the Queensland government sector as an IT Support Analyst.",
    ],
  },
  publication: {
    patterns: [
      'publication', 'published', 'paper', 'research paper', 'article', 'journal',
      'carpet', 'entrepreneurial', 'sme',
    ],
    responses: [
      "Hamed has published academic research on two fronts:\n\n1. **\"Effects of Entrepreneurial Skills of SMEs in the Carpet Industry\"** — a business research publication\n2. **Alzheimer's Disease AI Prediction** — his MSc thesis research on deep learning with 98% accuracy, published as peer-reviewed work",
      "He's published research on entrepreneurial skills in small and medium enterprises (carpet industry focus) and his AI/deep-learning research on Alzheimer's disease prediction from his Master's thesis.",
    ],
  },
  availability: {
    patterns: [
      'available', 'open to work', 'looking for', 'job hunting', 'open to opportunities',
      'hire', 'recruiting', 'employment', 'open to roles', 'job search',
    ],
    responses: [
      "Hamed is always open to interesting opportunities, particularly in AI/automation, cloud solutions, and data analytics. The best way to explore potential collaboration is to reach out via email at hamed.kamel35@gmail.com or LinkedIn at linkedin.com/in/hamedkamel.",
      "For the most up-to-date info on availability, it's best to contact Hamed directly — he's always interested in connecting with potential collaborators or employers. Email: hamed.kamel35@gmail.com",
    ],
  },
  languages: {
    patterns: [
      'language', 'speak', 'english', 'french', 'bilingual', 'fluent', 'communication',
    ],
    responses: [
      "Hamed speaks **English** at a full professional level and has elementary **French** proficiency. He also holds a CELTA certification (Teaching English as a Foreign Language) from ITI Istanbul.",
    ],
  },
  projects: {
    patterns: [
      'project', 'portfolio', 'built', 'created', 'developed', 'made', 'work samples',
      'showcase', 'what have you built',
    ],
    responses: [
      "Hamed's key projects:\n\n🧠 **Alzheimer's AI Model** — 98% accuracy CNNs on MRI images (published research)\n🎙️ **AI Voice Agent** — RAG + LLMs + APIs + Webhooks for enterprise automation\n📊 **Power BI Dashboard** — real-time call centre KPIs with advanced DAX\n🔄 **Automated Data Pipeline** — ETL for large-scale data-driven insights\n🏢 **Enterprise IT Infrastructure** — M365, Intune, Azure AD at government scale",
      "Some highlights from Hamed's portfolio:\n• A deep-learning AI that predicts Alzheimer's stages from MRI scans (98% accuracy)\n• Enterprise voice agent using RAG + LLMs for automation\n• Power BI dashboards for call centre performance monitoring\n• Large-scale data pipelines for business intelligence\n• Government-grade Microsoft 365 infrastructure management",
    ],
  },
  help: {
    patterns: [
      'help', 'what can you do', 'what questions', 'how does this work',
      'what should i ask', 'options', 'capabilities',
    ],
    responses: [
      "I can answer questions about Hamed, such as:\n\n• 💼 Current role & career history\n• 🛠️ Skills & technologies\n• 🚀 Projects & portfolio\n• 🎓 Education & certifications\n• 📍 Location & availability\n• 📬 How to contact him\n\nJust ask in plain English!",
    ],
  },
  thanks: {
    patterns: ['thank', 'thanks', 'thank you', 'thx', 'cheers', 'appreciate', 'great', 'awesome', 'nice'],
    responses: [
      "You're welcome! Let me know if you have any other questions about Hamed. 😊",
      "Happy to help! Feel free to ask anything else.",
      "Glad I could help! Is there anything else you'd like to know?",
    ],
  },
}

const FALLBACK_RESPONSES = [
  "I don't have specific information on that, but feel free to reach out to Hamed directly at hamed.kamel35@gmail.com — he'd love to chat!",
  "That's a bit outside what I know about Hamed. For more details, connect with him on LinkedIn at linkedin.com/in/hamedkamel.",
  "I'm not sure about that one! Your best bet is to contact Hamed directly: hamed.kamel35@gmail.com 📧",
]

// ─── Matching Engine ──────────────────────────────────────────────────────────

function pickResponse(responses: string[], seed: number): string {
  return responses[seed % responses.length]
}

let responseCounter = 0

function getResponse(userInput: string): string {
  const input = userInput.toLowerCase().trim()
  let bestKey = ''
  let bestScore = 0

  for (const [key, intent] of Object.entries(KB)) {
    for (const pattern of intent.patterns) {
      if (input.includes(pattern)) {
        const score = pattern.split(' ').length * 2 + (input === pattern ? 10 : 0)
        if (score > bestScore) {
          bestScore = score
          bestKey = key
        }
      }
    }
  }

  responseCounter++

  if (bestScore > 0 && bestKey) {
    return pickResponse(KB[bestKey].responses, responseCounter)
  }

  // Secondary: check if any single word from input matches a pattern
  const words = input.split(/\s+/)
  for (const word of words) {
    if (word.length < 4) continue
    for (const [key, intent] of Object.entries(KB)) {
      for (const pattern of intent.patterns) {
        if (pattern === word || pattern.startsWith(word)) {
          return pickResponse(intent.responses, responseCounter)
        }
      }
    }
  }

  return pickResponse(FALLBACK_RESPONSES, responseCounter)
}

// ─── Typing simulation delay ──────────────────────────────────────────────────

function getTypingDelay(text: string): number {
  const len = text.length
  if (len < 100) return 600
  if (len < 300) return 900
  return 1200
}

// ─── Suggestions ──────────────────────────────────────────────────────────────

const SUGGESTIONS = [
  "What's his current role?",
  "Tell me about his AI projects",
  "What are his top skills?",
  "How can I contact Hamed?",
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px'
  }

  const sendMessage = useCallback(
    (text?: string) => {
      const content = (text ?? input).trim()
      if (!content || isTyping) return

      const userMsg: Message = { role: 'user', content }
      setMessages((prev) => [...prev, userMsg])
      setInput('')
      if (inputRef.current) inputRef.current.style.height = 'auto'
      setIsTyping(true)

      const reply = getResponse(content)
      const delay = getTypingDelay(reply)

      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
        if (!isOpen) setHasUnread(true)
      }, delay)
    },
    [input, isTyping, isOpen],
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Panel */}
      <div
        className={`mb-4 w-[360px] sm:w-[400px] rounded-2xl overflow-hidden shadow-2xl border border-[rgba(79,142,247,0.2)] transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ background: 'rgba(6, 9, 18, 0.97)', backdropFilter: 'blur(24px)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[rgba(79,142,247,0.08)] to-[rgba(212,168,67,0.08)] border-b border-[rgba(79,142,247,0.12)] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#d4a843] flex items-center justify-center text-xs font-bold text-white font-heading">
                HKR
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#94a3b8] border-2 border-[#060912]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white font-heading">Ask About Hamed</div>
              <div className="text-xs text-slate-500">Local AI · No API key needed</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Close chat"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="h-[380px] overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
          {/* Welcome state */}
          {messages.length === 0 && (
            <div className="space-y-4">
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#d4a843] flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5">
                  AI
                </div>
                <div className="bg-white/[0.05] rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Hi! I&apos;m Hamed&apos;s AI assistant. Ask me anything about his
                    experience, skills, projects, or how to get in touch. 👋
                  </p>
                </div>
              </div>
              <div className="ml-9 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[rgba(79,142,247,0.2)] text-[#4f8ef7] bg-[rgba(79,142,247,0.05)] hover:bg-[rgba(79,142,247,0.12)] hover:border-[rgba(79,142,247,0.4)] transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message history */}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-2.5 items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#d4a843] flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5">
                  AI
                </div>
              )}
              <div
                className={`rounded-2xl px-3.5 py-2.5 max-w-[82%] text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-[#4f8ef7] to-[#d4a843] text-white rounded-tr-sm'
                    : 'bg-white/[0.05] text-slate-300 rounded-tl-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-2.5 items-start">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#d4a843] flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5">
                AI
              </div>
              <div className="bg-white/[0.05] rounded-2xl rounded-tl-sm px-3.5 py-3">
                <div className="flex gap-1.5 items-center">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-[rgba(79,142,247,0.08)] px-3 py-3">
          <div className="flex gap-2 items-end bg-white/[0.04] border border-[rgba(79,142,247,0.12)] rounded-xl px-3 py-2 focus-within:border-[rgba(79,142,247,0.35)] transition-colors">
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about Hamed..."
              rows={1}
              disabled={isTyping}
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 resize-none focus:outline-none leading-relaxed py-0.5 disabled:opacity-50"
              style={{ maxHeight: '100px' }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f8ef7] to-[#d4a843] flex items-center justify-center shrink-0 hover:opacity-90 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-slate-700 text-center mt-2">
            Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <div className="relative flex items-center gap-3">
        {/* "Ask me anything" label — visible when closed */}
        {!isOpen && (
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white whitespace-nowrap select-none pointer-events-none"
            style={{
              background: 'rgba(6,9,18,0.92)',
              border: '1px solid rgba(79,142,247,0.35)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 18px rgba(79,142,247,0.15)',
              animation: 'fadeSlideIn 0.4s ease-out',
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[#94a3b8] shrink-0"
              style={{ boxShadow: '0 0 6px #94a3b8', animation: 'pulse 2s ease-in-out infinite' }}
            />
            Ask me anything
          </div>
        )}

        <button
          onClick={() => setIsOpen((o) => !o)}
          className="relative hover:scale-110 active:scale-95 transition-transform duration-200"
          style={{ width: 60, height: 60 }}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {/* Outer pulsing ring */}
          {!isOpen && (
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: 'rgba(79,142,247,0.2)',
                animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
              }}
            />
          )}

          {/* Button body */}
          <span
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #4f8ef7 0%, #d4a843 100%)',
              boxShadow: isOpen
                ? '0 0 20px rgba(212,168,67,0.5), 0 4px 15px rgba(0,0,0,0.5)'
                : '0 0 30px rgba(79,142,247,0.5), 0 0 60px rgba(79,142,247,0.2), 0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            {/* Close icon */}
            <span
              className="absolute inset-0 flex items-center justify-center transition-all duration-200"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.4)',
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>

            {/* Chat icon */}
            <span
              className="absolute inset-0 flex items-center justify-center transition-all duration-200"
              style={{
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? 'rotate(90deg) scale(0.4)' : 'rotate(0deg) scale(1)',
              }}
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </span>
          </span>

          {/* Unread dot */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4f8ef7] border-2 border-[#060912] animate-pulse z-10" />
          )}
        </button>
      </div>
    </div>
  )
}
