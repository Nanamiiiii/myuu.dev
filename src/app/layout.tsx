import { Metadata } from 'next'
import { Provider } from './layout-component'

export const metadata: Metadata = {
  metadataBase: new URL('https://myuu.dev'),
  title: {
    default: 'Myuu.dev',
    template: '%s - Myuu.dev',
  },
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    siteName: 'Myuu.dev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
