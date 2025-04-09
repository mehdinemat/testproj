import { SimpleGrid, Text, VStack } from "@chakra-ui/react"
import ImageGuidCard from "./imageGuidCard"

const Guid = () => {
  return (
    <VStack w={'100%'}>
      <Text fontSize={'xl'} fontWeight={'bold'}>راهنما</Text>
      <Text color='gray.400'>برای دریافت خروجی بهتر از تصویر مناسب استفاده کنید</Text>
      <SimpleGrid
        spacing="24px"
        minChildWidth="272px"
        width="100%"
      >
        <ImageGuidCard />
        <ImageGuidCard />
        <ImageGuidCard />
        <ImageGuidCard />
        <ImageGuidCard />
        <ImageGuidCard />
      </SimpleGrid>
    </VStack>
  )
}

export default Guid
