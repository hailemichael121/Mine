import { Stack } from "@chakra-ui/react";
import { ElipseMold } from "../../pages";

const Elipses = () => {
  return (
    <>
      <Stack direction={"row"} mt={100}>
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
          mt="500px"
          ml="75px"
          opacity="0.9"
          Trotate="90Deg"
        />
        <ElipseMold
          id="elip3"
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
          id="elip4"
          backgroundColor="#157D13"
          borderRadius="16px"
          w="90px"
          h="20px"
          mt="75px"
        />
      </Stack>
    </>
  );
};

export default Elipses;
