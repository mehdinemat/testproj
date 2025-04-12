import { HStack, Image, Text, VStack } from "@chakra-ui/react"

const LeftSidebar = () => {
  return (
    <HStack w={'100%'} alignItems={'start'}>
      <Image
        src="https://m.media-amazon.com/images/I/81xeEPe678L.jpg"
        w={"60px"}
        bgColor={"gray.300"}
        height={"60px"}
        borderRadius={"10px"}
      />
      <VStack w={'100%'} alignItems={'start'}>
        <Text fontSize={"18px"}>اسلام کوئست</Text>
        <Text color={"gray.500"}>۳۵۶ پرسش</Text>
      </VStack>
    </HStack>
  )
}

export default LeftSidebar
