import { SimpleGrid, Text, VStack } from "@chakra-ui/react"
import FacilitiesCard from "./facilitiesCard"

const Facilities = () => {
  return (
    <VStack w={'100%'}>
      <Text fontSize={'xl'} fontWeight={'bold'}>امکانات ما</Text>
      <Text color='gray.400'>برای شخصی سازی بهتر پرونده های شما</Text>
      <Text color='#1D293D' textAlign={'center'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته.</Text>
      <SimpleGrid
        spacing="24px"
        minChildWidth="272px"
        width="100%"
      >
        <FacilitiesCard imageLink={'./f1.png'} title={'دقت بالا در تشخیص'} subTitle={'دقت بالا و سریع در شناسایی و تشخیص متن و صوت و استخراج آن به فایل دلخواه'} />
        <FacilitiesCard imageLink={'./f2.png'} title={'تبدیل سریع و همزمان'} subTitle={'تبدیل بدون تاخیر و سریع فایل اصلی به فایل تبدیل شده'} />
        <FacilitiesCard imageLink={'./f3.png'} title={'تبدیل هر نوع فایل'} subTitle={'تبدیل انواع فایل‌های متنی، تصویری و صوتی به فایل دلخواه شما'} />
        <FacilitiesCard imageLink={'./f4.png'} title={'استفاده از هوش مصنوعی'} subTitle={'کمک گیری از هوش مصنوعی برای بالاتر بردن کیفیت و اصلاح علائم نگارشی '} />
      </SimpleGrid>
    </VStack>

  )
}

export default Facilities
