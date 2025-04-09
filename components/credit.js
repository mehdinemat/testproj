import { SimpleGrid, Text, VStack } from "@chakra-ui/react"
import CreditCard from "./creditCard"

const Credit = () => {
  return (
    <VStack w={'100%'}>
      <Text fontSize={'xl'} fontWeight={'bold'}>خرید اعتبار</Text>
      <Text color='gray.400'>برای استفاده بهتر و بیشتر از قابلیت های ما</Text>
      <SimpleGrid
        spacing="24px"
        minChildWidth="360px"
        width="100%"
      >
        <CreditCard width={"360px"} price={'قیمت اعتبار: ۲۰,۰۰۰ تومان'} height={'330px'} title={'اعتبار برنزی'} subTitle={'با خرید اعتبار برنزی با پرداخت ۲۰ هزار تومان میتوانید (۴۰ تبدیل فایل + ۵ تبدیل رایگان) را انجام دهید. '} />
        <CreditCard width={"400px"} price={'قیمت اعتبار: ۶۰,۰۰۰ تومان'} height={'362px'} title={'اعتبار طلایی'} header={'پیشنهادی'} subTitle={'با خرید اعتبار برنزی با پرداخت ۲۰ هزار تومان میتوانید (۴۰ تبدیل فایل + ۵ تبدیل رایگان) را انجام دهید. '} />
        <CreditCard width={"360px"} price={'قیمت اعتبار: ۴۰,۰۰۰ تومان'} height={'330px'} title={'اعتبار نقره‌ای'} subTitle={'با خرید اعتبار نقره‌ای با پرداخت ۴۰ هزار تومان میتوانید (۸۰ تبدیل فایل + ۱۰ تبدیل رایگان) را انجام دهید. '} />
      </SimpleGrid>
    </VStack>
  )
}

export default Credit
