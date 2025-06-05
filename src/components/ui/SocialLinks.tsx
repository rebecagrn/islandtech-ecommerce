import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTiktok,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const socials = [
  { icon: faTwitter, label: "Twitter" },
  { icon: faTiktok, label: "TikTok" },
  { icon: faInstagram, label: "Instagram" },
  { icon: faLinkedin, label: "LinkedIn" },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3 mt-8">
      <span className="text-gray-500 text-sm font-normal tracking-tight mr-2">
        Follow us on:
      </span>
      {socials.map(({ icon, label }) => (
        <Link
          key={label}
          href="#"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-500 hover:text-lime-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-200"
          aria-label={label}
        >
          <FontAwesomeIcon icon={icon} className="w-4 h-4" />
        </Link>
      ))}
    </div>
  );
}
