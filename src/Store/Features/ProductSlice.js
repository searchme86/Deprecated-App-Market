import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
    error: '',
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {},
});

export const { setCurrentPage } = ProductSlice.actions;

export default ProductSlice.reducer;
