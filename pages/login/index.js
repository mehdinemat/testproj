
import { Box, Button, Card, Center, Checkbox, HStack, Image, Input, Text, VStack } from "@chakra-ui/react"
import dynamic from 'next/dynamic'
import { useForm } from "react-hook-form"
import { IoArrowForward } from "react-icons/io5"
import useSWRMutation from 'swr/mutation'
import animationData from '../../public/loginanimation.json'
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false
});

const Index = () => {

  const { register, setValue, getValues, handleSubmit } = useForm()

  const { trigger, isLoading, isMutating } = useSWRMutation('llm_tree/users/login')
  const handleSendSubmit = (e) => {
    trigger()
  }

  return (
    <Box backgroundImage="url('./bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="100vh"
      width="100%"
      bgColor="#F1F5F9" padding={'20px'}>
      <Card as={VStack} alignItems={'start'} height={'100%'} width={'532px'} padding={'20px'}>
        <HStack>
          <IoArrowForward color="gray" />
          <Text color={'gray'}>صفحه اصلی</Text>
        </HStack>
        <Center w={'100%'} mt={'20px'} as={VStack} justifyContent={'space-between'} height={'100%'}>
          <Image src="./loginlogo.png" width={'327px'} height={'88px'} />
          <VStack w={'100%'} alignItems={'start'} px={'66px'} mt={'10px'} as={'form'} onSubmit={handleSubmit(handleSendSubmit)}>
            <Text fontWeight={'bold'} fontSize={'20px'} mt={'10px'} w={'100%'} textAlign={'center'}>ورود به حساب کاربری</Text>
            <Text fontSize={'sm'} color={'gray'} w={'100%'} textAlign={'center'}>لطفا نام کاربری و رمز عبور خود را وارد فرمایید</Text>
            <Text fontWeight={'bold'}>نام کاربری</Text>
            <Input {...register('username')} />
            <Text fontWeight={'bold'}>رمز عبور</Text>
            <Input {...register('password')} />
            <HStack w={'100%'} justifyContent={'space-between'}>
              <HStack>
                <Checkbox colorScheme="blue"></Checkbox>
                <Text fontSize={'sm'}>مرا بخاطر بسپار</Text>
              </HStack>
              <Text fontSize={'sm'}>فراموشی رمز عبور؟</Text>
            </HStack>
            <Button colorScheme="blue" w={'100%'} mt={'20px'} type='submit'>ورود</Button>
          </VStack>
          <HStack alignItems={'center'}>
            <Text>حساب کاربری ندارید؟</Text>
            <Text color={'blue'} fontSize={'sm'} cursor={'pointer'}>ثبت نام کنید</Text>
          </HStack>
        </Center>
      </Card>

      {animationData && <Lottie animationData={animationData} loop={true} style={{ width: '50%', height: '80%', position: 'absolute', bottom: 0, top: 0, left: '10%', zIndex: 1 }} />}
    </Box>
  )
}

export default Index
