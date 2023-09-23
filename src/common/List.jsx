import "./css/List.css";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
// list component
//forwarding the ref to the parent element
const List = forwardRef((props, ref) => {
  const listRef = useRef(null);
  //expose the functionality to the parent element
  useImperativeHandle(
    ref,
    () => ({
      onHandleToggle: () => {
        if (!listRef.current.parentNode.classList.contains("active")) {
          listRef.current.parentNode.classList.add("active");
        }
      },
    }),
    []
  );

  // close handler
  const handleOnClose = (event) => {
    event.preventDefault();
    if (listRef.current.parentNode.classList.contains("active")) {
      listRef.current.parentNode.classList.remove("active");
    }
  };

  return (
    <div className="list_wrapper" ref={listRef}>
      <CloseIcon className="close_icon" onClick={handleOnClose} />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
});

export default List;
