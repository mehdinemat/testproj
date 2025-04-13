import { Button, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { IoCalendar, IoTime } from 'react-icons/io5';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const NewsCard = () => {
  return (
    <HStack w={'100%'} alignItems={'start'} border={'1px'} borderColor={'gray.200'} borderRadius={'15px'}>
      <Image src='./newsphoto.png' width={'327px'} height={'224px'} />
      <VStack w={'100%'} alignItems={'start'} height={'224px'} justifyContent={'space-between'}>
        <VStack alignItems={'start'} padding={'10px'}>
          <Text fontWeight={'bold'}>آیا پیامبر اکرم و ائمه اطهار (ع) بین نماز ظهر و عصر جمع می کردند؟</Text>
          <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز...</Text>
        </VStack>
        <VStack >
          <Divider />
          <HStack py={'5px'}>
            <HStack color={'gray'}>
              <HStack>
                <IoCalendar color='gray' />
                <Text>۱۶ دی ۱۴۰۲، دی ۱۴۰۲  </Text>
              </HStack>
              <HStack>
                <IoTime color='gray' />
                <Text>زمان مورد نیاز برای مطالعه: ۷ دقیقه</Text>
              </HStack>
            </HStack>
            <Button variant={'ghost'} color={'#29CCCC'} rightIcon={<MdOutlineKeyboardArrowLeft />}>ادامه مطلب</Button>
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  )
}

export default NewsCard
