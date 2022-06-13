import { configureStore } from '@reduxjs/toolkit';
// import AuthReducer from './features/authSlice';
// import TourReducer from './features/tourSlice';
import AuthReducer from './Features/AuthSlice';
import CartReducer from './Features/CartSlice';
import TourReducer from './Features/TourSlice';
import ProductReducer from './Features/ProductSlice';

export default configureStore({
  reducer: {
    auth: AuthReducer,
    tour: TourReducer,
    cart: CartReducer,
    product: ProductReducer,
  },
});
