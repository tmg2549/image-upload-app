import { createSlice } from '@reduxjs/toolkit'

export interface PostState {
  posts: {imgURI: string, comment: string}[]
}

const initialState: PostState = {
  posts: [],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPost } = postSlice.actions

export default postSlice.reducer