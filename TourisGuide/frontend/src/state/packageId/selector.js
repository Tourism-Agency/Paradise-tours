import { createSelector } from 'reselect';

export const selectAppId = (state) => state.packageId;

export const selectPackageId = createSelector([selectAppId], (packageId) => {
  return packageId;
});