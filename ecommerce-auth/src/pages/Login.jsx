import { useState } from "react";
import AuthCard from "../components/AuthCard";
import TextInput from "../components/TextInput";
import Toast from "../components/Toast";
import Loader from "../components/Loader";

export default function Login() {
  const [form, setForm] = useState({ emailOrPhone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (
        form.emailOrPhone === "test@test.com" &&
        form.password === "Password123"
      ) {
        Toast.success("Login successful 🎉");
      } else {
        Toast.error("Invalid credentials ❌");
      }
    }, 1200);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-900 px-4">
      <AuthCard title="Login" className="bg-white border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-5">

          <TextInput
            label="Email or Phone"
            name="emailOrPhone"
            value={form.emailOrPhone}
            onChange={handleChange}
            placeholder="Enter your email or phone"
            required
            labelClass="text-gray-700"
            inputClass="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <TextInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            withToggle
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            labelClass="text-gray-700"
            inputClass="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 border-gray-300 rounded accent-indigo-600 focus:ring-indigo-500"
              />
              <span>Remember me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? <Loader size="sm" /> : "Login"}
          </button>
        </form>
 
        <p className="mt-4 text-center text-sm text-gray-700">
          New user?{" "}
          <a
            href="/signup"
            className="text-emerald-500 hover:text-emerald-700 font-medium"
          >
            Sign Up
          </a>
        </p>
      </AuthCard>
      <Toast.Container />
    </div>
  );
}
