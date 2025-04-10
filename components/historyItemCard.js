import { HStack, Image, Text, VStack } from "@chakra-ui/react"

const HistoryItemCard = ({ item }) => {
  return (
    <HStack>
      <Image src={item?.url} w={'40px'} h={'40px'} />
      <VStack>
        <Text fontWeight={'bold'}>{item?.name}</Text>
      </VStack>
    </HStack>
  )
}

export default HistoryItemCard
