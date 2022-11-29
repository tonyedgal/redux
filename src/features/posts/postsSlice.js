import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
  },
  {
    id: "1",
    title: "Slices...",
    content: "The more I say slice, the more I want a slice of pizza",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

// this is a selector that selects all the posts
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
