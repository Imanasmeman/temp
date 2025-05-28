import React from "react";
import { useDispatch } from "react-redux";
import { toggleRead, deleteBook } from "../actions/bookActions";
import { Box, Text, Button, Stack } from "@chakra-ui/react";

const BookItem = ({ book, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p="4"
      mb="3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack spacing={1} flex="1" onClick={() => dispatch(toggleRead(book.id))} cursor="pointer">
        <Text fontWeight="bold" textDecoration={book.read ? "line-through" : "none"}>
          {book.title}
        </Text>
        <Text>{`Author: ${book.author}`}</Text>
        <Text>{`Genre: ${book.genre}`}</Text>
        <Text>{`Status: ${book.read ? "Read" : "Unread"}`}</Text>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button colorScheme="yellow" size="sm" onClick={() => onEdit(book)}>
          Edit
        </Button>
        <Button colorScheme="red" size="sm" onClick={() => dispatch(deleteBook(book.id))}>
          Delete
        </Button>
      </Stack>
    </Box>
  );
};

export default BookItem;
