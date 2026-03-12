import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hamed Kamel Rahimi | IT Specialist & AI Automation Enthusiast',
  description:
    'Portfolio of Hamed Kamel Rahimi — IT Specialist, AI & Automation Enthusiast, and Data Analytics professional based in Greater Brisbane, QLD. Specialising in cloud infrastructure, LLMs, RAG, and Power BI.',
  keywords: [
    'Hamed Kamel Rahimi',
    'IT Specialist',
    'AI Automation',
    'Power BI',
    'Azure',
    'Brisbane',
    'Data Science',
    'LLM',
    'RAG',
    'Deep Learning',
  ],
  authors: [{ name: 'Hamed Kamel Rahimi' }],
  openGraph: {
    title: 'Hamed Kamel Rahimi | IT Specialist & AI Automation Enthusiast',
    description:
      'IT Specialist and AI Automation Enthusiast based in Brisbane, QLD. Expert in Azure, Power BI, LLMs, and enterprise IT solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
