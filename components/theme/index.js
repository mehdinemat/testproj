import { defineStyleConfig, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme({
  direction: 'rtl',
  styles: {
    global: {
      html: {
        fontSize: "14px"
      },
      body: {
        bg: 'white'
      }
    }
  },
  components: {
    // Button: buttonTheme,
    // Card: cardTheme,
    FormLabel: defineStyleConfig({
      baseStyle: {
        fontWeight: 'bold',
        fontSize: 'sm',
      }
    }),
    FormErrorMessage: defineStyleConfig({
      baseStyle: {
        mt: 0,
        fontSize: 'xs',
      },
    })
  },
  fonts: {
    heading: "Estedad",
    body: "Estedad",
  },
},
  withDefaultColorScheme({ colorScheme: 'facebook' }),
)