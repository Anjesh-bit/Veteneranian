import List from "../common/List";
import InputField from "../common/InputField";
import "./css/Header.css";

const Header = () => {
  const onHandleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app_header_wrapper">
      <div className="app_logo">Logo</div>
      <div className="app_header_list">
        <List />
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
