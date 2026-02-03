import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from "@chakra-ui/react";

import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Icon,
  Flex,
  useColorMode,
  Button,
  ButtonGroup,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaStar, FaGithub } from "react-icons/fa";

const GitHubActivity: React.FC = () => {
  // const [publicRepoCount, setPublicRepoCount] = useState(0);
  const [starCount, setStarCount] = useState(0);
  // const [repos, setRepos] = useState<{ name: string; url: string }[]>([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // const userResponse = await axios.get(
        //   "https://api.github.com/users/hailemichael121",
        // );
        const reposResponse = await axios.get(
          "https://api.github.com/users/hailemichael121/repos",
        );

        // setPublicRepoCount(userResponse.data.public_repos);

        const stars = reposResponse.data.reduce(
          (acc: number, repo: { stargazers_count: number }) =>
            acc + repo.stargazers_count,
          0,
        );
        setStarCount(stars);

        // const repoData = reposResponse.data
        //   .slice(0, 5)
        //   .map((repo: { name: string; html_url: string }) => ({
        //     name: repo.name,
        //     url: repo.html_url,
        //   }));
        // setRepos(repoData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <Box
      bg={
        colorMode === "light"
          ? "var(--chakra-colors-primary)"
          : "var(--chakra-colors-secondary)"
      }
      color={colorMode === "light" ? "black" : "white"}
      borderRadius="md"
      boxShadow="lg"
    >
      <VStack>
        <Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb={4}
            w="100%"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex alignItems="center" ml={6}>
              <Icon as={FaGithub} w={6} h={6} mr={2} />
              <Heading as="h1" size="lg">
                GitHub Activity
              </Heading>
            </Flex>

            <Flex alignItems="center" mb={{ base: 2, md: 0 }}>
              <Icon as={FaStar} w={5} h={5} mr={2} />
              <Text fontSize="lg">Stars: {starCount}</Text>
            </Flex>
          </Flex>

          <Box display="flex" justifyContent="center" mb={4}>
            <ButtonGroup size="sm" isAttached variant="outline">
              {Array.from(
                { length: 5 },
                (_, i) => new Date().getFullYear() - i,
              ).map((year) => (
                <Button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  isActive={selectedYear === year}
                  _active={{
                    bg: "teal.500",
                    color: "white",
                  }}
                  _hover={{
                    bg: "teal.300",
                    color: "white",
                  }}
                  transition="all 0.3s"
                >
                  {year}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box display="flex" justifyContent="center" mb={4} overflowX="auto">
            <Box>
              <GitHubCalendar
                blockSize={isMobile ? 3 : 12}
                blockRadius={isMobile ? 5 : 12}
                username="hailemichael121"
                year={selectedYear}
                renderBlock={(block, activity) => (
                  <Tooltip
                    key={activity.date}
                    label={`${activity.count} activities on ${activity.date}`}
                  >
                    {block}
                  </Tooltip>
                )}
                renderColorLegend={(block, level) => (
                  <Tooltip key={level} label={`Level: ${level}`}>
                    {block}
                  </Tooltip>
                )}
              />
            </Box>
          </Box>
        </Box>

        <Flex
          justifyContent="space-evenly"
          alignItems="center"
          mt={4}
          width={"100%"}
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* <Flex direction="column" alignItems="center" mb={{ base: 2, md: 0 }}>
            <Flex>
              {" "}
              <Icon as={FaGithub} w={6} h={6} mr={2} />
              <Text fontSize="lg">Public Repositories: {publicRepoCount}</Text>
            </Flex>
            <Flex direction="column" alignItems={"flex-start"} pt={4}>
              <Heading as="h6" size="md" mt={6} mb={2}>
                Top 5 Repositories:
              </Heading>
              <List spacing={2} mt={4}>
                <Box position="relative" pl={4}>
                  <Divider
                    orientation="vertical"
                    position="absolute"
                    left="10px"
                    height="100%"
                    borderColor={
                      colorMode === "light" ? "gray.400" : "gray.600"
                    }
                  />
                  {repos.map((repo) => (
                    <ListItem key={repo.name} pl={4} position="relative">
                      <Flex alignItems="center" p={2}>
                        <Icon as={FaGithub} w={5} h={5} mr={2} />
                        <Link href={repo.url} isExternal>
                          {repo.name}
                        </Link>
                      </Flex>
                    </ListItem>
                  ))}
                </Box>
              </List>
            </Flex>
          </Flex> */}
        </Flex>
      </VStack>
    </Box>
  );
};

export default GitHubActivity;
