import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ImageSliderReducers from "./reducers/ImageSliderReducers";
const reducers = combineReducers({
  imageSliderData: ImageSliderReducers,
});

const initialState = {
  position: 0,
  offset: 0,
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
