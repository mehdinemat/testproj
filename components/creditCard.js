import { Box, Button, Image, Text, VStack } from "@chakra-ui/react"

const CreditCard = ({ title, subTitle, width, height, header, price }) => {
  return (
    <Box
      padding={'24px'}
      width={'100%'}
      height={height} // or whatever height
      bg="white"
      borderRadius="16px"
      boxShadow="sm"
      sx={header && {
        background: "radial-gradient(80.69% 140.69% at 50% 0%, rgba(0, 122, 255, 0) 41.5%, rgba(0, 122, 255, 0.48) 100%)",
      }}>
      <VStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} height={'100%'}>
        {
          header && <Image src="./order.png" />
        }
        <VStack>
          <Text color={'#1D293D'} fontSize={'16px'}>{title}</Text>
          <Text color={'#62748E'} fontSize={'12px'}>{subTitle}</Text>
        </VStack>
        <VStack>
          <Text>{price}</Text>
          <Button variant={header ? 'solid' : 'outline'} colorScheme="blue" width={'160px'}>خرید اعتبار</Button>
        </VStack>
      </VStack>
    </Box>
  )
}

export default CreditCard
