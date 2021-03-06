import {createSelector} from 'reselect';

const selectForm = (state) => state.form;

export const selectLoading = createSelector(
  [selectForm],
  (form) => form.loading,
);

export const selectFormData = createSelector(
  [selectForm],
  (form) => form.formData,
);

export const selectImages = createSelector([selectForm], (form) => form.images);

export const selectVideo = createSelector([selectForm], (form) => form.video);

export const selectImageResponse = createSelector(
  [selectForm],
  (form) => form.imageResponse,
);

export const selectVideoResponse = createSelector(
  [selectForm],
  (form) => form.videoResponse,
);

export const selectReport = createSelector(
  [selectForm],
  (form) => form.savedReport,
);
