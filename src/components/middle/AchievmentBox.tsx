import {
  Text,
  Image,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";

const AchievmentBox = () => {
  return (
    <>
      <Box>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<BsHeart />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<FaRegComment />}>
              Comment
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BsShare />}>
              Share
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default AchievmentBox;
