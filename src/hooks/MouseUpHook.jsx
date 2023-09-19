const useMouseUp = () => {
  const handleMouseUp = (handleMouseMove) => {
    // Remove the event listeners for mouse move and mouse up events
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return { handleMouseUp };
};

export default useMouseUp;
