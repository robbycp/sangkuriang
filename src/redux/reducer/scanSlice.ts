import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import api from 'utils/api';
import { AppThunk, RootState } from 'redux/configureStore';
import { SCAN_NMAP_GET } from 'constants/endpoints'

interface ScanState {
  scanNmap: {
    data: any
    error: any
    isLoading: boolean
  }
  scanSpider: {
    data: any
    error: any
    isLoading: boolean
  }
}

const initialState: ScanState = {
  scanNmap: {
    data: {},
    error: {},
    isLoading: false,
  },
  scanSpider: {
    data: {},
    error: {},
    isLoading: false,
  }
};

export const scanSlice = createSlice({
  name: 'scan',
  initialState,
  reducers: {
    scanNmapStart: state => {
      state.scanNmap.isLoading = true
    },
    scanNmapFailed: (state, action: PayloadAction<any>) => {
      state.scanNmap.isLoading = false
      state.scanNmap.error = { ...action.payload }
    },
    scanNmapSuccess: (state, action: PayloadAction<any>) => {
      state.scanNmap.isLoading = false
      state.scanNmap.data = { ...action.payload }
    },
  },
});

export const {
  scanNmapStart,
  scanNmapFailed,
  scanNmapSuccess,
} = scanSlice.actions;

export const scanNmap = (urlTarget: string): AppThunk => async (dispatch) => {
  dispatch(scanNmapStart())
  try {
    const { data } = await api({
      endpoint: SCAN_NMAP_GET,
      params: {
        target: urlTarget,
      },
    })
    console.log('scanNmap data', data)
    dispatch(scanNmapSuccess(data))
  } catch (error) {
    dispatch(scanNmapFailed(error))
  }
};

export const selectNmap = (state: RootState) => ({
  scanNmap: state.scan.scanNmap,
});

export default scanSlice.reducer;
