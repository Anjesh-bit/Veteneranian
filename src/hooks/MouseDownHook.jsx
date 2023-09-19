const useMouseDown = (
  position,
  handleMouseMove,
  handleMouseUp,
  dispatch,
  actions
) => {
  const handleMouseDown = (e) => {
    // Get the initial offset of the mouse relative to the slider
    const initialOffset = e.clientX - position;
    // Set the offset state
    dispatch(actions(initialOffset));
    // Add event listeners for mouse move and mouse up events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return { handleMouseDown };
};

export default useMouseDown;
