import { useState } from "react";
import AuthCard from "../components/AuthCard";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Toast from "../components/Toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock
    setSent(true);
    Toast.info("Reset link sent (mock). Check your inbox.");
  };

  return (
    <>

      <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
        <AuthCard title="Forgot Password">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextInput label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
              <Button type="submit" className="w-full">Send reset link</Button>
            </form>
          ) : (
            <p className="text-center text-slate-700">A reset link has been sent to your email (mock). <a href="/login" className="text-indigo-600">Back to login</a></p>
          )}
        </AuthCard>
      </div>
    </>
  );
}
