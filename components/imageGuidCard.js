import { Badge, Box, Image, Text, VStack } from "@chakra-ui/react"

const ImageGuidCard = () => {
  return (
    <Box
      padding={'24px'}
      width="272px"
      height="375px" // or whatever height
      bg="white"
      borderRadius="16px"
      boxShadow="sm">
      <VStack w={'100%'} alignItems={'start'}>
        <Image src="./testimage.png" height={'240px'} width={'224px'} />
        <Badge
          colorScheme="blue"
          borderRadius={'4px'}
          color="blue.800"
          height="27px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center">تصویر واضح</Badge>
        <Text>test3</Text>
      </VStack>
    </Box>
  )
}

export default ImageGuidCard
