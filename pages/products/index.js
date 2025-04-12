import MainLayout from "@/components/mainLayout";
import Header from "@/components/products/header";
import HeaderSlider from "@/components/products/headerslider";
import ProductCard from "@/components/products/productcard";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

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
          <Stack w={"100%"}>
            <Image src="./questionlogo.png" w={"509px"} h={"500px"} />
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
            <Image src="./questionlogo.png" w={"509px"} h={"500px"} />
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
        my={"20px"}
      >
        <HStack mb={'20px'}>
          <Text fontWeight={'bold'} fontSize={'20px'}>همه محصولات</Text>
          <Text></Text>
        </HStack>
        {
          <Grid templateColumns="repeat(3, 1fr)" gap={"2px"} w={"100%"}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        }
      </Box>
    </MainLayout>
  );
};

export default Index;
