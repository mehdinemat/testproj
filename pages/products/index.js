import MainLayout from "@/components/mainLayout"
import Header from "@/components/products/header"
import { Container } from "@chakra-ui/react"

const Index = () => {
  return (
    <MainLayout>
      <Header />
      <Container maxW="80%" mx="auto" py={4} marginTop={"100px"}>

      </Container>
    </MainLayout>
  )
}

export default Index
