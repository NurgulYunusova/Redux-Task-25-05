import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  loading: true,
  error: {},
};

//middleware
export const getTodos = createAsyncThunk(
  "api/todos",
  async (thunkAPI, { rejectWithValue }) => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todosSlice",
  initialState: initialState,
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.loading = true;
      state.todos = [];
      state.error = null;
    },
    [getTodos.rejected]: (state, { payload }) => {
      state.loading = false;
      state.todos = [];
      state.error = payload;
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.todos = payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export default todosSlice.reducer;
