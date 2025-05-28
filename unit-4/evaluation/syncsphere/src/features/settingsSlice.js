import { createSlice } from "@reduxjs/toolkit";
import { setTheme } from "../store";
const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        theme: 'light',
        layout: 'list',
        maxTasks: 10,
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLayout: (state, action) => {
            state.theme = action.payload;
        },
        setMaxTasks: (state, action) => {
            state.maxTasks = action.payload;
        },
    },
});
export const { setTheme, setLayout, setMaxTasks } = settingsSlice.actions;
export default settingsSlice.reducer;