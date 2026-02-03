// components/blogsSec/Blogs.tsx
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useColorMode,
  Button,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowLeft } from "react-icons/fa"; // Import a back icon
import { BlogsSecHeader } from ".";
import BlogCard from "../components/blogsSec/BlogCard";
import { blogPosts } from "../components/blogsSec/blogsData";

const Blogs = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate(); // Initialize navigation

  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const pageBg = colorMode === "light" ? "#FFFFFF" : "#262626";

  const handleBack = () => {
    // Navigate to landing page and jump to the blogs section ID
    navigate("/#blogs");
  };

  return (
    <Box
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 8, md: 16 }}
      bg={pageBg}
      minH="100vh"
    >
      <Box maxW="1200px" mx="auto">
        {/* --- BACK BUTTON --- */}
        <Button
          leftIcon={<Icon as={FaArrowLeft} />}
          variant="ghost"
          color={baseColor}
          mb={6}
          onClick={handleBack}
          _hover={{ bg: colorMode === "light" ? "gray.100" : "whiteAlpha.200" }}
          borderRadius="full"
          fontSize="sm"
        >
          Back to Home
        </Button>

        <BlogsSecHeader />

        <Box
          border="1px solid"
          borderColor={baseColor}
          borderRadius="2xl"
          p={{ base: 4, md: 6 }}
          mb={10}
          boxShadow={`0 22px 40px -30px ${baseColor}`}
        >
          <Heading size="md" color={baseColor} mb={2}>
            All Articles
          </Heading>
          <Text color={baseColor} opacity={0.75}>
            Browse every post here, then open a card to read the full story.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </SimpleGrid>

        {/* Coming soon placeholder */}
        <Box
          mt={16}
          p={{ base: 6, md: 10 }}
          bg={pageBg}
          borderRadius="2xl"
          textAlign="center"
          border="1px solid"
          borderColor={baseColor}
          boxShadow={`0 22px 40px -30px ${baseColor}`}
        >
          <Heading size="lg" mb={4} color={baseColor}>
            More Articles Coming Soon!
          </Heading>
          <Text color={baseColor} opacity={0.75}>
            I'm currently working on new content about modern web development.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
