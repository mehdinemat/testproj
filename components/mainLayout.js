import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import {
  IoIosArrowDown,
  IoIosNotificationsOutline,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";
import { IoCall, IoLocation, IoSearch } from "react-icons/io5";
import useSWR from "swr";

const menuList = [
  {
    title: "سوال ها",
  },
  {
    title: "برچسب ها",
  },
  {
    title: "کاربران",
  },
  {
    title: "محصولات",
  },
];

const MainLayout = ({ children }) => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  const { data: dataHistoric, isLoading: isLoadingHistoric } =
    useSWR("to_text/histories");

  const { onOpen, isOpen, onClose } = useDisclosure();

  const handleButtonClick = (link) => {
    router.replace(link);
  };

  useEffect(() => {
    console.log("Adding scroll event listener");
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("Removing scroll event listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log("this si scroll");
    const scrollTop = window.scrollY;
    const sidebar = document.getElementById("rightSidebar");
    const sidebarOffsetTop = sidebar?.offsetTop;

    if (scrollTop >= sidebarOffsetTop) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleBuy = () => {
    onOpen();
  };
  return (
    <VStack minHeight="100vh" w={"100%"} alignItems={"start"} gap={0}>
      {/* header */}
      <Box
        as={Stack}
        position="fixed" // 👈 Make it fixed
        top={0}
        left={0}
        zIndex={999} // 👈 Ensure it stays on top
        width="100%"
        height="100px"
        alignItems={"center"}
        justifyContent={"center"}
        bg="white"
        p={2}
        px={4}
        borderBottom="1px"
        borderBottomColor="gray.200"
      >
        <HStack
          as={Container}
          maxW="container.xl"
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack w={"100%"} alignItems={"center"} height={"100%"}>
            <HStack ml={"20px"}>
              <Image src="./question.png" width={"40px"} height={"56px"} />
              <Image src="./parsaheader.png" width={"91px"} height={"37px"} />
            </HStack>
            <InputGroup width={"327px"}>
              <Input height={"46px"} />
              <InputRightElement h="100%">
                <IoSearch
                  fontSize="20px"
                  style={{ marginTop: "2px" }}
                  color="#29CCCC"
                />
              </InputRightElement>
            </InputGroup>
          </HStack>
          <HStack spacing={4}>
            {menuList?.map((item) => (
              <Text textAlign={"center"} w={"80px"}>
                {item?.title}
              </Text>
            ))}
            <Menu>
              <MenuButton px={4} py={2} transition="all 0.2s">
                <HStack>
                  <Text>فارسی</Text>
                  <IoIosArrowDown />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>انگلیسی</MenuItem>
                <MenuItem>عربی</MenuItem>
              </MenuList>
            </Menu>
            <Button w={"120px"} bgColor={"#29CCCC"} fontWeight={"normal"}>
              ورود/ثبت نام
            </Button>
            <IoIosNotificationsOutline fontSize={"20px"} color="#29CCCC" />
            <GiDiamondRing fontSize={"20px"} color="#29CCCC" />

            <Menu>
              <MenuButton px={4} py={2} transition="all 0.2s">
                <HStack>
                  <Avatar size={"sm"} />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>انگلیسی</MenuItem>
                <MenuItem>عربی</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Box>
      {/* header */}

      <HStack
        height={"calc( 100vh )"}
        w={"100%"}
        gap={0}
        alignItems={"start"}
        overflowY={"scroll"}
      >
        {/* Main content area */}
        <VStack height={"calc( 100vh - 76px )"} w={"100%"} gap={0} >
          {children}
          <Stack w={"100%"} height={"427px"} bg="#F7F7F7" alignItems={'center'}>
            <Box
              as="footer"
              p={4}
              textAlign="center"
              w={"80%"}
              height={"427px"}
              bg="#F7F7F7"
            >
              <Container maxW="80%" mx="auto" py={4} height={"427px"}>
                <HStack
                  height={"100%"}
                  alignItems={"start"}
                  justifyContent={"space-between"}
                >
                  <VStack alignItems={"center"} gap={"20px"} height={"100%"}>
                    <Image
                      src="./question.png"
                      width={"51px"}
                      height={"72px"}
                    />
                    <Image
                      src="./parsaheader.png"
                      width={"118px"}
                      height={"48px"}
                    />
                    <Text w={"326px"} fontSize={"16px"}>
                      پارسا موتور جستجوی پرسش و پاسخ‌های حوزه علوم اسلامی به
                      زبان‌های مختلف از منابع معتبر است؛که هدف آن افزایش دانش و
                      دسترسی ساخت یافته مخاطبین به پرسش و پاسخ‌های دینی است.
                    </Text>
                  </VStack>
                  <VStack alignItems={"start"} gap={"20px"} height={"100%"}>
                    <Text
                      color={"#3646B3"}
                      fontSize={"20px"}
                      fontWeight={"bold"}
                    >
                      پارسا
                    </Text>
                    <UnorderedList
                      textAlign={"start"}
                      spacing={"10px"}
                      sx={{
                        li: {
                          color: "black", // text color
                          "::marker": {
                            color: "#29CCCC", // 🔵 your custom bullet color
                          },
                        },
                      }}
                    >
                      <ListItem>خانه</ListItem>
                      <ListItem>سؤالات</ListItem>
                      <ListItem>برچسب‌ها</ListItem>
                      <ListItem>کاربران</ListItem>
                      <ListItem>درباره‌ما</ListItem>
                      <ListItem>ارتباط با ما</ListItem>
                      <ListItem>قوانین استفاده</ListItem>
                      <ListItem fontWeight={"thin"}>سیاست حریم خصوصی</ListItem>
                    </UnorderedList>
                  </VStack>
                  <VStack alignItems={"start"} gap={"20px"} height={"100%"}>
                    <Text
                      color={"#3646B3"}
                      fontSize={"20px"}
                      fontWeight={"bold"}
                    >
                      محصولات
                    </Text>
                    <UnorderedList
                      textAlign={"start"}
                      spacing={"10px"}
                      sx={{
                        li: {
                          color: "black", // text color
                          "::marker": {
                            color: "#29CCCC", // 🔵 your custom bullet color
                          },
                        },
                      }}
                    >
                      <ListItem>موتور جستجو هوشمند سوالات</ListItem>
                      <ListItem>سرویس جستجوی سوال مشابه</ListItem>
                      <ListItem>سرویس اصلاح خطای نوشتاری</ListItem>
                      <ListItem>سرویس توصیه گر سوال</ListItem>
                      <ListItem>سرویس استخراج عبارات کلیدی</ListItem>
                      <ListItem>سرویس خلاصه سازی متن سوال</ListItem>
                      <ListItem>سرویس رده بندی متن سوالات</ListItem>
                      <ListItem>سرویس پاسخ به سوالات دامنه باز</ListItem>
                    </UnorderedList>
                  </VStack>
                  <VStack alignItems={"start"} gap={"20px"} height={"100%"}>
                    <Text
                      color={"#3646B3"}
                      fontSize={"20px"}
                      fontWeight={"bold"}
                    >
                      ارتباط با ما
                    </Text>
                    <HStack w={"100%"} alignItems={"start"} textAlign={"start"}>
                      <IconButton
                        icon={<IoLocation color="#29CCCC" fontSize={"20px"} />}
                      />
                      <Text width={"284px"}>
                        مازندران، بابل، یوسف پوری، خیابان آیت الله سعیدی، کوچه
                        پرستو، پلاک ۷
                      </Text>
                    </HStack>
                    <HStack>
                      <IconButton
                        icon={<IoCall color="#29CCCC" fontSize={"20px"} />}
                      />
                      <Text>۰۹۱۱۱۱۶۹۱۵۶</Text>
                    </HStack>
                    <VStack alignItems={"start"}>
                      <Text
                        color={"#3646B3"}
                        fontSize={"20px"}
                        fontWeight={"bold"}
                      >
                        شبکه های اجتماعی
                      </Text>
                      <HStack>
                        <IconButton
                          icon={
                            <IoLogoTwitter color="#29CCCC" fontSize={"20px"} />
                          }
                        />
                        <IconButton
                          icon={
                            <IoLogoInstagram
                              color="#29CCCC"
                              fontSize={"20px"}
                            />
                          }
                        />
                        <IconButton
                          icon={
                            <FaTelegram color="#29CCCC" fontSize={"20px"} />
                          }
                        />
                        <IconButton
                          icon={
                            <IoLogoYoutube color="#29CCCC" fontSize={"20px"} />
                          }
                        />
                        <IconButton
                          icon={
                            <IoLogoLinkedin color="#29CCCC" fontSize={"20px"} />
                          }
                        />
                      </HStack>
                    </VStack>
                  </VStack>
                </HStack>
              </Container>
            </Box>
          </Stack>

          <Box
            as="footer"
            bg="gray.200"
            color={"white"}
            p={4}
            textAlign="center"
            w={"100%"}
            bgColor={"#3646B3"}
          >
            تمامی حقوق این وبسایت متعلق به موسسه هوش مصنوعی و تمدن اسلامی (همتا)
            است.
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MainLayout;
