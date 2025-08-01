// components/blogsSec/Blogs.tsx
import { Box, Heading, Text, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { BlogsSecHeader } from ".";
import BlogCard from "../components/blogsSec/BlogCard";
import { blogPosts } from "../components/blogsSec/blogsData";

const Blogs = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 8, md: 16 }}
      bg={colorMode === "dark" ? "#121212" : "gray.50"}
      minH="100vh"
    >
      <Box maxW="1200px" mx="auto">
        <BlogsSecHeader />

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </SimpleGrid>

        {/* Coming soon placeholder for additional posts */}
        <Box
          mt={16}
          p={12}
          bg={colorMode === "dark" ? "gray.800" : "white"}
          borderRadius="xl"
          textAlign="center"
          boxShadow="md"
        >
          <Heading size="lg" mb={4}>
            More Articles Coming Soon!
          </Heading>
          <Text color="gray.500">
            I'm currently working on new content about modern web development.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
