import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hamed Kamel Rahimi | AI Developer & IT Specialist',
  description:
    'Portfolio of Hamed Kamel Rahimi — IT Support Analyst at the Queensland Government, AI & Automation Engineer, and Data Science professional based in Greater Brisbane, QLD. Specialising in Azure, LLMs, RAG, deep learning, and Power BI.',
  keywords: [
    'Hamed Kamel Rahimi',
    'IT Specialist',
    'AI Engineer',
    'Power BI',
    'Azure',
    'Brisbane',
    'Data Science',
    'LLM',
    'RAG',
    'Deep Learning',
    'Machine Learning',
    'Queensland Government',
  ],
  authors: [{ name: 'Hamed Kamel Rahimi' }],
  openGraph: {
    title: 'Hamed Kamel Rahimi | AI Developer & IT Specialist',
    description:
      'IT Support Analyst (Queensland Government) and AI Engineer based in Brisbane, QLD. Expert in Azure, Power BI, LLMs, RAG, and enterprise IT.',
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
