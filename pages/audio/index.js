import AudioUpload from "@/components/audioUpload";
import Credit from "@/components/credit";
import Facilities from "@/components/Facilities";
import Guid from "@/components/guid";
import MainLayout from "@/components/mainLayout";
import Questions from "@/components/questions";
import { Button, Card, Grid, GridItem, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { IoAdd, IoFileTray, IoSettings } from "react-icons/io5";

const AudioPlayer = dynamic(() => import('@/components/audioPlayer'), { ssr: false });
const Index = () => {

  const [onFileUpload, setOnFileUpload] = useState('')

  return (
    <MainLayout>
      <Grid templateColumns='repeat(1, 1fr)' gap={'32px'} w={'100%'}>
        <GridItem as={VStack} alignItems={'start'} justifyContent={'start'}  >
          {/* <HStack w={'100%'} alignItems={'center'} justifyContent={'start'}>
            <MdKeyboardVoice />
            <Text fontWeight={'bold'}>عنوان صوت:</Text>
          </HStack> */}

          {/* <Card w={'100%'} overflow='hidden'
            variant='outline' bgColor={'white'} borderColor={'#3B82F6'} borderStyle={'dashed'} height={'127px'} padding={'16px'}>
            <AudioPlayer progressBar={true} downloading={true} />
          </Card> */}
          {onFileUpload && <HStack w={'100%'} alignItems={'end'} justifyContent={'end'} my={'16px'}>
            <Button leftIcon={<IoAdd />} colorScheme="blue" variant={'outline'}>افزودن ویس جدید</Button>
          </HStack>}
          {!onFileUpload
            ? <Card gap={'10px'} w={'100%'} padding={'15px'} variant='outline' borderRadius={'16px'}>
              <HStack w={'100%'} justifyContent={'space-between'}>
                <VStack alignItems={'start'}>
                  <Text fontSize={'xl'} fontWeight={'bold'}>تبدیل عکس و پی دی اف به متن</Text>
                  <Text color='gray.400'>تصویر یا پی‌ دی ‌اف خود را وارد کنید تا متن تایپ شده تحویل بگیرید!</Text>
                </VStack>
                <IconButton icon={<IoSettings />} colorScheme="gray" variant={'outline'} />
              </HStack>
              <AudioUpload onFileUpload={setOnFileUpload} title={'تبدیل عکس و پی دی اف به متن'} subTitle={'تصویر یا پی‌ دی ‌اف خود را وارد کنید تا متن تایپ شده تحویل بگیرید!'} />

            </Card>
            : <Card as={VStack} alignItems={'start'} variant='outline' justifyContent={'start'} w={'100%'} h={'400px'} overflow='hidden'
              variant='outline' bgColor={'white'} padding={'16px'}>
              <HStack>
                <IoFileTray color="#90A1B9" />
                <Text color={'#90A1B9'}>متن خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰:</Text>
              </HStack>
              <Text fontWeight={'bold'}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده ...
              </Text>
            </Card>}
          {onFileUpload && <HStack w={'100%'} justifyContent={'end'} my={'16px'}>
            <Button leftIcon={<IoAdd />} colorScheme="blue">ثبت تبدیل</Button>
          </HStack>}
        </GridItem>
        <GridItem>
          <Guid />
        </GridItem>
        <GridItem >
          <Facilities />
        </GridItem>
        <GridItem >
          <Credit />
        </GridItem>
        <GridItem>
          <Questions />
        </GridItem>
        {/* <GridItem as={VStack} colSpan={1} >
          <HStack w={'100%'} alignItems={'center'} justifyContent={'start'}>
            <LuHistory />
            <Text fontWeight={'bold'}>تاریخچه صوت:</Text>
          </HStack>
          <VStack h={'calc(100vh - 200px)'} w={'100%'} overflowY={'scroll'}>
            <Card w={'100%'} h={'125px'}
              variant='outline' bgColor={'white'} height={'140px'} padding={'16px'}>
              <VStack>
                <HStack w={'100%'} justifyContent={'space-between'} mb={'10px'}>
                  <Checkbox colorScheme="blue"></Checkbox>
                  <IoTrash color="red" />
                </HStack>
              </VStack>
              <AudioPlayer />
            </Card>
            <Card w={'100%'} h={'125px'}
              variant='outline' bgColor={'white'} height={'140px'} padding={'16px'}>
              <VStack>
                <HStack w={'100%'} justifyContent={'space-between'} mb={'10px'}>
                  <Checkbox colorScheme="blue"></Checkbox>
                  <IoTrash color="red" />
                </HStack>
              </VStack>
              <AudioPlayer />
            </Card>
            <Card w={'100%'} h={'125px'}
              variant='outline' bgColor={'white'} height={'140px'} padding={'16px'}>
              <VStack>
                <HStack w={'100%'} justifyContent={'space-between'} mb={'10px'}>
                  <Checkbox colorScheme="blue"></Checkbox>
                  <IoTrash color="red" />
                </HStack>
              </VStack>
              <AudioPlayer />
            </Card>
            <Card w={'100%'} h={'125px'}
              variant='outline' bgColor={'white'} height={'140px'} padding={'16px'}>
              <VStack>
                <HStack w={'100%'} justifyContent={'space-between'} mb={'10px'}>
                  <Checkbox colorScheme="blue"></Checkbox>
                  <IoTrash color="red" />
                </HStack>
              </VStack>
              <AudioPlayer />
            </Card>
            <Card w={'100%'} h={'125px'}
              variant='outline' bgColor={'white'} height={'140px'} padding={'16px'}>
              <VStack>
                <HStack w={'100%'} justifyContent={'space-between'} mb={'10px'}>
                  <Checkbox colorScheme="blue"></Checkbox>
                  <IoTrash color="red" />
                </HStack>
              </VStack>
              <AudioPlayer />
            </Card>
            <Card w={'100%'} h={'125px'}
              variant='outline' bgColor={'white'} height={'140px'} padding={'16px'}>
              <VStack>
                <HStack w={'100%'} justifyContent={'space-between'} mb={'10px'}>
                  <Checkbox></Checkbox>
                  <IoTrash color="red" />
                </HStack>
              </VStack>
              <AudioPlayer />
            </Card>
          </VStack>
        </GridItem> */}
      </Grid>
    </MainLayout>
  )
}

export default Index
