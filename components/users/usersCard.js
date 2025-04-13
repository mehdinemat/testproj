const { VStack, Avatar, HStack, Divider, Text, Button } = require("@chakra-ui/react")

const UsersCard = () => {
  return (
    <VStack>
      <Avatar w={'100px'} h={'100px'} />
      <Text>حسن الماسی</Text>
      <HStack>
        <Text>۳۵۶ پرسش</Text>
        <Divider height={'20px'} orientation="vertical" />
        <Text color={'#29CCCC'}>۱۳۸ پاسخ</Text>
      </HStack>
      <Button bgColor={'#29CCCC'} fontWeight={'normal'}>مشاهده پروفایل</Button>
    </VStack>
  )
}

export default UsersCard
