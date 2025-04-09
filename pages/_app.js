// pages/_app.js
import { Fonts } from '@/components/base/global'
import { theme } from '@/components/theme'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Fonts />
    </ChakraProvider>
  )
}

export default MyApp