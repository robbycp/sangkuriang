import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import api from 'utils/api';
import { AppThunk, RootState } from 'redux/configureStore';
import { SCAN_NMAP_POST, SCAN_SUBDOMAINS_POST, SCAN_WASP_SPIDER_POST } from 'constants/endpoints'

interface ScanState {
  scanNmap: {
    data: any
    error: any
    isLoading: boolean
  }
  scanSubdomain: {
    data: any,
    error: any,
    isLoading: boolean,
  }
  scanZapSpider: {
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
  scanSubdomain: {
    data: {},
    error: {},
    isLoading: false,
  },
  scanZapSpider: {
    data: {},
    error: {},
    isLoading: false,
  },
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
    scanSubdomainStart: state => {
      state.scanSubdomain.isLoading = true
    },
    scanSubdomainFailed: (state, action: PayloadAction<any>) => {
      state.scanSubdomain.isLoading = false
      state.scanSubdomain.data = { ...action.payload }
    },
    scanSubdomainSuccess: (state, action: PayloadAction<any>) => {
      state.scanSubdomain.isLoading = false
      state.scanSubdomain.data = { ...action.payload }
    },
    scanZapSpiderStart: state => {
      state.scanZapSpider.isLoading = true
    },
    scanZapSpiderFailed: (state, action: PayloadAction<any>) => {
      state.scanZapSpider.isLoading = false
      state.scanZapSpider.error = { ...action.payload }
    },
    scanZapSpiderSuccess: (state, action: PayloadAction<any>) => {
      state.scanZapSpider.isLoading = false
      state.scanZapSpider.data = { ...action.payload }
    }
  },
});

export const {
  scanNmapStart,
  scanNmapFailed,
  scanNmapSuccess,
  scanSubdomainStart,
  scanSubdomainFailed,
  scanSubdomainSuccess,
  scanZapSpiderStart,
  scanZapSpiderFailed,
  scanZapSpiderSuccess,
} = scanSlice.actions;

export const scanNmap = (urlTarget: string): AppThunk => async (dispatch) => {
  dispatch(scanNmapStart())
  try {
    const { data } = await api({
      endpoint: SCAN_NMAP_POST,
      params: {
        target: urlTarget,
      },
    })
    dispatch(scanNmapSuccess(data))
  } catch (error) {
    dispatch(scanNmapFailed(error))
  }
};

export const scanSubdomain = (urlTarget: string): AppThunk => async (dispatch) => {
  dispatch(scanSubdomainStart())
  try {
    const { data } = await api({
      endpoint: SCAN_SUBDOMAINS_POST,
      params: {
        target: urlTarget,
      }
    })
    dispatch(scanSubdomainSuccess(data))
  } catch (error) {
    dispatch(scanSubdomainFailed(error))
  }
}

export const scanZapSpider = (urlTarget: string): AppThunk => async (dispatch) => {
  dispatch(scanZapSpiderStart())
  try {
    const { data } = await api({
      endpoint: SCAN_WASP_SPIDER_POST,
      params: {
        target: urlTarget,
      }
    })
    dispatch(scanZapSpiderSuccess(data))
  } catch (error) {
    dispatch(scanZapSpiderFailed(error))
  }
}

export const selectNmap = (state: RootState) => ({
  scanNmap: state.scan.scanNmap,
});

export default scanSlice.reducer;
