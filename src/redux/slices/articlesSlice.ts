import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';


// type IgetArticlesList = {
//   id: number;
//   title: string;
//   imageUrl: string;
//   articles: string;
//   category: string;
//   date: string;
// }

export const getArticlesList = createAsyncThunk(
  'articles/getArticlesList', async () => {
    const res = await axios.get('https://636b9dd27f47ef51e13586c9.mockapi.io/articles');
    return res.data
  }
)

type Article = {
  id: number;
  title: string;
  imageUrl: string;
  articles: string;
  category: string;
  date: string;
}

interface ArticlesItemsState {
  items: Article[],
  status: 'loading' | 'success' | 'error';
}

const initialState: ArticlesItemsState = {
  items: [],
  status: 'loading',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    pushArticles(state, action: PayloadAction<Article[]>) {
      state.status = 'loading';
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getArticlesList.pending, (state, action) => {
      state.status = 'loading';
      state.items = [];
    });

    builder.addCase(getArticlesList.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload;
    });

    builder.addCase(getArticlesList.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    })
  }
});

export const { pushArticles } = articlesSlice.actions;

export default articlesSlice.reducer;