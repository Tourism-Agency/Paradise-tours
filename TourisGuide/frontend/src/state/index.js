import { configureStore } from '@reduxjs/toolkit';

import { reducer as AppIdReducer } from './packageId/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = configureStore({
    reducer: {
      packageId: AppIdReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

  return store;
};
