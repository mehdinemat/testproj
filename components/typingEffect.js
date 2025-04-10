import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const TypingEffect = ({ text, speed = 30, onDone }) => {
  const [displayedText, setDisplayedText] = useState("");
  const words = text.split(" ");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (wordIndex >= words.length) {
      onDone?.(); // Notify parent it's finished
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => (prev ? prev + " " + words[wordIndex] : words[wordIndex]));
      setWordIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [wordIndex]);

  return (
    <Box p={2} fontSize="lg" fontWeight="bold">
      <Text>{displayedText}</Text>
    </Box>
  );
};

export default TypingEffect;

