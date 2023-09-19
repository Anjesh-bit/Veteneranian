import {
  ON_IMAGE_POS_SUCCESS,
  ON_IMAGE_OFF_FAIL,
  ON_IMAGE_POS_FAIL,
  ON_IMAGE_OFF_SUCCESS,
} from "../constants/ImageSliderConstant";

const ImageSliderReducers = (state = [], actions) => {
  switch (actions.type) {
    case ON_IMAGE_OFF_SUCCESS:
      return { ...state, offset: actions.payload };
    case ON_IMAGE_OFF_FAIL:
      return { ...state, message: "Failed to slide" };
    case ON_IMAGE_POS_SUCCESS:
      return { ...state, position: actions.payload };
    case ON_IMAGE_POS_FAIL:
      return { ...state, message: "Failed to slide" };
    default:
      return { ...state };
  }
};

export default ImageSliderReducers;
