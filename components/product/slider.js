import { Avatar, Box, Button, Flex, HStack, IconButton, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";







const SliderProduct = ({ items, height, borderRadius, width = 'auto', title }) => {

  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 4 }); // responsive value


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    rtl: false,
  };


  return (
    <VStack w={'100%'} p={{ base: '0px', md: '40px' }} justifyContent={{ base: 'center' }} alignItems={'start'} height={height} my={'20px'}>
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
