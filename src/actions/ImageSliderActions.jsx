import { ON_IMAGE_OFF_FAIL, ON_IMAGE_OFF_SUCCESS, ON_IMAGE_POS_FAIL, ON_IMAGE_POS_SUCCESS } from "../constants/ImageSliderConstant";

const positionActions = (initvalues) => (dispatch) => {
  try {
    dispatch({ type: ON_IMAGE_POS_SUCCESS, payload: initvalues });
  } catch (e) {
    dispatch({ type: ON_IMAGE_POS_FAIL });
  }
};

const offsetActions = (initvalues) => (dispatch) => {
  try {
    dispatch({ type: ON_IMAGE_OFF_SUCCESS, payload: initvalues });
  } catch (e) {
    dispatch({ type: ON_IMAGE_OFF_FAIL });
  }
};

export { positionActions, offsetActions };
