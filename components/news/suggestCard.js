import { HStack, Image, Text } from "@chakra-ui/react"

const SuggestCard = () => {
  return (
    <HStack w={'100%'} alignItems={'start'}>
      <Image src="../../suggestphoto.png" w={'160px'} h={'120px'} />
      <Text>پیام تسلیت درپی شهادت زائران مزار شهید سلیمانی در حادثه تروریستی در مسیر گلزار شهدای کرمان</Text>
    </HStack>
  )
}

export default SuggestCard
