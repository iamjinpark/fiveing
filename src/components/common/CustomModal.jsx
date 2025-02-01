function CustomModal({ isOpen, onClose, children, size = "md", className = "" }) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "w-[320px] h-[200px]",
    md: "w-[320px] h-[490px]",
    lg: "w-[320px] h-[530px]",
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className={`bg-white rounded-2xl transform transition-all duration-300 ${sizeClasses[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}

export default CustomModal;
