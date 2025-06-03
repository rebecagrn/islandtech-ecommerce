import * as React from "react";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
}

export function Switch({
  checked,
  onCheckedChange,
  label,
  ...props
}: SwitchProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <span className="text-sm font-medium">{label}</span>
      <span className="relative inline-block w-10 h-6">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0 peer"
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          {...props}
        />
        <span className="absolute left-0 top-0 h-6 w-10 rounded-full bg-gray-300 peer-checked:bg-letsplay-red transition" />
        <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow peer-checked:translate-x-4 transition" />
      </span>
    </label>
  );
}
