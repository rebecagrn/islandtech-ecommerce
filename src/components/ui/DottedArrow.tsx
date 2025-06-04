interface DottedArrowProps {
  className?: string;
}

export default function DottedArrow({ className }: DottedArrowProps) {
  return (
    <svg
      width="120"
      height="24"
      className="mx-2"
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="12"
        x2="110"
        y2="12"
        stroke="#bbb"
        strokeDasharray="2 4"
        strokeWidth="2"
      />
      <polygon points="110,6 120,12 110,18" fill="#bbb" />
    </svg>
  );
}
