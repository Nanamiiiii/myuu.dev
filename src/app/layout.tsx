import { Metadata } from 'next'
import { Provider } from './layout-component'

export const metadata: Metadata = {
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
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/uhz5aqh.css" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
