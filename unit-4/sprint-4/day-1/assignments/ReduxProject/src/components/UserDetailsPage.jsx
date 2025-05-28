import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector(state =>
    state.users.users.find(u => u.id === Number(id))
  );

  if (!user) {
    return <Text mt="20" textAlign="center" fontSize="xl">User not found</Text>;
  }

  return (
    <Box maxW="600px" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="md">
      <VStack spacing={4} align="start">
        <Text fontSize="2xl" fontWeight="bold">{user.name}</Text>
        <Text><b>Email:</b> {user.email}</Text>
        <Text><b>Phone:</b> {user.phone}</Text>
        <Text>
          <b>Address:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </Text>
        <Button onClick={() => navigate('/')} colorScheme="blue">Back to Home</Button>
      </VStack>
    </Box>
  );
};

export default UserDetailsPage;
