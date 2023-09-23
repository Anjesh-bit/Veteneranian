import List from "../common/List";
import InputField from "../common/InputField";
import "./css/Header.css";
import { useRef, useEffect, useState } from "react";

const Header = () => {
  const [onHandleToggle, setOnHandleToggle] = useState(null);
  const listRef = useRef(null);

  useEffect(() => {
    // expose the onHandleToggle method to the parent component
    setOnHandleToggle(() => listRef.current?.onHandleToggle);
    return () => {
      // clean up the ref
      listRef.current = null;
    };
  }, []);

  const onHandleSearch = (event) => {
    event.preventDefault();
  };

  // This is a sticky header as per the project requirements
  return (
    <div className="app_header_wrapper">
      <div className="hambuger_menu" onClick={onHandleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="app_logo">Logo</div>
      <div className="app_header_list">
        <List ref={listRef} />
      </div>
      <div className="app_search_bar">
        <InputField
          inputType="text"
          inputPlaceHolder="search"
          onChangeCallBack={onHandleSearch}
          className="search_input"
        />
      </div>
    </div>
  );
};

export default Header;
