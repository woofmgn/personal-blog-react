import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

export const getStoriesList = createAsyncThunk(
  'articles/getStoriesList', async () => {
    const res = await axios.get('https://636b9dd27f47ef51e13586c9.mockapi.io/stories');
    return res.data
  }
)

export type Stories = {
  id?: string;
  title: string;
  imageUrl: string;
  date: string;
}

interface StoriesItemsState {
  items: Stories[];
  inputUrl: boolean;
  status: 'loading' | 'success' | 'error';
}

const initialState: StoriesItemsState = {
  items: [],
  inputUrl: false,
  status: 'loading',
};

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    pushStories(state, action: PayloadAction<Stories[]>) {
      state.status = 'loading';
      state.items = action.payload;
    },
    addStories(state, action) {
      state.items.push({ ...action.payload });
    },
    toggleInputUrl(state, action: PayloadAction) {
      state.inputUrl = !state.inputUrl;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getStoriesList.pending, (state, action) => {
      state.status = 'loading';
      state.items = [];
    });

    builder.addCase(getStoriesList.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload;
    });

    builder.addCase(getStoriesList.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    })
  }
});

export const { pushStories, addStories, toggleInputUrl } = storiesSlice.actions;

export default storiesSlice.reducer;