import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addCart = createAsyncThunk(
  'cart/addCart',
  async ({}, { rejectWithValue }) => {
    try {
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCart = createAsyncThunk(
  'cart/getCart',
  async ({}, { rejectWithValue }) => {
    try {
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const delelteCart = createAsyncThunk(
  'cart/delelteCart',
  async ({}, { rejectWithValue }) => {
    try {
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const editCart = createAsyncThunk(
  'cart/delelteCart',
  async ({}, { rejectWithValue }) => {
    try {
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;

//action.payload
//: 전달한 인자
//action.payload.quantity
//전달한 인자 안에 quantity가 있다는 의미
//<ProductAmount>{product.quantity}</ProductAmount> , pages/cart.jsx
//action.payload는 전달한 인자를 의미함
