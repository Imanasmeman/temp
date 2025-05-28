import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';

export default function UserDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.users.find((u) => u.id === Number(id))
  );

  if (!user) return <Box mt={10}>User not found</Box>;

  return (
    <VStack spacing={4} mt={10}>
      <Heading size="lg">{user.name}</Heading>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>
        Address: {user.address.street}, {user.address.city}
      </Text>
      <Button colorScheme="teal" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </VStack>
  );
}
