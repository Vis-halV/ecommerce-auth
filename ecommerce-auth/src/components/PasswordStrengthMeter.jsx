import React from "react";

function scorePassword(pw) {
  let score = 0;
  if (!pw) return 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

function PasswordStrengthMeter({ password }) {
  const score = scorePassword(password);
  const labels = ["Very weak", "Weak", "Okay", "Strong", "Very strong"];
  const colors = ["bg-rose-500", "bg-rose-400", "bg-amber-400", "bg-emerald-400", "bg-emerald-500"];

  return (
    <div>
      <div className="h-2 bg-slate-100 rounded overflow-hidden mb-2">
        <div className={`${colors[Math.min(score, 4)]} h-full`} style={{ width: `${(score / 4) * 100}%` }} />
      </div>
      <p className="text-sm text-slate-600">{labels[score]}</p>
      <ul className="hidden mt-2 text-xs text-slate-500 space-y-1">
        <li>Minimum 8 characters</li>
        <li>Include uppercase letter</li>
        <li>Include number</li>
        <li>Include special character</li>
      </ul>
    </div>
  );
}

export default PasswordStrengthMeter;