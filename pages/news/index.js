import MainLayout from "@/components/mainLayout"
import Header from "@/components/news/header"
import { Box } from "@chakra-ui/react"

const Index = () => {
  return (
    <MainLayout>
      <Header />
      <Box
        w="100%"
        alignItems={"center"}
        justifyContent={"center"}
        maxW="container.xl"
        mx="auto"
        pt={"60px"}
        my={"20px"}
      >

      </Box>
    </MainLayout>
  )
}

export default Index
