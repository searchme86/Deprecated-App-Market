import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const untitled = createAsyncThunk();

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
