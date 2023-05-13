import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      console.log('login:', action.payload)
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    }
  },

});

export const { login, logout } = userSlice.actions;

// Selector gives back value desired
export const selectUser = (state) => state.user;

export default userSlice.reducer;
