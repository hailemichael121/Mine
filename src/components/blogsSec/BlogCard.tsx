import {
  Box,
  Heading,
  Text,
  Flex,
  Tag,
  Image,
  Link,
  useColorMode,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BlogPost } from "./blogsData";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { colorMode } = useColorMode();

  // Wavy divider component
  const WavyDivider = () => (
    <Box
      position="relative"
      height="20px"
      overflow="hidden"
      width="100%"
      my={2}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="40px"
        backgroundRepeat="repeat-x"
        backgroundSize="1200px 100px"
        transform="scaleY(0.5)"
      />
    </Box>
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      style={{ height: "100%" }}
    >
      <Link href={post.url} _hover={{ textDecoration: "none" }}>
        <Box
          bg={colorMode === "dark" ? "#22222" : "white"}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="lg"
          _hover={{
            boxShadow:
              colorMode === "dark"
                ? "0 15px 40px -10px rgba(0, 0, 0, 0.3)"
                : "0 15px 40px -10px rgba(0, 0, 0, 0.1)",
            transform: "translateY(-5px)",
          }}
          transition="all 0.3s ease"
          h="100%"
          position="relative"
          border="1px solid"
          borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
        >
          {/* Image container with gradient overlay */}
          <Box
            position="relative"
            h="200px"
            w="100%"
            overflow="hidden"
            bg={colorMode === "dark" ? "#22222" : "gray.100"}
          >
            <Image
              src={post.image}
              alt={post.title}
              h="100%"
              w="100%"
              objectFit="cover"
              transition="transform 0.5s ease"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
            {/* Gradient overlay */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              height="50%"
              bgGradient={
                colorMode === "dark"
                  ? "linear(to-t, gray.800, transparent)"
                  : "linear(to-t, white, transparent)"
              }
            />
          </Box>

          {/* Wavy separator */}
          <WavyDivider />

          {/* Content */}
          <Box p={6}>
            <Flex mb={3} gap={2} flexWrap="wrap">
              {post.tags.map((tag) => (
                <Tag
                  key={tag}
                  colorScheme="blue"
                  variant="subtle"
                  size="sm"
                  borderRadius="full"
                  px={3}
                  boxShadow="sm"
                >
                  {tag}
                </Tag>
              ))}
            </Flex>
            <Heading
              size="lg"
              mb={3}
              lineHeight="tall"
              bgGradient={
                colorMode === "dark"
                  ? "linear(to-r, blue.300, cyan.400)"
                  : "linear(to-r, blue.500, cyan.600)"
              }
              bgClip="text"
            >
              {post.title}
            </Heading>
            <Text color={colorMode === "dark" ? "gray.400" : "gray.600"} mb={4}>
              {post.excerpt}
            </Text>
            <Flex
              justify="space-between"
              color={colorMode === "dark" ? "gray.400" : "gray.500"}
              fontSize="sm"
              mt={6}
            >
              <chakra.span
                px={3}
                py={1}
                borderRadius="md"
                bg={colorMode === "dark" ? "gray.700" : "gray.100"}
              >
                {post.date}
              </chakra.span>
              <chakra.span
                px={3}
                py={1}
                borderRadius="md"
                bg={colorMode === "dark" ? "gray.700" : "gray.100"}
              >
                {post.readTime}
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
