import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ImageSliderReducers from "./reducers/ImageSliderReducers";
import { ModalReducers } from "./reducers/ModalReducers";

const reducers = combineReducers({
  imageSliderData: ImageSliderReducers,
  videoPlayerData: ModalReducers,
});

const initialState = {
  imageSliderData: { offset: 0, position: 0 },
  videoPlayerData: { open: false, videoType: "", videoId: "" },
};

const middleware = [thunk];

const Store = () => {
  const checkForReactDevTools =
    typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined";
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      checkForReactDevTools
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (args) => args
    )
  );
};

export default Store;
