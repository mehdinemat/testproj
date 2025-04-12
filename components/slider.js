import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // or 1 or 2
  slidesToScroll: 1,
  rtl: false, // for RTL support
};




const SliderCom = ({ items, height, borderRadius, width = 'auto' }) => {
  return (
    <Box w="100%" alignItems={'center'} justifyContent={'center'} maxW="container.xl" mx="auto" p={'60px'} border={'1px'} borderColor={'gray.200'} borderRadius={'16px'} height={height} my={'20px'}>
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
            <Avatar w="128px" h="128px" borderRadius={borderRadius} />
            {item.title && <Text fontWeight="bold" my={'20px'}>{item.title}</Text>}
            {item.button && <Button bgColor={'#29CCCC'}>{item.button}</Button>}
          </Flex>
        ))}
      </Slider>
    </Box>
  )
}

export default SliderCom
