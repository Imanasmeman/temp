import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../actions/bookActions";
import {
  Box,
  Input,
  Button,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const initialForm = { id: null, title: "", author: "", genre: "", read: false };

const BookForm = ({ editableBook = null, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editableBook) {
      setForm(editableBook);
    }
  }, [editableBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.author || !form.genre) return;

    if (form.id) {
      dispatch(editBook(form));
    } else {
      dispatch(addBook({ ...form, id: Date.now() }));
    }

    setForm(initialForm);
    if (onClose) onClose();
  };

  return (
    <Box maxW="400px" p="4" borderWidth="1px" borderRadius="md" m="auto">
      <FormControl mb="3">
        <FormLabel>Title</FormLabel>
        <Input name="title" value={form.title} onChange={handleChange} />
      </FormControl>

      <FormControl mb="3">
        <FormLabel>Author</FormLabel>
        <Input name="author" value={form.author} onChange={handleChange} />
      </FormControl>

      <FormControl mb="3">
        <FormLabel>Genre</FormLabel>
        <Input name="genre" value={form.genre} onChange={handleChange} />
      </FormControl>

      <Button colorScheme="blue" onClick={handleSubmit}>
        {form.id ? "Update Book" : "Add Book"}
      </Button>
    </Box>
  );
};

export default BookForm;
