function CustomInput({
  label,
  isError,
  error,
  placeholder,
  className = "",
  ...props
}) {
  return (
    <div className="w-[320px] h-[40px] flex flex-col">
      {label && (
        <label className="block text-tomato font-bold pb-1 pl-1">{label}</label>
      )}
      <input
        className={`w-full px-3 py-2 bg-white rounded-lg placeholder:text-sm placeholder:gray-300 ${className} ${isError ? "border-warning border-2" : ""}`}
        autoComplete="off"
        placeholder={placeholder}
        {...props}
      />
      {isError && <p className="text-warning text-xs pt-1 pl-3">{error}</p>}
    </div>
  );
}

export default CustomInput;
