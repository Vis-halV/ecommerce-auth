import { useState } from "react";
import AuthCard from "../components/AuthCard";
import TextInput from "../components/TextInput";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import Button from "../components/Button";
import Toast from "../components/Toast";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock check for reuse not implemented fully — just show success
    setConfirmed(true);
    Toast.success("Password reset successful (mock).");
  };

  return (
    <>

      <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
        <AuthCard title="Reset Password">
          {!confirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextInput label="New Password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" required withToggle showPassword={false} setShowPassword={() => {}} />
              <PasswordStrengthMeter password={password} />
              <Button type="submit" className="w-full">Set new password</Button>
            </form>
          ) : (
            <p className="text-center text-slate-700">Password updated. <a href="/login" className="text-indigo-600">Login</a></p>
          )}
        </AuthCard>
      </div>
    </>
  );
}
