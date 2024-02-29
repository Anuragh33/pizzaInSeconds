import { configureStore, createReducer } from '@reduxjs/toolkit';
import userReducer from './featured/user/userSlice';
import cartReducer from './featured/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
