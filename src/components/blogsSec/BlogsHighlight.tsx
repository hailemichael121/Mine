import { Box, Heading, HStack, Text, useColorMode, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { blogPosts } from "./blogsData";

const BlogsHighlight = () => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const surfaceColor = colorMode === "light" ? "#FFFFFF" : "#262626";
  const cards = blogPosts.slice(0, 3);

  return (
    <Box
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 8, md: 14 }}
      bg={surfaceColor}
    >
      <VStack spacing={6} align="stretch" maxW="1200px" mx="auto">
        <HStack justify="space-between" flexWrap="wrap" spacing={4}>
          <Box>
            <Heading color={baseColor} fontSize={{ base: "2xl", md: "3xl" }}>
              Featured Writings
            </Heading>
            <Text color={baseColor} opacity={0.7}>
              Three quick highlights from the blog. Tap any card to explore all posts.
            </Text>
          </Box>
          <Box
            as={RouterLink}
            to="/blogs"
            border="1px solid"
            borderColor={baseColor}
            borderRadius="full"
            px={4}
            py={2}
            color={baseColor}
            _hover={{ textDecoration: "none", opacity: 0.85 }}
          >
            View all blogs →
          </Box>
        </HStack>

        <Box position="relative" height={{ base: "320px", md: "360px" }}>
          {cards.map((post, index) => {
            const rotations = [-10, 0, 10];
            const offsets = [-120, 0, 120];
            return (
              <Box
                key={post.id}
                as={RouterLink}
                to="/blogs"
                position="absolute"
                top="50%"
                left="50%"
                transform={`translate(-50%, -50%) rotate(${rotations[index]}deg) translateX(${offsets[index]}px)`}
                width={{ base: "220px", md: "260px" }}
                height={{ base: "280px", md: "320px" }}
                borderRadius="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor={baseColor}
                bgImage={`url(${post.image})`}
                bgSize="cover"
                bgPosition="center"
                boxShadow={`0 30px 50px -35px ${baseColor}`}
                transition="transform 0.3s ease"
                _hover={{
                  transform: `translate(-50%, -50%) rotate(${rotations[index]}deg) translateX(${offsets[index]}px) scale(1.04)`,
                }}
              >
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient={`linear(to-b, rgba(0,0,0,0), ${surfaceColor})`}
                />
                <Box position="absolute" bottom="0" p={4}>
                  <Text color={baseColor} fontSize="sm" opacity={0.8}>
                    {post.readTime}
                  </Text>
                  <Text color={baseColor} fontWeight="600" noOfLines={2}>
                    {post.title}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </VStack>
    </Box>
  );
};

export default BlogsHighlight;
