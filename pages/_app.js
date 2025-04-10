// pages/_app.js
import { Fonts } from '@/components/base/global';
import { fetcher } from '@/components/lib/api';
import { theme } from '@/components/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
      <Fonts />
    </ChakraProvider>
  )
}

export default MyApp