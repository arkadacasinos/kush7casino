import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kush Casino — официальный сайт, зеркало и игра онлайн',
  description: 'Kush Casino: понятный гид по официальному сайту, рабочему зеркалу и игре онлайн. Узнайте, как проверить адрес, выбрать игру и соблюдать ответственную игровую практику.',
  metadataBase: new URL('https://kush7casino.vercel.app/'),
  alternates: { canonical: '/' },
  keywords: ['kush casino', 'куш казино', 'официальный сайт', 'kush casino зеркало', 'куш казино онлайн'],
  openGraph: { title: 'Kush Casino — ясный путь к игре онлайн', description: 'Официальный сайт, зеркало и полезный гид для игроков.', url: '/', siteName: 'Kush Casino', locale: 'ru_RU', type: 'website' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  generator: 'Next.js',
}

export const viewport: Viewport = { themeColor: '#071b18', colorScheme: 'dark', width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className="bg-background"><head><meta name="google-site-verification" content="" /><meta name="yandex-verification" content="" /></head><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
