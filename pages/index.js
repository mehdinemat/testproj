import Header from "@/components/home/header";
import MainLayout from "@/components/mainLayout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import LeftSidebar from "@/components/home/leftsidebar";
import QuestionCard from "@/components/questionCars";
import SliderCom from "@/components/slider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
const items2 = [
  {
    image: "/img1.jpg",
  },
  {
    image: "/img2.jpg",
  },
  {
    image: "/img3.jpg",
  },
];

export default function Home({ children }) {

  return (
    <MainLayout>
      <Header />

      <Box
        w="100%"
        alignItems={"center"}
        justifyContent={"center"}
        maxW="container.xl"
        mx="auto"
        p={"20px"}
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={"20px"} w={"100%"}>

          {/* Right Sidebar */}
          <Box
            as={GridItem}
            colSpan={'1'}
            zIndex={100}
            border={"1px"}
            borderColor={"#EBEBEB"}
            borderRadius={"15px"}
            padding={'10px'}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              موضوعات
            </Text>
            <Accordion dir="rtl" mt={"20px"} w="100%">
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
          <Box p="6" as={GridItem}
            colSpan={'2'}>
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

            <Divider my={"20px"} />
            <QuestionCard />
            <Divider my={"20px"} />
            <QuestionCard />
            <Divider my={"20px"} />


          </Box>

          {/* Left Sidebar */}
          <Box height={"500px"} as={GridItem}
            colSpan={'1'}>
            <Box
              w={'100%'}
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
                <LeftSidebar />
                <Divider />
                <LeftSidebar />
                <Divider />
                <LeftSidebar />
                <Divider />
                <LeftSidebar />
                <Divider />
              </VStack>
            </Box>
            <Box
              w={'100%'}
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
          <GridItem colSpan={'3'} w={'100%'}>
            <SliderCom items={items} height={'380px'} borderRadius={'100%'} />
            <SliderCom items={items2} height={'270px'} width="350px" borderRadius={'0px'} />
          </GridItem>
        </Grid>
      </Box>

    </MainLayout >
  );
}
