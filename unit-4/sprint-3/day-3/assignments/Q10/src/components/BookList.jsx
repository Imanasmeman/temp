import React, { useState } from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import BookForm from "./BookForm";
import { Box, Heading, Button } from "@chakra-ui/react";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const [editingBook, setEditingBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Filtering books based on filter state
  const filteredBooks = books.filter((book) => {
    if (
      filter.author &&
      !book.author.toLowerCase().includes(filter.author.toLowerCase())
    )
      return false;
    if (
      filter.genre &&
      !book.genre.toLowerCase().includes(filter.genre.toLowerCase())
    )
      return false;
    if (filter.readStatus === "read" && !book.read) return false;
    if (filter.readStatus === "unread" && book.read) return false;
    return true;
  });

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setEditingBook(null);
    setShowForm(false);
  };

  return (
    <Box maxW="600px" m="auto" p="4">
      <Heading mb="4">My Book Library</Heading>

      <Button colorScheme="blue" mb="4" onClick={() => setShowForm(true)}>
        Add New Book
      </Button>

      {showForm && (
        <BookForm editableBook={editingBook} onClose={handleCloseForm} />
      )}

      {filteredBooks.length === 0 ? (
        <Box>No books found.</Box>
      ) : (
        filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} onEdit={handleEdit} />
        ))
      )}
    </Box>
  );
};

export default BookList;
