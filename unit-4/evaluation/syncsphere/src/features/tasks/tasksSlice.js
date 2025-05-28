import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get('https://dummyjson.com/todos');
    const dataWithUrgency = response.data.todos.map(todo => ({
        ...todo, urgency: Math.floor(Math.random() * 5) + 1,
    }));
    return dataWithUrgency;
    })
    const taskSlice = createSlice({
        name: 'tasks',
        initialState: {
            items: [],
            status: "idle",
        },
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            }).addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            }).addCase(fetchTasks.rejected, (state) => {
                state.status = 'failed'
            });
        },
    });
    export const selectedSortedTasks = (state) => {
        return [...state.tasks.items].sort((a, b) => a.urgency - b.urgency); 
    };
    export default taskSlice.reducer;
