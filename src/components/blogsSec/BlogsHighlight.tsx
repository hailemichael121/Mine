import {
  Box,
  Heading,
  HStack,
  Text,
  useColorMode,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { blogPosts } from "./blogsData";

const BlogsHighlight = () => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const surfaceColor = colorMode === "light" ? "#FFFFFF" : "#262626";
  const cards = blogPosts.slice(0, 3);

  // Responsive values to prevent viewport overflow
  const rotations = useBreakpointValue({
    base: [-5, 0, 5],
    md: [-10, 0, 10],
  }) || [-5, 0, 5];
  const offsets = useBreakpointValue({
    base: [-60, 0, 60],
    md: [-120, 0, 120],
  }) || [-60, 0, 60];
  const cardWidth = useBreakpointValue({
    base: "160px",
    sm: "200px",
    md: "260px",
  });
  const cardHeight = useBreakpointValue({
    base: "220px",
    sm: "260px",
    md: "320px",
  });

  return (
    <Box
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 8, md: 14 }}
      bg={surfaceColor}
      overflow="hidden" // Safety net to prevent horizontal scroll
    >
      <VStack spacing={6} align="stretch" maxW="1200px" mx="auto">
        <HStack justify="space-between" flexWrap="wrap" spacing={4}>
          <Box maxW={{ base: "70%", md: "100%" }}>
            <Heading color={baseColor} fontSize={{ base: "xl", md: "3xl" }}>
              Featured Writings
            </Heading>
            <Text
              color={baseColor}
              opacity={0.7}
              fontSize={{ base: "xs", md: "md" }}
            >
              Tap any card to explore.
            </Text>
          </Box>
          <Box
            as={RouterLink}
            to="/blogs"
            border="1px solid"
            borderColor={baseColor}
            borderRadius="full"
            px={{ base: 3, md: 4 }}
            py={{ base: 1, md: 2 }}
            fontSize={{ base: "xs", md: "sm" }}
            color={baseColor}
            _hover={{ textDecoration: "none", opacity: 0.85 }}
          >
            View all →
          </Box>
        </HStack>

        <Box
          position="relative"
          height={{ base: "260px", sm: "300px", md: "360px" }}
          mt={4}
        >
          {cards.map((post, index) => {
            const rotation = rotations[index];
            const offset = offsets[index];

            return (
              <Box
                key={post.id}
                as={RouterLink}
                to="/blogs"
                position="absolute"
                top="50%"
                left="50%"
                // Use the responsive values here
                transform={`translate(-50%, -50%) rotate(${rotation}deg) translateX(${offset}px)`}
                width={cardWidth}
                height={cardHeight}
                borderRadius="xl"
                overflow="hidden"
                border="1px solid"
                borderColor={baseColor}
                bgImage={`url(${post.image})`}
                bgSize="cover"
                bgPosition="center"
                boxShadow={`0 20px 40px -20px ${baseColor}66`}
                transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                zIndex={index === 1 ? 2 : 1} // Keep the middle card on top
                _hover={{
                  zIndex: 10,
                  transform: `translate(-50%, -50%) rotate(0deg) translateX(${offset}px) scale(1.1)`,
                }}
              >
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient={`linear(to-b, transparent 40%, ${surfaceColor}CC, ${surfaceColor})`}
                />
                <Box position="absolute" bottom="0" p={{ base: 2, md: 4 }}>
                  <Text
                    color={baseColor}
                    fontSize={{ base: "10px", md: "xs" }}
                    opacity={0.8}
                  >
                    {post.readTime}
                  </Text>
                  <Text
                    color={baseColor}
                    fontWeight="600"
                    fontSize={{ base: "xs", md: "md" }}
                    noOfLines={2}
                  >
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
