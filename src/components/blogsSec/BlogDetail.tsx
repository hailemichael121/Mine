import { useMemo } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Tag,
  Divider,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { NavigationBar } from "../../pages";
import Footer from "../shared/Footer";
import { BlogContentBlock, blogPosts } from "./blogsData";

const renderBlock = (block: BlogContentBlock, key: number, color: string) => {
  switch (block.type) {
    case "heading":
      return (
        <Heading key={key} size="md" color={color}>
          {block.text}
        </Heading>
      );
    case "quote":
      return (
        <Box
          key={key}
          borderLeft="2px solid"
          borderColor={color}
          pl={4}
          py={2}
          fontStyle="italic"
          color={color}
          opacity={0.85}
        >
          “{block.text}”
        </Box>
      );
    case "list":
      return (
        <VStack key={key} align="start" spacing={2}>
          {block.items.map((item, index) => (
            <HStack key={`${key}-${index}`} align="start" spacing={3}>
              <Box mt="6px" w="6px" h="6px" borderRadius="full" bg={color} />
              <Text color={color} opacity={0.85}>
                {item}
              </Text>
            </HStack>
          ))}
        </VStack>
      );
    default:
      return (
        <Text key={key} color={color} opacity={0.82} lineHeight="tall">
          {block.text}
        </Text>
      );
  }
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const surfaceColor = colorMode === "light" ? "#FFFFFF" : "#262626";

  const post = useMemo(
    () => blogPosts.find((item) => item.slug === slug),
    [slug],
  );

  return (
    <Box bg={surfaceColor} minH="100vh" color={baseColor}>
      <NavigationBar />
      <Box
        maxW="900px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        py={{ base: 8, md: 12 }}
      >
        <ChakraLink
          display="inline-flex"
          alignItems="center"
          gap={2}
          color={baseColor}
          border="1px solid"
          borderColor={baseColor}
          borderRadius="full"
          px={4}
          py={2}
          mb={8}
          _hover={{ textDecoration: "none", opacity: 0.85 }}
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/blogs");
            }
          }}
        >
          ← Back to blogs
        </ChakraLink>

        {!post ? (
          <Box
            border="1px solid"
            borderColor={baseColor}
            borderRadius="2xl"
            p={{ base: 6, md: 10 }}
            textAlign="center"
          >
            <Heading size="lg" mb={3} color={baseColor}>
              Blog not found
            </Heading>
            <Text color={baseColor} opacity={0.7}>
              The blog entry you’re looking for doesn’t exist yet.
            </Text>
          </Box>
        ) : (
          <VStack align="start" spacing={{ base: 6, md: 8 }}>
            <Box
              w="100%"
              border="1px solid"
              borderColor={baseColor}
              borderRadius="2xl"
              overflow="hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                w="100%"
                h="320px"
                objectFit="cover"
              />
            </Box>

            <VStack align="start" spacing={3} w="100%">
              <HStack spacing={3} flexWrap="wrap">
                {post.tags.map((tag) => (
                  <Tag
                    key={tag}
                    variant="outline"
                    borderColor={baseColor}
                    color={baseColor}
                  >
                    {tag}
                  </Tag>
                ))}
              </HStack>

              <Heading size="xl" color={baseColor}>
                {post.title}
              </Heading>
              <HStack spacing={4} color={baseColor} opacity={0.7} fontSize="sm">
                <Text>{post.date}</Text>
                <Divider
                  orientation="vertical"
                  height="12px"
                  borderColor={baseColor}
                />
                <Text>{post.readTime}</Text>
              </HStack>
              <Text color={baseColor} opacity={0.8} fontSize="lg">
                {post.excerpt}
              </Text>
            </VStack>

            <Divider borderColor={baseColor} opacity={0.2} />

            <VStack align="start" spacing={6} w="100%">
              {post.content.map((block, index) =>
                renderBlock(block, index, baseColor),
              )}
            </VStack>
          </VStack>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogDetail;
