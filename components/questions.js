import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, VStack } from "@chakra-ui/react"

const Questions = () => {
  return (
    <VStack w={'100%'} pb={'50px'} dir="rtl">
      <Text fontSize={'xl'} fontWeight={'bold'}>سوالات متداول</Text>
      <Text color='gray.400'>برای راهنمایی بهتر شما</Text>
      <Box as={VStack} dir="rtl" w={'100%'} gap={'10px'}>
        <Accordion allowToggle bgColor={'white'} w={'100%'}>
          <AccordionItem>
            <h2>
              <AccordionButton flexDirection="row-reverse">
                <AccordionIcon /> {/* icon on the left in RTL */}
                <Box flex="1" textAlign="right">
                  مدت زمان تبدیل فایل چقدر است؟
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel textAlign="right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle bgColor={'white'} w={'100%'}>
          <AccordionItem>
            <h2>
              <AccordionButton flexDirection="row-reverse">
                <AccordionIcon /> {/* icon on the left in RTL */}
                <Box flex="1" textAlign="right">
                  در وسط تبدیل فایل اینترنت قطع شد چه باید کرد؟
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel textAlign="right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle bgColor={'white'} w={'100%'}>
          <AccordionItem>
            <h2>
              <AccordionButton flexDirection="row-reverse">
                <AccordionIcon /> {/* icon on the left in RTL */}
                <Box flex="1" textAlign="right">
                  چرا فایل من به صورت بهم ریخته تبدیل شده است؟
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel textAlign="right">
              این محتوای پنل است.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </VStack>
  )
}

export default Questions
