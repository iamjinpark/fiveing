function CustomInput({
  label,
  isError,
  error,
  placeholder,
  className = "",
  labelClassName = "",
  ...props
}) {
  return (
    <>
      {label && (
        <label
          className={`block text-tomato font-semibold pb-1 pl-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 bg-white rounded-lg placeholder:text-sm placeholder:gray-300 ${className} ${isError ? "border-warning border-2" : ""}`}
        autoComplete="off"
        placeholder={placeholder}
        {...props}
      />
      {isError && <p className="text-warning text-xs pt-1 pl-3">{error}</p>}
    </>
  );
}

export default CustomInput;
