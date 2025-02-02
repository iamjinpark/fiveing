function CustomButton({
  children,
  variant = "tomato",
  size = "lg",
  className = "",
  disabled,
  ...props
}) {
  const baseStyles = "rounded-lg font-bold transition duration-300";

  const variantStyles = {
    tomato: "bg-tomato text-beige hover:bg-dark-tomato",
    beige: "bg-beige text-tomato hover:bg-dark-tomato hover:text-beige",
    outline:
      "bg-beige text-tomato border-[#AC0000] border-2 hover:bg-dark-tomato hover:text-beige",
    white:
      "bg-white text-tomato border-[#AC0000] border-2 hover:bg-dark-tomato hover:text-white", // 모달용
  };

  const sizeStyles = {
    sm: "w-[80px] h-[40px]",
    md: "w-[120px] h-[40px]",
    lg: "w-[320px] h-[40px]",
    levelup: "w-[320px] h-[50px]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.tomato} ${sizeStyles[size] || sizeStyles.lg} ${
        disabled ? "opacity-50 cursor-not-allowed" : " cursor-pointer"
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
