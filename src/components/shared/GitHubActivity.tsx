import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Select,
  Icon,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { FaStar, FaGithub } from "react-icons/fa";

const GitHubActivity: React.FC = () => {
  const [publicRepoCount, setPublicRepoCount] = useState(0);
  const [starCount, setStarCount] = useState(0);
  const [repos, setRepos] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await axios.get(
          "https://api.github.com/users/hailemichael121"
        );
        const reposResponse = await axios.get(
          "https://api.github.com/users/hailemichael121/repos"
        );

        setPublicRepoCount(userResponse.data.public_repos);

        const stars = reposResponse.data.reduce(
          (acc: number, repo: { stargazers_count: number }) =>
            acc + repo.stargazers_count,
          0
        );
        setStarCount(stars);

        const repoNames = reposResponse.data
          .slice(0, 5)
          .map((repo: { name: string }) => repo.name);
        setRepos(repoNames);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <Box
      p={6}
      bg={colorMode === "light" ? "gray.100" : "gray.700"}
      color={colorMode === "light" ? "black" : "white"}
      borderRadius="md"
      boxShadow="lg"
    >
      <Box display="flex" justifyContent="center" mb={4}>
        <Select
          value={selectedYear}
          onChange={handleYearChange}
          width="auto"
          bg={colorMode === "light" ? "white" : "gray.600"}
          borderColor={colorMode === "light" ? "gray.300" : "gray.500"}
        >
          {Array.from(
            { length: 5 },
            (_, i) => new Date().getFullYear() - i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <GitHubCalendar username="hailemichael121" year={selectedYear} />
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Flex alignItems="center">
          <Icon as={FaGithub} w={6} h={6} mr={2} />
          <Text fontSize="lg">Public Repositories: {publicRepoCount}</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={FaStar} w={6} h={6} mr={2} />
          <Text fontSize="lg">Stars: {starCount}</Text>
        </Flex>
      </Flex>

      <Heading as="h6" size="md" mt={6} mb={2}>
        Top 5 Repositories:
      </Heading>
      <List spacing={2}>
        {repos.map((repo, index) => (
          <ListItem key={index}>
            <Flex alignItems="center">
              <Icon as={FaGithub} w={5} h={5} mr={2} />
              <Text>{repo}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GitHubActivity;
