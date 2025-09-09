export default function AuthCard({ title, children, className = "" }) {
  return (
    <div
      className={`w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-6 ${className}`}
    >
      {title && (
        <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">
          {title}
        </h2>
      )}

      {children}

    </div>
  );
}
