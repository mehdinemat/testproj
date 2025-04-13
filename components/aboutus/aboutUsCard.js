const { VStack, Avatar, HStack, Divider, Text, Button } = require("@chakra-ui/react")

const AboutUsCard = () => {
  return (
    <VStack>
      <Avatar w={'100px'} h={'100px'} />
      <Text fontWeight={'bold'} my={'5px'}>محمدحسین الهی منش</Text>
      <HStack>
        <Text>دکتری دانشگاه صنعتی شاهرود</Text>
      </HStack>
    </VStack>
  )
}

export default AboutUsCard

