import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {
    addArticle: (state, action) => {
      state.push(action.payload);
    },
    deleteArticle: (state, action) => {
      return state.filter(article => article.id !== action.payload);
    },
    updateArticle: (state, action) => {
      const index = state.findIndex(article => article.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addArticle, deleteArticle, updateArticle } = articlesSlice.actions;

export default articlesSlice.reducer;