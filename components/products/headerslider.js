import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // or 1 or 2
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
    <Box w="100%" alignItems={'center'} justifyContent={'center'} maxW="container.xl" mx="auto" p={'60px'} border={'1px'} borderColor={'gray.200'} borderRadius={'16px'} height={'100%'} my={'20px'}>
      <Slider {...sliderSettings}>
        {items.map((item, index) => (
          <Flex
            textAlign={'center'}
            w="100%"
            h="100%"
            key={index}
            p={'10px'}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Avatar w="128px" h="128px" borderRadius={'20px'} />
            {item.title && <Text fontWeight="bold" my={'20px'}>testsdf</Text>}
            {item.button && <Button bgColor={'#29CCCC'}>{item.button}</Button>}
          </Flex>
        ))}
      </Slider>
    </Box>
  )
}

export default HeaderSlider
