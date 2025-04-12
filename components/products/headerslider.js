import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Global } from "@emotion/react";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // or 1 or 2
  slidesToScroll: 1,
  rtl: false, // for RTL support
};

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



const HeaderSlider = () => {
  return (
    <Box
      w="100%"
      alignItems={"center"}
      justifyContent={"center"}
      maxW="container.xl"
      mx="auto"
      p={"60px"}
      height={"100%"}
      my={"20px"}
    >
      <Slider {...sliderSettings}>
        {items.map((item, index) => (
          <Flex
            textAlign={"center"}
            w="100%"
            h="100%"
            key={index}
            p={"10px"}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack dir="rtl">
              <VStack w={'100%'} alignItems={'start'}>
                <Text fontSize={'24px'} fontWeight={'bold'} color={'white'} w={'180px'} textAlign={'start'}>موتور جستجو هوشمند سؤالات</Text>
                <Text w={'500px'} fontSize={'16px'}textAlign={'start'}color={'white'}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </Text>
                <Button bgColor={'#29CCCC'} fontWeight={'normal'} mt={'20px'}>اطلاعات بیشتر</Button>
              </VStack>
              <Image src="./headerslider.png" w={'509px'} h={'500px'}/>
            </HStack>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default HeaderSlider;
