import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

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
    /**
     * use prepare callback to customize
     * the payload value of an  action
     * creator
     */
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

// this is a selector that selects all the posts
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
