import {
  ON_MODAL_CLOSE,
  ON_MODAL_OPEN,
  ON_MODAL_FAIL,
} from "../constants/ModalConstant";

const ModalOpenActions = (opened, type, id) => (dispatch) => {
  try {
    dispatch({ type: ON_MODAL_OPEN, payload: { opened, type, id } });
  } catch (error) {
    dispatch({
      type: ON_MODAL_FAIL,
    });
  }
};

const ModalCloseActions = (opened) => (dispatch) => {
  try {
    dispatch({ type: ON_MODAL_CLOSE, payload: opened });
  } catch (error) {
    dispatch({
      type: ON_MODAL_FAIL,
    });
  }
};

export { ModalOpenActions, ModalCloseActions };
