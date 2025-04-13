import MainLayout from "@/components/mainLayout";
import Header from "@/components/product/header";
import SliderProduct from "@/components/product/slider";
import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";

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

const Index = () => {
  return (
    <MainLayout>
      <Header />
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
        <HStack dir="rtl" w={"100%"} justifyContent={"space-between"}>
          <VStack w={"100%"} alignItems={"start"}>
            <Text
              fontSize={"24px"}
              fontWeight={"bold"}
              w={"380px"}
              textAlign={"start"}
              mb={"10px"}
            >
              موتور جستجو هوشمند سؤالات
            </Text>
            <Text w={"400px"} fontSize={"16px"} textAlign={"start"}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </Text>
            <Button bgColor={"#29CCCC"} fontWeight={"normal"} mt={"20px"}>
              اطلاعات بیشتر
            </Button>
          </VStack>
          <Stack w={"100%"}>
            <Image src="../../questionlogo.png" w={"509px"} h={"500px"} />
          </Stack>
        </HStack>
      </Box>
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
        <HStack dir="rtl" w={"100%"} justifyContent={"space-between"}>
          <Stack w={"100%"}>
            <Image src="../../questionlogo.png" w={"509px"} h={"500px"} />
          </Stack>

          <VStack w={"100%"} alignItems={"start"}>
            <Text
              fontSize={"24px"}
              fontWeight={"bold"}
              w={"380px"}
              textAlign={"start"}
              mb={"10px"}
            >
              موتور جستجو هوشمند سؤالات
            </Text>
            <Text w={"400px"} fontSize={"16px"} textAlign={"start"}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </Text>
            <Button bgColor={"#29CCCC"} fontWeight={"normal"} mt={"20px"}>
              اطلاعات بیشتر
            </Button>
          </VStack>
        </HStack>
      </Box>
      <Box
        marginTop={"100px"}
        as={Stack}
        justifyContent={"center"}
        alignItems={"center"}
        width="100%"
        height={"564px"}
        bg={"#3646B3"}
        p={2}
        px={4}
        bgImage={"./homeheader.png"}
        bgSize="cover" // 👈 this makes it cover the container
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <HStack
          height={"500px"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <VStack
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
          >
            <Stack
              maxW="80%"
              mx="auto"
              py={4}
              top={'0px'}
              textAlign={'center'}
            // position={"absolute"}
            >
              <SliderProduct items={items} title={'سایر محصولات'} />
            </Stack>
          </VStack>
        </HStack>
      </Box>
    </MainLayout>
  );
};

export default Index;
