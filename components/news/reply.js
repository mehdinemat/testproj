import { Avatar, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";

const Reply = () => {
  return (
    <VStack w={'100%'} alignItems={'start'} border={'1px'} borderRadius={'10px'} borderColor={'gray.200'} padding={'20px'} my={'5px'} mt={'20px'}>
      <HStack>
        <Avatar w={'64px'} h={'64px'} />
        <VStack>
          <Text>حسن الماسی</Text>
          <Text color={'gray'}>۱۴۰۲ رهم ۲۳</Text>
        </VStack>
      </HStack>
      <HStack>
        <Image src="./star.png" />
        <Text>4/5</Text>
      </HStack>
      <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه</Text>
      <HStack>
        <AiOutlineLike color="gray" />
        <Text>مفید بود</Text>
      </HStack>
    </VStack>
  )
}

export default Reply
