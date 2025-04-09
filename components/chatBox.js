import { Box, Tag, Text } from '@chakra-ui/react';



const MessageBox = ({ message, isSentByCurrentUser = true }) => {
  return (
    <Box
      maxWidth="70%"
      // alignSelf={isSentByCurrentUser ? 'flex-end' : 'flex-start'}
      bg={isSentByCurrentUser ? 'blue.100' : 'gray.200'}
      color={isSentByCurrentUser ? 'white' : 'black'}
      px="4"
      py="2"
      borderRadius='20px'
      mb="2"
      borderBottomRightRadius={0}
    >
      <Tag variant={'outline'} colorScheme='blue' mb={'10px'} size={'sm'}>
        نماز نافله در روز جمعه
      </Tag>
      <Text color={'black'} fontSize={'sm'}>{message}</Text>
    </Box>
  );
};

export default MessageBox;
