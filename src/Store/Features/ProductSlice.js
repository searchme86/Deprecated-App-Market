import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../SendApi';

export const saveUp = createAsyncThunk(
  'product/upload',
  async ({ uploadData, toast }, { rejectWithValue }) => {
    try {
      const response = await api.uploadProduct(uploadData);
      toast.success('Product Added Successfully');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    //상품들을 모두 모을 빈 배열
    products: [],
    //상품 단일을 넣을
    product: {},
    //상품에 대한 태그
    productHasTags: [],
    //해당 상품과 관련된 상품들
    relatedProducts: [],
    //페이징을 하기 위한
    currentPage: 1,
    numberOfPages: null,
    loading: false,
    isFetching: false,
    error: '',
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [saveUp.pending]: (state, action) => {
      state.isFetching = false;
      state.loading = true;
    },
    [saveUp.fulfilled]: (state, action) => {
      state.isFetching = true;
      state.loading = false;
      state.products = [action.payload];
    },
    [saveUp.rejected]: (state, action) => {
      state.isFetching = false;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setCurrentPage } = ProductSlice.actions;

export default ProductSlice.reducer;
