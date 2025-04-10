import { Badge, Box, Button, Card, Center, Divider, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoBasketOutline, IoDocuments } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import useSWR from "swr";
import Footer from "./footer";
import HistoryItemCard from "./historyItemCard";

const menuList = [
  { title: 'صفحه اصلی', icon: <MdKeyboardVoice fontSize={'18px'} />, link: 'audio' },
  { title: 'تصویر به متن', icon: <IoDocuments fontSize={'18px'} />, link: 'convert' },
  { title: 'صوت به متن', icon: <FaHeadphonesAlt fontSize={'18px'} />, link: 'assistant' },
  // { title: 'ارتباط دادن نماز جمعه و حاکمیت', icon: <FaPrayingHands fontSize={'18px'} />, link: 'connection' },
  // { title: 'صفحه مسئولین', icon: <BsFillPersonFill fontSize={'18px'} /> },
  // { title: 'بانک اطلاعات مسائل مربوط نماز جمعه', icon: <IoFileTrayStacked fontSize={'18px'} /> },
  // { title: 'توصیف خطبه', icon: <FaFile fontSize={'18px'} /> },
]

const MainLayout = ({ children }) => {

  const router = useRouter()

  const { data: dataHistoric, isLoading: isLoadingHistoric } = useSWR('to_text/histories')

  const { onOpen, isOpen, onClose } = useDisclosure()

  const handleButtonClick = (link) => {
    router.replace(link)
  }

  const handleBuy = () => {
    onOpen()
  }
  return (
    <VStack minHeight="100vh" w={'100%'} alignItems={'start'} gap={0} bgColor={'#f1f5f9'} >
      <Box display={'flex'} width="100%" height={'76px'} bg={'blue.400'} p={2} px={4} borderBottom={'1px'} borderBottomColor={'gray.200'} style={{
        boxShadow: '-2px 4px 16px -4px #6061701F'
      }}>
        <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
          <Image src="./logo.png" height={'64px'} width={'48px'} position={'relative'} />
          <VStack w={'100%'} alignItems={'start'}>
            <Text fontWeight={'bold'} color={'blue.900'} >تبدیل‌یار</Text>
            <Text color={'blue.700'} fontSize={'12px'}>سامانه هوشمند تبدیل تصویر به متن</Text>
          </VStack>
          <Button colorScheme="blue" leftIcon={<IoBasketOutline />} onClick={handleBuy}>خرید اشتراک</Button>
          <Divider orientation="vertical" height={'30px'} mx={'10px'} />
          <Image src={'./bi.png'} w={'40px'} />
        </HStack>
      </Box>

      <HStack height={'calc( 100vh - 76px )'} w={'100%'} gap={0} alignItems={'start'} overflow={'hidden'}>

        <Card as={Box} display={'flex'} justifyContent={'start'} width="200px" bg={'white'} p={'10px'} height={'calc( 100vh - 120px )'} mt={'24px'} mr={'24px'} borderRadius={'16px'}>
          <Text fontSize={'sm'} color={'gray'}>تاریخچه تبدیل</Text>
          {
            dataHistoric?.items?.map((item) => (
              <HistoryItemCard item={item} />
            ))
          }
          <Center height={'100%'}>
            <VStack>
              <Image src="./nohistory.png" width={'88px'} height={'56px'} />
              <Text fontSize={'sm'}>تاریخچه‌ای برای نمایش وجود ندارد</Text>
            </VStack>
          </Center>
          {/* <UnorderedList display={'flex'} flexDirection={'column'} styleType="''" margin={0} width={'100%'} pt={'20px'} gap={'8px'} padding={'16px'} >

            {
              menuList?.map((item) => (
                <HStack _hover={{ bgColor: 'blue.200' }} borderRadius={'4px'} height={'32px'} cursor={'pointer'}>
                  <IconButton icon={item?.icon} w={'24px'} h={'24px'} color={'blue.800'} onClick={e => handleButtonClick(item?.link)} />
                  <Text color={'blue.800'} >{item?.title}</Text>
                </HStack>
              ))
            }
          </UnorderedList> */}
        </Card>
        {/* Main content area */}
        <VStack flex={1} height={'calc( 100vh - 76px )'} px={'24px'} w={'100%'} overflowY={'scroll'} mt={'24px'}>
          <Box  >
            {children}
          </Box>
          <Box w={'100%'} height={'387px'}>
            <Footer />
          </Box>
        </VStack>
        {/* Right sidebar */}


      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>خرید اشتراک</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Box as={HStack} w={'100%'} alignItems={'start'} justifyContent={'space-between'} border={'1px'} borderColor={'blue.200'} padding={'5px'} borderRadius={'16px'}>
                <HStack >
                  <Image src="./gold.png" />
                  <VStack w={'100%'} alignItems={'start'}>
                    <HStack>
                      <Text fontWeight={'bold'}>اشتراک طلایی</Text>
                      <Badge colorScheme="blue" borderRadius={'5px'}>پیشنهادی</Badge>
                    </HStack>
                    <Text fontSize={'sm'}>تبدیل ۱۲۰ فایل + ۲۰ فایل</Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Text w={'90px'}>60,000 تومان</Text>
                  <Button colorScheme="gray" variant={'outline'}>
                    <Radio colorScheme="blue"></Radio>
                    <Text>انتخاب</Text>
                  </Button>
                </HStack>
              </Box>
              <Box as={HStack} w={'100%'} alignItems={'start'} justifyContent={'space-between'}>
                <Image src="./silver.png" />
                <VStack w={'100%'} alignItems={'start'}>
                  <HStack>
                    <Text fontWeight={'bold'}>اشتراک نقره‌ای</Text>
                  </HStack>
                  <Text fontSize={'sm'}>تبدیل ۸۰ فایل + ۱۰ فایل</Text>
                </VStack>
                <HStack>
                  <Text w={'90px'}>40,000 تومان</Text>
                  <Button colorScheme="gray" variant={'outline'}>
                    <Radio colorScheme="blue"></Radio>
                    <Text>انتخاب</Text>
                  </Button>
                </HStack>
              </Box>
              <Box as={HStack} w={'100%'} alignItems={'start'} justifyContent={'space-between'}>
                <Image src="./bronze.png" />
                <VStack w={'100%'} alignItems={'start'}>
                  <HStack>
                    <Text fontWeight={'bold'}>اشتراک برنزی</Text>
                  </HStack>
                  <Text fontSize={'sm'}>تبدیل ۴۰ فایل + ۵ فایل</Text>
                </VStack>
                <HStack>
                  <Text w={'90px'}>20,000 تومان</Text>
                  <Button colorScheme="gray" variant={'outline'}>
                    <Radio colorScheme="blue"></Radio>
                    <Text>انتخاب</Text>
                  </Button>
                </HStack>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              خرید اشتراک
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </VStack>
  )
}

export default MainLayout
