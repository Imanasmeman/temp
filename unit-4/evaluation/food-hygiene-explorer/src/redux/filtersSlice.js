import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  rating: "All", // Possible values: "All", "0", "1", ..., "5", "AwaitingInspection", "Exempt"
  authority: "All", // Default filter
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.currentPage = 1; // reset to page 1 on new search
    },
    setRating(state, action) {
      state.rating = action.payload;
      state.currentPage = 1; // reset to page 1 on new filter
    },
    setAuthority(state, action) {
      state.authority = action.payload;
      state.currentPage = 1; // reset to page 1 on new filter
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    resetFilters(state) {
      state.search = "";
      state.rating = "All";
      state.authority = "All";
      state.currentPage = 1;
    },
  },
});

export const {
  setSearch,
  setRating,
  setAuthority,
  setCurrentPage,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
