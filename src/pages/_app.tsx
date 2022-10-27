
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { darkTheme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </NextThemesProvider>

  )
}

export default MyApp