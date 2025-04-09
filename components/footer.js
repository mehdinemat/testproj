import { Box, Grid, GridItem, HStack, IconButton, Image, Text, VStack } from '@chakra-ui/react'
import { IoArrowBack, IoLogoAmazon, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box as={VStack} bgColor={'#162456'} w={'100%'} height={'387px'} borderRadius={'16px'} padding={'24px'}>
      <HStack w={'100%'} alignItems={'start'}>
        <Image src='./footerlogo.png' />
        <VStack alignItems={'start'}>
          <Text color={'white'}>تبدیل‌یار</Text>
          <Text color={'blue.500'} fontSize={'sm'}>سامانه هوشمند تبدیل پی‌ دی ‌اف به متن</Text>
        </VStack>
      </HStack>
      <HStack justifyContent={'start'} alignItems={'start'} mt={'10px'} gap={'50px'}>
        <VStack w={'100%'} alignItems={'start'}>
          <Text color={'white'}>دربارۀ ما</Text>
          <Text color={'#CAD5E2'} fontSize={'sm'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.</Text>
        </VStack>
        <VStack w={'100%'} alignItems={'start'}>
          <HStack>
            <Text color={'white'}>لینک ها</Text>
          </HStack>
          <HStack>
            <Text color={'white'}>ورود/ ثبت نام</Text>
            <IoArrowBack color='white' />
            <Text color={'white'}>پی دی اف به متن</Text>
            <IoArrowBack color='white' />
            <Text color={'white'}>تاریخچه</Text>
            <IoArrowBack color='white' />
          </HStack>
          <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} >
              <GridItem>
                <Text color={'white'}>ورود</Text>
              </GridItem>
              <GridItem>
                <Text color={'white'}>تبدیل</Text>
              </GridItem>
              <GridItem>
                <Text color={'white'}>مشاهده سوابق</Text>
              </GridItem>
              <GridItem>
                <Text color={'white'}>ثبت نام</Text>
              </GridItem>
              <GridItem>
                <Text color={'white'}>راهنما</Text>
              </GridItem>
              <GridItem>
                <Text color={'white'}>تبدیل صدا به متن</Text>
              </GridItem>
            </Grid>
          </Box>
        </VStack>
      </HStack>
      <HStack w={'100%'} alignItems={'start'} justifyContent={'space-between'}>
        <VStack alignItems={'start'} justifyContent={'start'}>
          <HStack>
            <Text color={'white'}>شبکه های اجتماعی ما</Text>
          </HStack>
          <HStack >
            <IconButton icon={<IoLogoInstagram />} />
            <IconButton icon={<IoLogoTwitter />} />
            <IconButton icon={<IoLogoAmazon />} />
          </HStack>
        </VStack>
        <Image src='./logo2footer.png' />
      </HStack>
    </Box>
  )
}

export default Footer
