import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../SendApi';

//카테고리를 생성
export const createCategory = createAsyncThunk(
  'category/createCategory',
  async ({ category, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.createCategory(category);
      toast.success('Category Added Successfully');
      navigate('/');
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
      toast.success('Category Retrieved Successfully');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

//해당 _id의 카테고리를 지움
export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteCategory(id);
      console.log('response', response);
      toast.success('Category Deleted Successfully');
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
    fetchingCategory: false,
  },
  extraReducers: {
    [createCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [createCategory.fulfilled]: (state, action) => {
      state.loading = false;
      // state.categories = [action.payload];
      state.categories.push(action.payload);
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
      state.categories = action.payload;
    },
    [getCategoryList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.loading = false;
      console.log('action', action);
      console.log('action.payload', action.payload);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.categories = state.categories.filter((item) => item._id !== id);
        // state.tours = state.tours.filter((item) => item._id !== id);
      }
    },
    [deleteCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

//export const { setCurrentPage } = tourSlice.actions;

export default categorySlice.reducer;
