import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    walletAdress: '',
  },
  reducers: {
    setWalletAdress: (state, action) => {
      state.walletAdress = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { setWalletAdress } = actions;

export default reducer;
