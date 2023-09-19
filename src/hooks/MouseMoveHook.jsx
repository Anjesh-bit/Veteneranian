const useMouseMove = (offset, dispatch, actions) => {
  const handleMouseMove = (e) => {
    // Get the current position of the mouse relative to the slider
    const currentPosition = e.clientX - offset;
    // Set the position state
    dispatch(actions(currentPosition));
  };
  return { handleMouseMove };
};

export default useMouseMove;
