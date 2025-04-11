import Header from "@/components/home/header";
import MainLayout from "@/components/mainLayout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  IoArrowBack,
  IoCheckmark,
  IoDocuments,
  IoEye,
  IoMicOff,
  IoOptions,
} from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const menuList = [
  {
    title: "صفحه اصلی",
    icon: <MdKeyboardVoice fontSize={"18px"} />,
    link: "audio",
  },
  { title: "تصویر به متن", icon: <IoDocuments fontSize={"18px"} /> },
  { title: "صوت به متن", icon: <FaHeadphonesAlt fontSize={"18px"} /> },
  // { title: 'ارتباط دادن نماز جمعه و حاکمیت', icon: <FaPrayingHands fontSize={'18px'} /> },
  // { title: 'صفحه مسئولین', icon: <BsFillPersonFill fontSize={'18px'} /> },
  // { title: 'بانک اطلاعات مسائل مربوط نماز جمعه', icon: <IoFileTrayStacked fontSize={'18px'} /> },
  // { title: 'توصیف خطبه', icon: <FaFile fontSize={'18px'} /> },
];

const siteData = [
  {
    title: "سوال",
    number: "234",
  },
  {
    title: "برچسب",
    number: "52353",
  },
  {
    title: "مرجع",
    number: "43",
  },
  {
    title: "منبع",
    number: "2",
  },
  {
    title: "زبان",
    number: "3",
  },
];

