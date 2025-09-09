import React, { useRef } from "react";

function OTPInput({ length = 6, value = "", onChange }) {
  const refs = useRef([]);

  const handleChange = (idx, v) => {
    if (!/^[0-9]$/.test(v) && v !== "") return;
    const arr = value.split("").slice(0, length);
    arr[idx] = v;
    const newVal = arr.join("").padEnd(length, "");
    onChange(newVal.slice(0, length));
    if (v && refs.current[idx + 1]) refs.current[idx + 1].focus();
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          value={value[i] || ""}
          onChange={(e) => handleChange(i, e.target.value)}
          className="w-10 h-10 text-center border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          inputMode="numeric"
        />
      ))}
    </div>
  );
}

export default OTPInput;