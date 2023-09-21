import List from "../common/List";
import InputField from "../common/InputField";
import "./css/Header.css";
import { useRef } from "react";

const Header = () => {
  const onHandleSearch = (event) => {
    event.preventDefault();
  };
  const handleOnclick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app_header_wrapper">
      <div className="hambuger_menu" onClick={handleOnclick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="app_logo">Logo</div>
      <div className="app_header_list">
        <List className="list_wrapper" />
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
