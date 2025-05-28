import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import BookList from "./components/BookList";
import BookFilter from "./components/BookFilter";
import { ChakraProvider, Container } from "@chakra-ui/react";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.md" py="6">
          <BookFilter />
          <BookList />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
