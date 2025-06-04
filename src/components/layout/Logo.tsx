import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
        <span className="font-normal text-lg text-gray-900 tracking-tight flex items-center">
          <span className="inline-block w-8 h-8 mr-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#222" />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                fill="#fff"
                fontSize="16"
                fontWeight="semibold"
                dy=".2em"
              >
                N
              </text>
            </svg>
          </span>
          nitec.
        </span>
      </div>
    </Link>
  );
}
