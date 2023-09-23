//common InputField for reusable components
const InputField = (props) => {
  const {
    inputType,
    inputValue,
    inputPlaceHolder,
    onChangeCallBack,
    className,
    inputRef,
  } = props;
  return (
    <div>
      <input
        ref={inputRef}
        type={inputType}
        value={inputValue}
        placeholder={inputPlaceHolder}
        onChange={onChangeCallBack}
        className={className}
      />
    </div>
  );
};

export default InputField;
