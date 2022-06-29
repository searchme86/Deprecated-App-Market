import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../SendApi';

export const ncreateProduct = createAsyncThunk(
  'nproduct/createProduct',
  async ({ newProduct, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createProduct(newProduct);
      toast.success('Product Added Successfully');
      navigate('/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const NProductSlice = createSlice({
  name: 'Nproduct',
  initialState: {
    //상품들을 모두 모을 빈 배열
    nproducts: [],
    //상품 단일을 넣을
    nproduct: {},
    //상품에 대한 태그
    nproductHasTags: [],
    //해당 상품과 관련된 상품들
    nrelatedProducts: [],
    //페이징을 하기 위한
    ncurrentPage: 1,
    nnumberOfPages: null,
    loading: false,
    isFetching: false,
    error: '',
  },
  reducers: {
    setProductCurrentPage: (state, action) => {
      state.ncurrentPage = action.payload;
    },
  },
  extraReducers: {
    [ncreateProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [ncreateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.nproducts = [action.payload];
    },
    [ncreateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setProductCurrentPage } = NProductSlice.actions;
export default NProductSlice.reducer;
