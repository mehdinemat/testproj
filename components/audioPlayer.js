import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoPause } from 'react-icons/io5';
import { MdForward10, MdReplay10 } from "react-icons/md";
import WaveSurfer from 'wavesurfer.js';

// A simple progress bar component
const ProgressBar = ({ progress }) => {
  return (
    <Box w="100%" h="5px" bg="gray.200" borderRadius="md" overflow="hidden">
      <Box w={`${progress * 100}%`} h="100%" bg="blue.500" />
    </Box>
  );
};

// Helper function to format time in mm:ss
const formatTime = (time) => {
  if (!time || isNaN(time)) return "00:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const AudioPlayer = ({ progressBar = true, downloading = false }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!waveformRef.current) return;

    // Create the WaveSurfer instance
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#ddd',
      progressColor: '#3B82F6',
      barWidth: 2,
      interact: true,
      responsive: true,
      height: 40,
    });

    // Load your audio file (update the path as needed)
    wavesurferRef.current.load('/test.mp3');

    // Once ready, update the duration state
    wavesurferRef.current.on('ready', () => {
      setDuration(wavesurferRef.current.getDuration());
      console.log('WaveSurfer is ready');
    });

    // Update progress and currentTime as audio plays
    const updateProgress = () => {
      const current = wavesurferRef.current.getCurrentTime();
      const total = wavesurferRef.current.getDuration();
      if (total > 0) {
        setProgress(current / total);
        setCurrentTime(current);
      }
    };

    wavesurferRef.current.on('audioprocess', updateProgress);
    wavesurferRef.current.on('seek', updateProgress);

    // Cleanup on component unmount
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  const handleRowCol = (children) => {
    return downloading ? (
      <HStack alignItems="start">{children}</HStack>
    ) : (
      <VStack alignItems="start">{children}</VStack>
    );
  };

  return (
    <Box>
      {handleRowCol(
        <>
          <HStack w="100%" alignItems="center">
            <FaRegCirclePlay fontSize="20px" color="#155DFC" onClick={handlePlayPause} cursor="pointer" />
            <VStack w="100%" alignItems="start" gap={0}>
              <Text>خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰</Text>
              <HStack w="100%" alignItems="start">
                <Text fontSize="sm">400 KB از 500 KB</Text>
                <Text color="blue.600" fontSize="sm">درحال بارگذاری (90%)</Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack w="100%" spacing={4}>
            <Box
              ref={waveformRef}
              style={{ width: '100%', height: '50px', marginBottom: '10px' }}
            />
            <VStack spacing={2}>
              <HStack>
                <MdForward10 fontSize="20px" color="#3B82F6" cursor="pointer" />
                <IoPause fontSize="20px" color="#3B82F6" onClick={handlePlayPause} cursor="pointer" />
                <MdReplay10 fontSize="20px" color="#3B82F6" cursor="pointer" />
              </HStack>
              <HStack gap={0}>
                <Text fontSize="sm" color="gray.400">
                  {formatTime(currentTime)}
                </Text>
                <Text fontSize="sm" color="gray.400">/</Text>
                <Text fontSize="sm">
                  {formatTime(duration)}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </>
      )}
      {progressBar && <ProgressBar progress={progress} />}
    </Box>
  );
};

export default AudioPlayer;
