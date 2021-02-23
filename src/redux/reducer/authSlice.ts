import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { replace } from 'connected-react-router'
import { SIGNIN_POST } from 'constants/endpoints';

import api from 'utils/api';
import { AppThunk, RootState } from 'redux/configureStore';
import { hasToken, removeToken, setToken } from 'utils/token'

interface AuthState {
  me: {
    auth: any,
    user: {
      email: string,
      role: string,
    },
  },
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  me: {
    auth: {},
    user: {
      email: '',
      role: '',
    },
  },
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authCheckStart: state => {
      state.isLoading = true
    },
    authCheckFailed: state => {
      state.isLoading = false
    },
    authCheckSuccess: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false
      state.isAuthenticated = action.payload
    },
    authSigninStart: state => {
      state.isLoading = true
    },
    authSigninFailed: state => {
      state.isLoading = false
    },
    authSigninSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.me.auth = action.payload.auth
      state.me.user = action.payload.user
      state.isAuthenticated = true
    },
    authSignoutStart: state => {
      state.isLoading = false
    },
  },
});

export const {
  authCheckStart,
  authCheckFailed,
  authCheckSuccess,
  authSigninStart,
  authSigninFailed,
  authSigninSuccess,
  authSignoutStart,
} = authSlice.actions;

const auth = {
  token: 'fjwoij3283n2u3iuhiu'
}
const user = {
  email: 'budi@gmail.com',
  role: 'Admin'
}

export const authCheck = (): AppThunk => async (dispatch) => {
  dispatch(authCheckStart())
  const valHasToken = await hasToken()
  dispatch(authCheckSuccess(valHasToken))
  if (valHasToken) {
    dispatch(authSigninSuccess({ auth, user }))
  }
};

export const authSignout = (): AppThunk => async dispatch => {
  dispatch(authSignoutStart())
  await removeToken()
  dispatch(authCheck())
  await dispatch(replace('/'))
}

export const authSignin = (payload: any): AppThunk => async dispatch => {
  dispatch(authSigninStart())
  try {
    const { data } = await api({
      endpoint: SIGNIN_POST,
      body: {
        username: payload.email,
        password: payload.password,
      }
    })
    await setToken(data.access_token)
    dispatch(authSigninSuccess({
      auth,
      user: {
        role: user.role,
        email: payload.email,
      },
    }))
    await dispatch(replace('/dashboard'))
  } catch (error) {
    dispatch(authSigninFailed())
  }
}

export const selectIsAuth = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});
export const selectMe = (state: RootState) => ({
  me: state.auth.me,
  isLoading: state.auth.isLoading,
});

export default authSlice.reducer;
