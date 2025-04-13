import MainLayout from "@/components/mainLayout";
import UsersCard from "@/components/users/usersCard";
import { Box, Button, Grid, HStack, IconButton, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

const Index = () => {
  return (
    <MainLayout>
      <Box
        marginTop={"100px"}
        w="100%"
        alignItems={"center"}
        justifyContent={"center"}
        maxW="container.xl"
        mx="auto"
        p={"20px"}
      >
        <HStack w={'100%'} justifyContent={'space-between'}>
          <Text fontWeight={'bold'}>کاربران</Text>
          <InputGroup width={'290px'} height={'46px'} >
            <Input width={'290px'} height={'46px'} placeholder="جستجو کاربر" />
            <InputRightElement h="100%">
              <IoSearch fontSize="20px"
                style={{ marginTop: "2px" }}
                color="gray" />
            </InputRightElement>
          </InputGroup>
        </HStack>
        <HStack w={'100%'} justifyContent={'space-between'} my={'20px'}>
          <Text>۲۳۵ کاربر</Text>
          <HStack>
            <HStack>
              <IconButton icon={<BiSortAlt2 color="gray" />} />
              <Text>مرتب سازی براساس:</Text>
            </HStack>
            <Button variant={'ghost'} colorScheme="gray" fontWeight={'normal'} _hover={{ bgColor: 'none' }}>جدیدترین‌ها</Button>
            <Button variant={'ghost'} colorScheme="gray" fontWeight={'normal'} _hover={{ bgColor: 'none' }}>پربازدیدترین‌ها</Button>
            <Button variant={'ghost'} colorScheme="gray" fontWeight={'normal'} _hover={{ bgColor: 'none' }}>محبوبترین‌ها</Button>
          </HStack>
        </HStack>
        <Grid templateColumns="repeat(5, 1fr)" gap={"20px"} w={"100%"}>
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
        </Grid>
      </Box>
    </MainLayout>
  )
}

export default Index
