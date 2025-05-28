import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice';
import { Link } from 'react-router-dom';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading)
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
      <Spinner size="xl" />
    </Box>
  );


  if (error) return <Text color="red.500" mt="20">{error}</Text>;

  return (
    <Box maxW="600px" mx="auto" mt="10" p="5">
      <Text fontSize="2xl" mb="5" fontWeight="bold">Users List</Text>
      <VStack spacing={3} align="stretch">
        {users.map(user => (
          <Box
            key={user.id}
            fontSize="xl"
            _hover={{ color: 'blue.500' }}
            cursor="pointer"
          >
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default HomePage;
