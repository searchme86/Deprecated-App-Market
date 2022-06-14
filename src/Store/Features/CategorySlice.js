import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../SendApi';

//카테고리를 생성
export const createCategory = createAsyncThunk(
  'category/createCategory',
  async ({ category, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createCategory(category);
      toast.success('Category Added Successfully');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

//저장된 모든 카테고리 정보를 가져옴
export const getCategoryList = createAsyncThunk(
  'category/getCategory',
  async ({ toast }, { rejectWithValue }) => {
    try {
      const response = await api.getCategories();
      // console.log('response', response);
      toast.success('Category Retrieved Successfully');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: {},
    categories: [],
    error: '',
    loading: false,
  },
  extraReducers: {
    [createCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [createCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = [action.payload];
    },
    [createCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getCategoryList.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategoryList.fulfilled]: (state, action) => {
      state.loading = false;
      // state.categories.concat(action.payload);
      state.categories = [action.payload];
    },
    [getCategoryList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

//export const { setCurrentPage } = tourSlice.actions;

export default categorySlice.reducer;
