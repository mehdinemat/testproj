const { VStack, Avatar, HStack, Divider, Text, Button } = require("@chakra-ui/react")

const ReferencesCard = () => {
  return (
    <HStack>
      <Avatar w={'128px'} h={'128px'} />
      <VStack w={'100%'} alignItems={'start'}>
        <Text>حسن الماسی</Text>
        <HStack>
          <Text fontSize={'xs'}>۳۵۶ پرسش</Text>
          <Divider height={'20px'} orientation="vertical" />
          <Text color={'#29CCCC'} fontSize={'xs'}>۱۳۸ پاسخ</Text>
        </HStack>
        <Button bgColor={'#29CCCC'} fontWeight={'normal'}>پایگاه اطلاع‌رسانی</Button>
      </VStack>
    </HStack>
  )
}

export default ReferencesCard
