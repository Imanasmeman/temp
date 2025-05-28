import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Spinner, Box, Heading, VStack } from '@chakra-ui/react';

export default function HomePage() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <Spinner size="xl" mt={10} />;
  if (error) return <Box color="red.500">Error: {error}</Box>;

  return (
    <VStack spacing={4} mt={10}>
      <Heading size="lg">User List</Heading>
      {users.map((user) => (
        <Box key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </Box>
      ))}
    </VStack>
  );
}
