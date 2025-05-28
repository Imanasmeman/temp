import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../actions/bookActions";
import { Box, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";

const BookFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <Box maxW="400px" m="auto" p="4" borderWidth="1px" borderRadius="md" mb="6">
      <FormControl mb="3">
        <FormLabel>Author</FormLabel>
        <Input
          name="author"
          value={filter.author}
          onChange={handleChange}
          placeholder="Filter by author"
        />
      </FormControl>

      <FormControl mb="3">
        <FormLabel>Genre</FormLabel>
        <Input
          name="genre"
          value={filter.genre}
          onChange={handleChange}
          placeholder="Filter by genre"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Reading Status</FormLabel>
        <Select name="readStatus" value={filter.readStatus} onChange={handleChange}>
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BookFilter;
