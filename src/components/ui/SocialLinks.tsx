import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTiktok,
  faInstagram,
  faLinkedinIn,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3 mt-8">
      <span className="text-gray-500 text-sm font-normal tracking-tight mr-2">
        Follow us on:
      </span>
      <Link
        href="#"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} className="text-gray-500 w-4 h-4" />
      </Link>
      <Link
        href="#"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
        aria-label="TikTok"
      >
        <FontAwesomeIcon icon={faTiktok} className="text-gray-500 w-4 h-4" />
      </Link>
      <Link
        href="#"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-gray-500 w-4 h-4" />
      </Link>
      <Link
        href="#"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 w-4 h-4" />
      </Link>
    </div>
  );
}
