import MessageBox from "@/components/chatBox";
import MainLayout from "@/components/mainLayout";
import { Button, Card, CardBody, HStack, IconButton, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaEquals } from "react-icons/fa6";
import { IoAdd, IoSend } from "react-icons/io5";

const Index = () => {
  return (
    <MainLayout>
      <HStack backgroundColor={'#f8fafc'}>
        <VStack w={'100%'} alignItems={'center'} ml={'200px'} justifyContent={'space-between'} height={'calc( 100vh - 130px )'} px={'100px'}>
          <VStack w={'100%'} alignItems={'center'}>
            <Text fontSize={'sm'} color={'gray.500'} bgColor={'white'} padding={'5px'} px={'10px'} borderRadius={'10px'}>امروز</Text>
            <VStack w={'100%'} alignItems={'start'} justifyContent={'start'}>
              <MessageBox message={'سلام این برای تست است'} />
              <Card >
                <CardBody>
                  <Text fontSize={'sm'}>
                    بله، در روز جمعه نیز می‌توان نماز نافله خواند. نافله‌های روزانه شامل نافله‌های شبانه‌روز و نافله مخصوص روز جمعه می‌شود.
                    نافله‌های روز جمعه:
                    نافله‌های روزانه:
                    نافله صبح (۲ رکعت)
                    نافله ظهر (۴ رکعت، ولی در روز جمعه ۸ رکعت خوانده می‌شود)
                    نافله عصر (۸ رکعت)
                    نافله مغرب (۴ رکعت)
                    نافله عشاء (۲ رکعت نشسته)
                    نافله مخصوص روز جمعه:
                    در روز جمعه نافله ظهر به جای ۴ رکعت، ۸ رکعت خوانده می‌شود (یعنی مجموعاً ۱۶ رکعت برای نافله ظهر و عصر).
                    نکات مهم:
                    نافله‌ها را می‌توان قبل از نماز واجب یا در صورت از دست رفتن، قضای آن را خواند.
                    نافله‌های شب از اهمیت زیادی برخوردارند و مخصوصاً در شب جمعه تأکید بیشتری بر خواندن آن شده است.
                    پس خواندن نافله در روز جمعه نه‌تنها جایز، بلکه بسیار مستحب و دارای فضیلت است. 😊
                  </Text>
                </CardBody>
              </Card>

            </VStack>
          </VStack>

          <HStack w={'100%'} alignItems={'end'}>
            <IconButton icon={<IoSend />} bgColor={'white'} color={'blue.500'} borderRadius={'50px'} />
            <Textarea h={'20px'} bgColor={'white'} borderRadius={'20px'} borderBottomRightRadius={0} placeholder="سوال خود را بپرسید..."></Textarea>
          </HStack>
        </VStack>
        <VStack w={'200px'} padding={'32px'} backgroundColor={'white'} borderRight={'1px'} borderColor={'gray.200'} h={'calc( 100vh - 76px )'} position={'absolute'} left={'0px'} top={'76px'} alignItems={'start'}>
          <HStack>
            <Button colorScheme="blue" rightIcon={<IoAdd />} >سوال جدید</Button>
            <IconButton icon={<FaEquals />} colorScheme="blue" variant={'soft'} />
          </HStack>
          <Text color={'gray.500'} fontSize={'sm'}>امروز</Text>
          <Text fontSize={'sm'}>نماز نافله در روز جمعه</Text>
          <Text fontSize={'sm'}>خطبه های نماز جمعه</Text>
          <Text color={'gray.500'} fontSize={'sm'}>هفته اخیر</Text>
          <Text fontSize={'sm'}>نماز نافله در روز جمعه</Text>
          <Text fontSize={'sm'}>خطبه های نماز جمعه</Text>
        </VStack>
      </HStack>
    </MainLayout >
  )
}

export default Index
