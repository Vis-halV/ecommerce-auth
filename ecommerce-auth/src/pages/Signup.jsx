import { useState } from "react";
import AuthCard from "../components/AuthCard";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import OTPInput from "../components/OTPInput";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import Toast from "../components/Toast";

function Signup() {
  const [step, setStep] = useState("form"); // form -> otp -> done
  const [form, setForm] = useState({ email: "", phone: "", password: "" });
  const [otp, setOtp] = useState("");

  const sendOtp = () => {
    // Mock sending OTP
    Toast.info("OTP sent (mock). Use 123456 to verify.");
    setStep("otp");
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      Toast.success("Verified. Account created.");
      setStep("done");
    } else {
      Toast.error("Invalid OTP");
    }
  };

  return (
    <>

      <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
        <AuthCard title="Sign Up">
          {step === "form" && (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); sendOtp(); }}>
              <TextInput label="Email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required />
              <TextInput label="Phone (optional)" name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91..." />
              <TextInput label="Password" name="password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Strong password" required withToggle showPassword={false} setShowPassword={() => {}} />
              <PasswordStrengthMeter password={form.password} />
              <Button type="submit" className="w-full">Create account</Button>
            </form>
          )}

          {step === "otp" && (
            <>
              <p className="text-sm text-slate-600 mb-4">Enter the OTP sent to your email/phone (mock).</p>
              <OTPInput value={otp} onChange={setOtp} />
              <div className="mt-4 flex gap-2">
                <Button variant="primary" onClick={verifyOtp}>Verify</Button>
                <Button variant="outline" onClick={() => { setStep("form"); Toast.info("Resend OTP (mock)."); }}>Resend</Button>
              </div>
            </>
          )}

          {step === "done" && <p className="text-center text-green-600">Account created. <a href="/login" className="text-indigo-600">Login</a></p>}
        </AuthCard>
      </div>
    </>
  );
}

export default Signup;