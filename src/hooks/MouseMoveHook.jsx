import { useSelector } from "react-redux";

//This is only for demonstration of custom hooks, but i have used the package for draggable slider

const useMouseMove = (dispatch, actions) => {
  const { offset } = useSelector((state) => state.imageSliderData);
  const handleMouseMove = (e) => {
    // Get the current position of the mouse relative to the slider
    const currentPosition = e.clientX - offset;
    // Set the position state
    dispatch(actions(currentPosition));
  };
  return { handleMouseMove };
};

export default useMouseMove;
