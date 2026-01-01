'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Main from '../components/layouts/main'
import { ColorModeProvider } from '../components/ui/color-mode'
import system from '../lib/theme'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const routerPath = usePathname() || ''
  return (
    <>
      <ChakraProvider value={system}>
        <ColorModeProvider enableSystem={true}>
          <Main router={routerPath}>
            <AnimatePresence mode="wait" initial={true}>
              {children}
            </AnimatePresence>
          </Main>
        </ColorModeProvider>
      </ChakraProvider>
      <SpeedInsights />
      <Analytics />
    </>
  )
}
