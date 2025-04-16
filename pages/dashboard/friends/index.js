import MainLayout from "@/components/mainLayout"
import UsersCard from "@/components/users/usersCard"
import { Box, Button, Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react"
import { TbArrowsSort } from "react-icons/tb"
import RightSidebar from "../rightSidebar"

const Index = () => {
  return (
    <MainLayout>
      <Box
        w="100%"
        alignItems={"center"}
        justifyContent={"center"}
        maxW="container.xl"
        mx="auto"
        p={{ base: '20px', md: "60px" }}
        my={"20px"}
        mt={'60px'}
      >
        <Grid templateColumns='repeat(3, 1fr)' gap={'32px'} w={'100%'}>
          <GridItem colSpan={1}>
            <RightSidebar />
          </GridItem>
          <GridItem as={Stack} gap={'20px'} colSpan={2} >
            <Box p="6" colSpan={'2'}>
              <HStack w={"100%"}
                justifyContent={"space-between"}
                mb={"10px"}
                alignItems={"start"}>
                <Text fontSize={"14px"}>
                  ۲۵۸ دوست
                </Text>
                <HStack>
                  <TbArrowsSort />
                  <Text fontSize={'sm'}>مرتب سازی بر اساس:</Text>
                  <Button colorScheme="gray" variant={'ghost'} _hover={{ bgColor: 'none' }} fontWeight={'normal'} fontSize={'sm'}>جدیدترین‌ها</Button>
                  <Button colorScheme="gray" variant={'ghost'} _hover={{ bgColor: 'none' }} fontWeight={'normal'} fontSize={'sm'}>پربازدیدترین‌ها</Button>
                  <Button colorScheme="gray" variant={'ghost'} _hover={{ bgColor: 'none' }} fontWeight={'normal'} fontSize={'sm'}>محبوبترین‌ها</Button>
                </HStack>
              </HStack>
              <Grid templateColumns='repeat(4, 1fr)' mt={'40px'}>
                <UsersCard />
                <UsersCard />
                <UsersCard />
                <UsersCard />

              </Grid>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </MainLayout>
  )
}

export default Index
