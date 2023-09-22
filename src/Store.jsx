import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ImageSliderReducers from "./reducers/ImageSliderReducers";
import { ModalReducers } from "./reducers/ModalReducers";

//combine all the reducres at once
const reducers = combineReducers({
  imageSliderData: ImageSliderReducers,
  videoPlayerData: ModalReducers,
});

// initial state for the Store when component mounts
const initialState = {
  imageSliderData: { offset: 0, position: 0 },
  videoPlayerData: { open: false, videoType: "", videoId: "" },
};

//middleware thunk for decreasing side effects and returning the action creators as a function instead of plain js object
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
