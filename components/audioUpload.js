import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AudioUpload = ({ onFileUpload, title, subTitle }) => {
  const inputRef = useRef(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        // Pass the first audio file to the parent component
        onFileUpload(acceptedFiles[0]);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': [],
    },
    noClick: true, // Disable click on the dropzone container itself
  });

  // Manually trigger the hidden file input's click event
  const handleSelectFileClick = () => {
    inputRef.current?.click();
  };

  return (
    <Box zIndex={999}
      position={'relative'}
      {...getRootProps()}
      p="8"
      border="2px dashed"
      borderColor="blue.400"
      borderRadius="md"
      textAlign="center"
      bgColor={'blue.100'}
      cursor="pointer"
      w={'100%'}
      h={'296px'}
      as={VStack}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <input {...getInputProps()} ref={inputRef} />
      <Image src='./imageuploadicon.png' />
      {/* <IconButton icon={<IoCloudUpload />} mt="4" colorScheme='blue' onClick={handleSelectFileClick} zIndex={999} /> */}
      <VStack>
        <Text>فایل‌ خود را جهت ارسال از اینجا انتخاب یا رها کنید. </Text>
        <Text fontSize={'sm'} color={'gray.400'}>اندازه صوت باید کمتر از 100MB باشد.</Text>
        <HStack w={'100%'} justifyContent={'center'} mt={'20px'} zIndex={999}>
          <Text color={'gray.400'}>فرمت قابل قبول:</Text>
          <Text color={'gray.400'}>.png</Text>
          <Text color={'gray.400'}>.pdf</Text>
          <Text color={'gray.400'}>.jpg</Text>
        </HStack>
      </VStack>
      {/* <Lottie animationData={animationData} loop={true} style={{ width: '100%', position: 'absolute', bottom: 0, zIndex: 1 }} /> */}

    </Box>
  );
};

export default AudioUpload;
