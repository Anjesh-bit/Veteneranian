//This is only for demonstration of custom hooks, but i have used the package for draggable slider
import { useSelector } from "react-redux";

const useMouseDown = (dispatch, actions) => {
  const { position } = useSelector((state) => state.imageSliderData);
  const handleMouseDown = (e) => {
    // Get the initial offset of the mouse relative to the slider
    const initialOffset = e.clientX - position;
    // Set the offset state
    dispatch(actions(initialOffset));
  };
  return { handleMouseDown };
};

export default useMouseDown;
