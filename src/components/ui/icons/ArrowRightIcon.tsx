export default function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-chevron-right-icon lucide-chevron-right ${className}`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
