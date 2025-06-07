import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <Logo />
          </div>
          <p className="text-gray-600 text-sm mb-4 max-w-xs font-medium">
            IslandTech is your modern and conceptual e-commerce platform for the
            latest in tech, design, and user experience.
          </p>
          <p className="text-xs text-gray-600 font-medium">
            Created by{" "}
            <Link
              href="https://rebecadeveloper.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 font-medium hover:underline"
            >
              rebeca
            </Link>{" "}
            © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex-row flex-1 justify-end gap-6 sm:gap-12 items-center hidden md:flex">
          <div>
            <h4 className="font-semibold mb-2 text-gray-900 text-left">
              Pages
            </h4>
            <ul className="space-y-1 text-gray-600 text-sm font-medium text-left">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-900 text-left">
              Information
            </h4>
            <ul className="space-y-1 text-gray-600 text-sm font-medium text-left">
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
