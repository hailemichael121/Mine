import {
  Box,
  Heading,
  Text,
  Flex,
  Tag,
  Image,
  Link as ChakraLink,
  useColorMode,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { BlogPost } from "./blogsData";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const cardBg = colorMode === "light" ? "#FFFFFF" : "#262626";

  const DividerLine = () => (
    <Box
      height="1px"
      width="100%"
      bg={baseColor}
      opacity={0.2}
      my={4}
    />
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      style={{ height: "100%" }}
    >
      <ChakraLink
        as={RouterLink}
        to={`/blog/${post.slug}`}
        state={{ from: location.pathname }}
        _hover={{ textDecoration: "none" }}
      >
        <Box
          bg={cardBg}
          borderRadius="2xl"
          overflow="hidden"
          boxShadow={`0 22px 40px -30px ${baseColor}`}
          _hover={{
            boxShadow: `0 26px 50px -32px ${baseColor}`,
            transform: "translateY(-5px)",
          }}
          transition="all 0.3s ease"
          h="100%"
          position="relative"
          border="1px solid"
          borderColor={baseColor}
        >
          {/* Image container */}
          <Box
            position="relative"
            h="200px"
            w="100%"
            overflow="hidden"
            bg={cardBg}
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
          </Box>

          <DividerLine />

          {/* Content */}
          <Box p={{ base: 5, md: 6 }}>
            <Flex mb={3} gap={2} flexWrap="wrap">
              {post.tags.map((tag) => (
                <Tag
                  key={tag}
                  variant="outline"
                  size="sm"
                  borderRadius="full"
                  px={3}
                  borderColor={baseColor}
                  color={baseColor}
                  opacity={0.85}
                >
                  {tag}
                </Tag>
              ))}
            </Flex>
            <Heading
              size="lg"
              mb={3}
              lineHeight="tall"
              color={baseColor}
            >
              {post.title}
            </Heading>
            <Text color={baseColor} mb={4} opacity={0.75}>
              {post.excerpt}
            </Text>
            <Flex
              justify="space-between"
              color={baseColor}
              fontSize="sm"
              mt={6}
            >
              <chakra.span
                px={3}
                py={1}
                borderRadius="full"
                border="1px solid"
                borderColor={baseColor}
                opacity={0.85}
              >
                {post.date}
              </chakra.span>
              <chakra.span
                px={3}
                py={1}
                borderRadius="full"
                border="1px solid"
                borderColor={baseColor}
                opacity={0.85}
              >
                {post.readTime}
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </ChakraLink>
    </motion.div>
  );
};

export default BlogCard;
