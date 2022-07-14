import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import * as api from '../SendApi';

export const login = createAsyncThunk(
  'auth/login',
  async ({ formValue, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formValue);
      console.log('response', response);
      navigate('/');
      return response.data;
    } catch (error) {
      console.log('error', error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const UserRegister = createAsyncThunk(
  'auth/register',
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      console.log('formValue', formValue);
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

export const checkPwd = createAsyncThunk(
  'auth/password',
  async ({ nickname, password }, { rejectWithValue }) => {
    console.log(nickname, password);
    try {
      const response = await api.checkIfPwd(nickname, password);
      // toast.success('변경가능한 비밀번호 입니다.');
      console.log('changable response', response);
      return response.data;
    } catch (err) {
      console.log('error', err.response);
      console.log('error', err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    pwdChangable: '',
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
      console.log('action.payload', action.payload);
      state.user = action.payload;
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [UserRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [UserRegister.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [UserRegister.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [checkPwd.pending]: (state, action) => {
      state.loading = true;
    },
    [checkPwd.fulfilled]: (state, action) => {
      state.loading = false;
      state.pwdChangable = action.payload;
    },
    [checkPwd.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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
      state.error = action.payload;
    },
  },
});

const AuthState = createSelector(
  (state) => state.auth,
  (auth) => {
    return { auth };
  }
);

export const AuthSelector = (state) => AuthState(state);

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
