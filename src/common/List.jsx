import "./css/List.css";

// list component
const List = (props) => {
  return (
    <div className="list_wrapper">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default List;
