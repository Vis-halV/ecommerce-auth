export default function Loader({ size = "md" }) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-4",
  };

  return (
    <div
      className={`animate-spin rounded-full border-t-transparent border-red-500 mx-auto ${sizeClasses[size]}`}
    ></div>
  );
}
