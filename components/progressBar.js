import { Box, HStack, Progress, Text } from "@chakra-ui/react"
import { IoTrash } from "react-icons/io5"

const ProgressBar = () => {
  return (
    <Box w={'100%'}>
      <HStack w={'100%'} justifyContent={'end'}>
        <Text>99%</Text>
        <IoTrash color='red' />
      </HStack>
      <Progress value={80} />
    </Box>
  )
}

export default ProgressBar
