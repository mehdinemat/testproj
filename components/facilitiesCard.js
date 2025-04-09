import { Box, Image, Text, VStack } from "@chakra-ui/react"

const FacilitiesCard = ({ imageLink, title, subTitle }) => {
  return (
    <Box
      padding={'24px'}
      width="272px"
      height="167px" // or whatever height
      bg="white"
      borderRadius="16px"
      boxShadow="sm">
      <VStack w={'100%'} alignItems={'center'}>
        <Image src={imageLink} height={'40px'} />
        <Text color={'#1D293D'} fontSize={'20px'}>{title}</Text>
        <Text color={'#62748E'} fontSize={'12px'}>{subTitle}</Text>
      </VStack>
    </Box>
  )
}

export default FacilitiesCard
