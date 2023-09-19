const Button = (props) => {
  const { btnText, btnClassName } = props;
  return <button className={btnClassName}>{btnText}</button>;
};

export default Button;
