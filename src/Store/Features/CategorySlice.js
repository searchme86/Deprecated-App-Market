import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../SendApi';

export const createCategory = createAsyncThunk(
  'category/createCategory',
  async ({ categoryData, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createCategory(categoryData);
      toast.success('Category Added Successfully');
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
  reducers: {
    [createCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [createCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = [action.payload];
    },
    [createCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

//export const { setCurrentPage } = tourSlice.actions;

export default categorySlice.reducer;
