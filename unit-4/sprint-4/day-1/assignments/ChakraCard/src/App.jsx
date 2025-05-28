import React from 'react'
import { Box, Image, Text, VStack, HStack, Button } from '@chakra-ui/react'

export default function App() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      p={4}
    >
      <Box
        width="sm"
        height="420px"
        bg="white"
        p={6}
        borderRadius="xl"
        boxShadow="md"
        textAlign="center"
      >
        <VStack spacing={3}>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Lindsey James"
            mx="auto"
          />
          <Text color = "black" fontWeight="bold" fontSize="xl">
            Lindsey James
          </Text>
          <Text color="gray.500" marginTop="-10px">@lindsey_jam3s</Text>
          <Text color="black"> Actress,musician, songwriter and artist. PM for work inquires</Text>
          <Text color="black"marginTop="-10px">or</Text>
          <Text color="lightblue"marginTop="-10px">#tag</Text>
          <Text color="black"marginTop="-10px">me on your posts</Text>
          <HStack spacing={2} pt={2}>
    <Box
      px={4}
      py={1}
      bg="gray.100"
      color="lightblue"
      borderRadius="medium"
      fontSize="sm"
      fontWeight="medium"
    >
      #ART
    </Box>
    <Box
      px={4}
      py={1}
      bg="gray.100"
      color="lightblue"
      borderRadius="medium"
      fontSize="sm"
      fontWeight="medium"
    >
      #PHOTOGRAPHY
    </Box>
    <Box
      px={4}
      py={1}
      bg="gray.100"
      color="lightblue"
      borderRadius="medium"
      fontSize="sm"
      fontWeight="medium"
    >
      #MUSIC
    </Box>
  </HStack>
  <HStack gap="8">
  <Button bg="gray.200" rounded="full">Message</Button>
  <Button bg="lightblue" color="white" rounded="full">Follow</Button>
  </HStack>
        </VStack>
      </Box>
    </Box>
  )
}
