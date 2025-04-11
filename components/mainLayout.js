import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoMicOff, IoOptions, IoSearch, IoVideocamOff } from "react-icons/io5";
import useSWR from "swr";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { GiDiamondRing } from "react-icons/gi";
import React from "react";

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

  const { data: dataHistoric, isLoading: isLoadingHistoric } =
    useSWR("to_text/histories");

  const { onOpen, isOpen, onClose } = useDisclosure();

  const handleButtonClick = (link) => {
    router.replace(link);
  };

  const handleBuy = () => {
    onOpen();
  };
  return (
    <VStack
      minHeight="100vh"
      w={"100%"}
      alignItems={"start"}
      gap={0}
      bgColor={"#f1f5f9"}
    >
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
        height={"calc( 100vh - 76px )"}
        w={"100%"}
        gap={0}
        alignItems={"start"}
        overflow={"hidden"}
      >
        {/* Main content area */}
        <VStack flex={1} >
          <VStack
            height={"calc( 100vh - 76px )"}
            w={"100%"}
            overflowY={"scroll"}
          >
            {children}
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MainLayout;
