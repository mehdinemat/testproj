import { Box } from "@chakra-ui/react";
import { useState } from "react";
import TypingEffect from "../components/typingEffect"; // adjust path if needed

const TextSequence = ({ textArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [doneItems, setDoneItems] = useState([]);

  const handleTypingDone = () => {
    setDoneItems((prev) => [...prev, textArray[currentIndex]]);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <>
      {/* Render all finished items instantly */}
      {doneItems.map((item, index) => (
        <Box key={index} p={2} fontWeight="bold">
          {item}
        </Box>
      ))}

      {/* Render TypingEffect for the current item */}
      {currentIndex < textArray.length && (
        <TypingEffect text={textArray[currentIndex]} onDone={handleTypingDone} />
      )}
    </>
  );
};
export default TextSequence;
