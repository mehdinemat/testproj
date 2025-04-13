import { Avatar, Box, Button, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // or 1 or 2
  slidesToScroll: 1,
  rtl: false, // for RTL support
};




const SliderProduct = ({ items, height, borderRadius, width = 'auto', title }) => {
  return (
    <VStack w={'100%'} p={'40px'} alignItems={'start'} height={height} my={'20px'}>
      <HStack w={'100%'} justifyContent={'space-between'}>
        <Text fontWeight={'bold'} color={'white'}>{title}</Text>
        <HStack>
          <Text color={'#23D9D7'}>مشاهده همه</Text>
          <IconButton icon={<IoArrowBack color="#23D9D7" />} />
        </HStack>
      </HStack>
      <Box w="100%" alignItems={'center'} justifyContent={'center'} mx="auto" >
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
              {item.title && <Text my={'20px'} color={'white'}>سرویس اصلاح خطای نوشتاری</Text>}
              {item.button && <Button bgColor={'#29CCCC'}>{item.button}</Button>}
            </Flex>
          ))}
        </Slider>
      </Box>
    </VStack>

  )
}

export default SliderProduct
