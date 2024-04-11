import { HStack } from "@chakra-ui/react";
import AchievmentBox from "./AchievmentBox";

const DisplayBox = () => {
  return (
    <HStack>
      <AchievmentBox />
      <AchievmentBox />
      <AchievmentBox />
      <AchievmentBox />
    </HStack>
  );
};

export default DisplayBox;
