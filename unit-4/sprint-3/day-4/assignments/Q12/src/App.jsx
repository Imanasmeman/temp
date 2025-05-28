import React from "react";
import { Box, Text, VStack, HStack, Button, Image } from "@chakra-ui/react";

const testimonials = [
  {
    title: "Efficient Collaborating",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    title: "Intuitive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "John Smith",
    role: "CTO at XYZ Inc.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    title: "Mindblowing Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    name: "Alice Johnson",
    role: "Founder at Startup Co.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function App() {
  return (
    <Box bg="gray.100" py={10} px={{ base: 4, md: 10 }} minH="100vh">
      <VStack spacing={6} maxW="7xl" mx="auto" mb={10} px={{ base: 2, md: 0 }}>
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
        >
          Our Clients Speak
        </Text>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color="gray.600"
          textAlign="center"
          maxW="3xl"
        >
          We have been working with clients around the world
        </Text>
      </VStack>

      <HStack
        spacing={6}
        wrap="wrap"
        justify="center"
        maxW="7xl"
        mx="auto"
        px={{ base: 2, md: 0 }}
      >
        {testimonials.map((item, idx) => (
          <Box
            key={idx}
            bg="white"
            p={6}
            borderRadius="xl"
            boxShadow="md"
            maxW={{ base: "100%", sm: "320px" }}
            flex="1 1 320px"
            textAlign="center"
            mb={{ base: 6, md: 0 }}
          >
            <Text fontWeight="bold" fontSize={{ base: "md", md: "xl" }} mb={3}>
              {item.title}
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" mb={6}>
              {item.description}
            </Text>
            <VStack spacing={2}>
              <Text fontWeight="semibold" fontSize={{ base: "sm", md: "md" }}>
                {item.name}
              </Text>
              <Image
                borderRadius="full"
                boxSize={{ base: "60px", md: "80px" }}
                src={item.avatar}
                alt={item.name}
                mx="auto"
              />
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.500"
                mt={2}
              >
                {item.role}
              </Text>
            </VStack>
            <HStack
              justify="center"
              spacing={4}
              mt={6}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Button
                size="sm"
                bg="gray.200"
                rounded="full"
                w={{ base: "full", sm: "auto" }}
                _hover={{ bg: "gray.300" }}
                mb={{ base: 2, sm: 0 }}
              >
                Message
              </Button>
              <Button
                size="sm"
                bg="lightblue"
                color="white"
                rounded="full"
                w={{ base: "full", sm: "auto" }}
                _hover={{ bg: "blue.400" }}
              >
                Follow
              </Button>
            </HStack>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
