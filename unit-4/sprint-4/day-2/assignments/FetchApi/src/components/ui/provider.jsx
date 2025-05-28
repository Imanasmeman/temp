import { ChakraProvider } from '@chakra-ui/react';

export function ChProvider({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
