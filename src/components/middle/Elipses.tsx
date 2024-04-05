import { Stack } from "@chakra-ui/react";
import ElipseMold from "./ElipseMold";

const Elipses = () => {
  return (
    <>
      <Stack direction={"row"}>
        <ElipseMold
          backgroundColor="#22A699"
          borderRadius="300px"
          w="310px"
          h="330px"
          m="-125px"
          mt="130px"
          opacity="1"
          Tml="-60px"
        />
        <ElipseMold
          backgroundColor="gold"
          borderRadius="120px"
          w="100px"
          h="200px"
          m="75px"
          opacity="0.9"
          Trotate="90Deg"
        />
        <ElipseMold
          backgroundColor="#003C43"
          borderRadius="16px"
          w="60px"
          h="20px"
          mt="105px"
          opacity="1"
          Trotate="360Deg"
          Tmt="100px"
        />
        <ElipseMold
          backgroundColor="#157D13"
          borderRadius="16px"
          w="90px"
          h="20px"
          mt="75px"
        />
        <ElipseMold
          backgroundColor="#7F27FF"
          borderRadius="16px"
          w="230px"
          h="27px"
          m="40px"
          ml="0px"
        />
        <ElipseMold
          backgroundColor="#E72929"
          borderRadius="20px"
          w="35px"
          h="35px"
        />
        <ElipseMold
          backgroundColor="#59D5E0"
          borderRadius="20px"
          w="20px"
          h="20px"
          mt="15px"
          ml="40px"
        />
        <ElipseMold
          backgroundColor="#02576C"
          borderRadius="20px"
          w="10px"
          h="10px"
          mt="25px"
          ml="68px"
        />
        <ElipseMold
          backgroundColor="#FFE837"
          borderRadius="20px"
          w="160px"
          h="20px"
          mt="-15px"
          ml="-15px"
          rotate="29deg"
        />
      </Stack>
    </>
  );
};

export default Elipses;
