import MainLayout from "@/components/mainLayout";
import Header from "@/components/news/header";
import NewsCard from "@/components/news/newsCard";
import SuggestCard from "@/components/news/suggestCard";
import { Box, Button, Grid, GridItem, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";

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
        pt={"60px"}
        my={"20px"}
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={"20px"} w={"100%"}>
          <GridItem colSpan={2}>
            <HStack w={'100%'} justifyContent={'space-between'} mb={'40px'}>
              <Text fontWeight={'bold'} fontSize={'20px'} w={'150px'}>آخرین اخبار</Text>
              <HStack w={'100%'} alignItems={'end'} justifyContent={'end'}>
                <HStack>
                  <IconButton icon={<BiSortAlt2 color="gray" />} />
                  <Button variant={'ghost'} fontSize={'sm'}>مرتب سازی براساس:</Button>
                </HStack>
                <HStack>
                  <Button variant={'ghost'} fontSize={'sm'}>جدیدترین‌ها</Button>
                  <Button variant={'ghost'} fontSize={'sm'}>پربازدیدترین‌ها</Button>
                  <Button variant={'ghost'} fontSize={'sm'}>محبوبترین‌ها</Button>
                </HStack>
              </HStack>
            </HStack>
            <VStack w={'100%'} gap={'10px'}>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </VStack>

          </GridItem>
          <GridItem>
            <VStack w={'100%'} alignItems={'start'} border={'1px'} borderRadius={'15px'} borderColor={'gray.200'} padding={'20px'}>
              <Text fontWeight={'bold'} fontSize={'20px'} mb={'20px'}>پیشنهاد سردبیر</Text>
              <SuggestCard />
              <SuggestCard />
              <SuggestCard />
              <SuggestCard />

            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </MainLayout>
  )
}

export default Index
