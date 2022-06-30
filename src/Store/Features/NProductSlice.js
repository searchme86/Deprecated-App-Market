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

export const ngetProducts = createAsyncThunk(
  'nproduct/getProducts',
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getProducts(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const NProductSlice = createSlice({
  name: 'Nproduct',
  initialState: {
    //상품 단일을 넣을
    nproduct: {},
    //상품들을 모두 모을 빈 배열
    nproducts: [],
    //상품에 대한 태그
    nproductHasTags: [],
    //해당 상품과 관련된 상품들
    nrelatedProducts: [],
    //페이징을 하기 위한
    currentPage: 1,
    numberOfPages: null,
    loading: false,
    isFetching: false,
    ProductSize: [
      {
        id: 0,
        value: 'XS(85)',
      },
      {
        id: 1,
        value: 'S(90)',
      },
      {
        id: 2,
        value: 'M(95)',
      },
      {
        id: 3,
        value: 'L(100)',
      },
      {
        id: 4,
        value: 'XL(105)',
      },
      {
        id: 5,
        value: 'XXL(110)',
      },
    ],
    ProductDegree: [
      {
        id: 0,
        value: '최상',
      },
      {
        id: 1,
        value: '상',
      },
      {
        id: 2,
        value: '중상',
      },
      {
        id: 3,
        value: '중',
      },
      {
        id: 4,
        value: '중하',
      },
      {
        id: 5,
        value: '중하',
      },
    ],
    ProductStatus: [
      {
        id: 0,
        value: '구입한지 1주일 이내 상태',
      },
      {
        id: 1,
        value: '구입한지 1년 이내 상태',
      },
      {
        id: 2,
        value: '구입 후, 변심으로 인해 포장이 되어 있는 상태',
      },
      {
        id: 3,
        value: '잔기스가 많으나 성능에는 무리 없습니다.',
      },
    ],
    error: '',
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
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
    [ngetProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [ngetProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.nproducts = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
    },
    [ngetProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setCurrentPage } = NProductSlice.actions;
export default NProductSlice.reducer;
