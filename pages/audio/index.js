import AudioUpload from "@/components/audioUpload";
import Credit from "@/components/credit";
import Facilities from "@/components/Facilities";
import Guid from "@/components/guid";
import MainLayout from "@/components/mainLayout";
import Questions from "@/components/questions";
import { Button, Card, Grid, GridItem, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from "react";
import { IoAdd, IoSettings } from "react-icons/io5";

const AudioPlayer = dynamic(() => import('@/components/audioPlayer'), { ssr: false });
const Index = () => {

  const [onFileUpload, setOnFileUpload] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [fastCharacter, setFastCharacter] = useState(false)
  const [textImage, setTextImage] = useState('')

  useEffect(() => {
    if (!onFileUpload) return;

    const fetchData = async () => {
      const formData = new FormData();
      formData.append("file", onFileUpload);
      console.log('this i s send file ')
      try {
        setIsLoading(true)
        const response = await axios.post(
          "http://192.168.10.161:8020/to_text/image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress(percentCompleted);
            },
          }
        );
        setIsLoading(false)
        setTextImage(response?.data);
      } catch (error) {

        setIsLoading(false)
        console.error("Error uploading audio:", error);
      }
    };

    fetchData();
  }, [onFileUpload]);

  const handleNewImageButton = () => {
    setFastCharacter(false)
    setOnFileUpload('')
    setUploadProgress(0)
  }

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
            <Button leftIcon={<IoAdd />} colorScheme="blue" variant={'outline'} onClick={handleNewImageButton}>افزودن تصویر جدید</Button>
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
            : <Card as={VStack} alignItems={'start'} variant='outline' justifyContent={'start'} w={'100%'} h={'400px'} overflow='hidden' bgColor={'white'} padding={'16px'}>
              <HStack>
                {/* <IoFileTray color="#90A1B9" /> */}
                <Text color={'#90A1B9'}></Text>
              </HStack>
              <Text fontWeight={'bold'}>
                {textImage?.original?.map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
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
