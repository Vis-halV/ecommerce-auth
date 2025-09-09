export default function TextInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
  withToggle,
  showPassword,
  setShowPassword,
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {withToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
