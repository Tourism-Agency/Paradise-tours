import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  isFetching: false,
  packageId: {},
};

const appIdSlice = createSlice({
  name: 'packageId',
  initialState: INITIAL_STATE,
  reducers: {
    packageIdFetchStart(state, action) {
      state.isFetching = true;
      state.packageId = {};
    },
    packageIdFetchSuccess(state, { payload: { packageId } }) {
      console.log('packageIdpackageId',packageId);
      state.isFetching = false;
      state.packageId = packageId;
    },
    packageIdFetchError(state, action) {
      state.isFetching = false;
      state.packageId = {};
    },
  },
});

export const { name, actions, reducer } = appIdSlice;
export const { packageIdFetchStart, packageIdFetchSuccess, packageIdFetchError } = actions;
export default reducer;
