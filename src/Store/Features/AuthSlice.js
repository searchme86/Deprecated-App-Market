import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../SendApi';

export const login = createAsyncThunk(
  'auth/login',
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formValue);
      toast.success('로그인에 성공했습니다');
      navigate('/');
      return response.data;
    } catch (error) {
      console.log('error', error.response);
      return rejectWithValue(error.response.data);

      // if (error.response) {
      //   console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      // } else if (error.request) {
      //   console.log(error.request);
      // } else {
      //   console.log('Error', error.message);
      //   return rejectWithValue(error.response.data);
      // }
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      toast.success('회원가입이 성공적으로 완료됐습니다');
      navigate('/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const changeProfile = createAsyncThunk(
  'auth/profile',
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.profile(formValue);
      toast.success('유저 정보가 성공적으로 변경됐습니다.');
      navigate('/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const googleSignIn = createAsyncThunk(
//   'auth/googleSignIn',
//   async ({ result, navigate, toast }, { rejectWithValue }) => {
//     try {
//       const response = await api.googleSignIn(result);
//       toast.success('Google Sign-in Successfully');
//       navigate('/');
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: '',
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [changeProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [changeProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [changeProfile.rejected]: (state, action) => {
      state.loading = false;
    },

    // [googleSignIn.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [googleSignIn.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
    //   state.user = action.payload;
    // },
    // [googleSignIn.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