const items = [
  {
    image: "/img1.jpg",
    title: "آیت الله محمدتقی بهجت فومنی",
    button: "اطلاعات بیشتر",
  },
  {
    image: "/img2.jpg",
    title: "آیت الله جعفر سبحانی خیابانی تبریزی",
    button: "اطلاعات بیشتر",
  },
  {
    image: "/img3.jpg",
    title: "آیت الله سید عبدالکریم موسوی اردبیلی",
    button: "اطلاعات بیشتر",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5, // or 1 or 2
  slidesToScroll: 1,
  rtl: true, // for RTL support
};

export default function Home({ children }) {
  const router = useRouter();

  const handleButtonClick = (link) => {
    router.replace(link);
  };

  return (
    <MainLayout>
      <Header />
      <Flex as={Container} maxW="fit-content" w="100%" minH="100vh">
        {/* Right Sidebar */}
        <Box
          w="328px"
          p="4"
          border={"1px"}
          borderColor={"#EBEBEB"}
          borderRadius={"15px"}
        >
          <Text fontWeight={"bold"} fontSize={"16px"}>
            موضوعات
          </Text>
          <Accordion dir="rtl" mt={"20px"} w="300px">
            <AccordionItem>
              <h2>
                <AccordionButton flexDirection="row-reverse">
                  <AccordionIcon ml={2} />
                  <Box as="span" flex="1" textAlign="right">
                    تب اول
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>لورم ایپسوم متن ساختگ</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton flexDirection="row-reverse">
                  <AccordionIcon ml={2} />
                  <Box as="span" flex="1" textAlign="right">
                    تب دوم
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>لورم ایپسوم متن ساختگی</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton flexDirection="row-reverse">
                  <AccordionIcon ml={2} />
                  <Box as="span" flex="1" textAlign="right">
                    تب دوم
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>لورم ایپسوم متن ساختگی</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton flexDirection="row-reverse">
                  <AccordionIcon ml={2} />
                  <Box as="span" flex="1" textAlign="right">
                    تب دوم
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>لورم ایپسوم متن ساختگی</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton flexDirection="row-reverse">
                  <AccordionIcon ml={2} />
                  <Box as="span" flex="1" textAlign="right">
                    تب دوم
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>لورم ایپسوم متن ساختگی</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton flexDirection="row-reverse">
                  <AccordionIcon ml={2} />
                  <Box as="span" flex="1" textAlign="right">
                    تب دوم
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>لورم ایپسوم متن ساختگی</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        {/* Main Content */}
        <Box flex="1" p="6">
          <HStack
            w={"100%"}
            justifyContent={"space-between"}
            mb={"10px"}
            alignItems={"start"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              سؤال‌ها پیشنهادی
            </Text>
            <Button
              width={"189px"}
              height={"50px"}
              bgColor={"#F9C96D"}
              color={"black"}
              fontWeight={"normal"}
            >
              سوال خود را بپرسید
            </Button>
          </HStack>
          <HStack w={"100%"} alignItems={"start"}>
            <VStack w={"150px"} alignItems={"start"}>
              <HStack color={"gray.400"}>
                <IoArrowBack fontSize={"20px"} />
                <Text>3 پسند</Text>
              </HStack>
              <HStack color={"gray.400"}>
                <IoCheckmark fontSize={"20px"} />
                <Text>3 جواب</Text>
              </HStack>
              <HStack color={"gray.400"}>
                <IoEye fontSize={"20px"} />
                <Text>87 بازدید</Text>
              </HStack>
              <HStack></HStack>
            </VStack>
            <VStack w={"100%"} alignItems={"start"} gap={"20px"}>
              <Text>
                آیا می‌توان نذر کرد که فطریه را به زلزله زده‌گان داد؟ اگر
                نتوانیم آن را انجام دهیم، آیا می‌توان فطریه را به یک بدهکار
                ورشکسته داد؟
              </Text>
              <HStack>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px" // optional: add some horizontal padding
                >
                  خداشناسی
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  توحید
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  فقه سیاسی
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  پزشکی
                </Badge>
              </HStack>
              <HStack w={"100%"}>
                <HStack>
                  <Avatar size={"sm"} />
                  <Text color={"gray.400"} w={"100px"}>
                    اسلام کوئست
                  </Text>
                </HStack>
                <Divider
                  orientation="vertical"
                  w={"5px"}
                  borderColor={"gray.400"}
                  height={"40px"}
                />
                <HStack>
                  <Avatar size={"sm"} />
                  <Text color={"gray.400"} w={"100px"}>
                    اسلام کوئست
                  </Text>
                </HStack>

                <HStack w={"100%"} justifyContent={"end"}>
                  <Text w={"120px"} color={"gray.400"}>
                    پاسخ ۲۱ ساعت قبل
                  </Text>
                  <AvatarGroup size="sm" max={2}>
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />
                    <Avatar
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Avatar
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                    />
                  </AvatarGroup>
                </HStack>
              </HStack>
            </VStack>
          </HStack>
          <Divider my={"20px"} />
          <HStack w={"100%"} alignItems={"start"}>
            <VStack w={"150px"} alignItems={"start"}>
              <HStack color={"gray.400"}>
                <IoArrowBack fontSize={"20px"} />
                <Text>3 پسند</Text>
              </HStack>
              <HStack color={"gray.400"}>
                <IoCheckmark fontSize={"20px"} />
                <Text>3 جواب</Text>
              </HStack>
              <HStack color={"gray.400"}>
                <IoEye fontSize={"20px"} />
                <Text>87 بازدید</Text>
              </HStack>
              <HStack></HStack>
            </VStack>
            <VStack w={"100%"} alignItems={"start"}>
              <Text>
                آیا می‌توان نذر کرد که فطریه را به زلزله زده‌گان داد؟ اگر
                نتوانیم آن را انجام دهیم، آیا می‌توان فطریه را به یک بدهکار
                ورشکسته داد؟
              </Text>
              <HStack>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px" // optional: add some horizontal padding
                >
                  خداشناسی
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  توحید
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  فقه سیاسی
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  پزشکی
                </Badge>
              </HStack>
              <HStack w={"100%"}>
                <HStack>
                  <Avatar size={"sm"} />
                  <Text color={"gray.400"} w={"100px"}>
                    اسلام کوئست
                  </Text>
                </HStack>
                <Divider
                  orientation="vertical"
                  w={"5px"}
                  borderColor={"gray.400"}
                  height={"40px"}
                />
                <HStack>
                  <Avatar size={"sm"} />
                  <Text color={"gray.400"} w={"100px"}>
                    اسلام کوئست
                  </Text>
                </HStack>

                <HStack w={"100%"} justifyContent={"end"}>
                  <Text w={"120px"} color={"gray.400"}>
                    پاسخ ۲۱ ساعت قبل
                  </Text>
                  <AvatarGroup size="sm" max={2}>
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />
                    <Avatar
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Avatar
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                    />
                  </AvatarGroup>
                </HStack>
              </HStack>
            </VStack>
          </HStack>
          <Divider my={"20px"} />
          <HStack w={"100%"} alignItems={"start"}>
            <VStack w={"150px"} alignItems={"start"}>
              <HStack color={"gray.400"}>
                <IoArrowBack fontSize={"20px"} />
                <Text>3 پسند</Text>
              </HStack>
              <HStack color={"gray.400"}>
                <IoCheckmark fontSize={"20px"} />
                <Text>3 جواب</Text>
              </HStack>
              <HStack color={"gray.400"}>
                <IoEye fontSize={"20px"} />
                <Text>87 بازدید</Text>
              </HStack>
              <HStack></HStack>
            </VStack>
            <VStack w={"100%"} alignItems={"start"}>
              <Text>
                آیا می‌توان نذر کرد که فطریه را به زلزله زده‌گان داد؟ اگر
                نتوانیم آن را انجام دهیم، آیا می‌توان فطریه را به یک بدهکار
                ورشکسته داد؟
              </Text>
              <HStack>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px" // optional: add some horizontal padding
                >
                  خداشناسی
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  توحید
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  فقه سیاسی
                </Badge>
                <Badge
                  color="#16A6A6"
                  bgColor="#29CCCC1A"
                  height="26px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8px"
                >
                  پزشکی
                </Badge>
              </HStack>
              <HStack w={"100%"}>
                <HStack>
                  <Avatar size={"sm"} />
                  <Text color={"gray.400"} w={"100px"}>
                    اسلام کوئست
                  </Text>
                </HStack>
                <Divider
                  orientation="vertical"
                  w={"5px"}
                  borderColor={"gray.400"}
                  height={"40px"}
                />
                <HStack>
                  <Avatar size={"sm"} />
                  <Text color={"gray.400"} w={"100px"}>
                    اسلام کوئست
                  </Text>
                </HStack>

                <HStack w={"100%"} justifyContent={"end"}>
                  <Text w={"120px"} color={"gray.400"}>
                    پاسخ ۲۱ ساعت قبل
                  </Text>
                  <AvatarGroup size="sm" max={2}>
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />
                    <Avatar
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Avatar
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                    />
                  </AvatarGroup>
                </HStack>
              </HStack>
            </VStack>
          </HStack>
          <Divider my={"20px"} />
          <Box w="100%" maxW="container.xl" mx="auto" py={6} border={'1px'} borderColor={'gray.200'} borderRadius={'16px'}> 
            <Slider {...sliderSettings}>
              {items.map((item, index) => (
                <VStack
                  w={"100%"}
                  display={"flex"}
                  key={index}
                  p={4}
                  spacing={'20px'}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Avatar w="100px" h="100px" />
                  <Text fontWeight="bold">{item.title}</Text>
                  <Button colorScheme="teal">{item.button}</Button>
                </VStack>
              ))}
            </Slider>
          </Box>
          <Box w="100%" maxW="container.xl" mx="auto" py={6} border={'1px'} borderColor={'gray.200'} borderRadius={'16px'}> 
            <Slider {...sliderSettings}>
              {items.map((item, index) => (
                <VStack
                  w={"100%"}
                  display={"flex"}
                  key={index}
                  p={4}
                  spacing={'20px'}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Avatar w="100px" h="100px" />
                  <Text fontWeight="bold">{item.title}</Text>
                  <Button colorScheme="teal">{item.button}</Button>
                </VStack>
              ))}
            </Slider>
          </Box>
        </Box>

        {/* Left Sidebar */}
        <Box w="328px" p="4" height={"500px"}>
          <Box
            w="328px"
            p="4"
            border={"1px"}
            borderColor={"#EBEBEB"}
            borderRadius={"15px"}
            height={"500px"}
            mb={"30px"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              منابع سوال ها
            </Text>
            <VStack mt={"20px"} w={"100%"} alignItems={"start"}>
              <HStack>
                <Image
                  src="#"
                  w={"60px"}
                  bgColor={"gray.300"}
                  height={"60px"}
                  borderRadius={"10px"}
                />
                <VStack>
                  <Text fontSize={"18px"}>اسلام کوئست</Text>
                  <Text color={"gray.500"}>۳۵۶ پرسش</Text>
                </VStack>
              </HStack>
              <Divider />
              <HStack>
                <Image
                  src="#"
                  w={"60px"}
                  bgColor={"gray.300"}
                  height={"60px"}
                  borderRadius={"10px"}
                />
                <VStack>
                  <Text fontSize={"18px"}>اسلام کوئست</Text>
                  <Text color={"gray.500"}>۳۵۶ پرسش</Text>
                </VStack>
              </HStack>
              <Divider />
              <HStack>
                <Image
                  src="#"
                  w={"60px"}
                  bgColor={"gray.300"}
                  height={"60px"}
                  borderRadius={"10px"}
                />
                <VStack>
                  <Text fontSize={"18px"}>اسلام کوئست</Text>
                  <Text color={"gray.500"}>۳۵۶ پرسش</Text>
                </VStack>
              </HStack>
              <Divider />
              <HStack>
                <Image
                  src="#"
                  w={"60px"}
                  bgColor={"gray.300"}
                  height={"60px"}
                  borderRadius={"10px"}
                />
                <VStack>
                  <Text fontSize={"18px"}>اسلام کوئست</Text>
                  <Text color={"gray.500"}>۳۵۶ پرسش</Text>
                </VStack>
              </HStack>
              <Divider />
              <HStack>
                <Image
                  src="#"
                  w={"60px"}
                  bgColor={"gray.300"}
                  height={"60px"}
                  borderRadius={"10px"}
                />
                <VStack>
                  <Text fontSize={"18px"}>اسلام کوئست</Text>
                  <Text color={"gray.500"}>۳۵۶ پرسش</Text>
                </VStack>
              </HStack>
              <Divider />
            </VStack>
          </Box>
          <Box
            w="328px"
            p="4"
            border={"1px"}
            borderColor={"#EBEBEB"}
            borderRadius={"15px"}
            height={"500px"}
            bgColor={"#CFF186"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              حدیث روز
            </Text>
            <Text mt={"10px"}>
              عن الامام الحسن علیه السلام: «رَأَیْتُ أُمِّی فَاطِمَةَ ع قَامَتْ
              فِی مِحْرَابِهَا لَیْلَةَ جُمُعَتِهَا فَلَمْ تَزَلْ رَاکِعَةً
              سَاجِدَةً حَتَّى اتَّضَحَ عَمُودُ الصُّبْحِ وَ سَمِعْتُهَا تَدْعُو
              لِلْمُؤْمِنِینَ» در محرابش ایستاده بود و پیوسته در حال رکوع و سجده
              بود تا اینکه روشنایی صبح نمایان شد و از او شنیدم که برای مردان و
              زنان مومن دعا می‌کرد و با اسم آنان را نام می‌برد و برایشان زیاد
              دعا می‌کرد. علل الشرائع، ج‏۱ ص ۱۸۱ بحارالانوار، ج ۴۳ ص ۸۲ (۱۶۶۷)
            </Text>
          </Box>
        </Box>
      </Flex>
    </MainLayout>
  );
}
