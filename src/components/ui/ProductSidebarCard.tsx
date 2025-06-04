import Image from "next/image";
import ArrowTopRightIcon from "@/components/ui/ArrowTopRightIcon";

interface ProductSidebarCardProps {
  title: string;
  subtitle?: string;
  image: string;
  className?: string;
  arrowPosition?: "top-right" | "bottom-left";
  textAlign?: "bottom" | "default";
}

export default function ProductSidebarCard({
  title,
  subtitle,
  image,
  className = "",
  arrowPosition = "top-right",
  textAlign = "default",
}: ProductSidebarCardProps) {
  return (
    <div
      className={`relative bg-white rounded-3xl flex flex-col justify-between overflow-hidden ${className}`}
      style={{ minHeight: 220 }}
    >
      {arrowPosition === "top-right" ? (
        <div className="absolute top-2 right-2 z-20">
          <ArrowTopRightIcon variant="secondary" />
        </div>
      ) : (
        <div className="absolute bottom-2 left-2 z-20">
          <ArrowTopRightIcon variant="secondary" />
        </div>
      )}
      <div className="absolute inset-0 flex items-end justify-end z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-right rounded-3xl"
          style={{ minWidth: 180 }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" /> */}
      </div>
      <div
        className={`relative z-10 p-4 flex flex-col h-full ${
          textAlign === "bottom" ? "justify-end" : "justify-between"
        }`}
      >
        <div>
          <div className="font-medium text-gray-900 text-lg leading-5 mb-1">
            {title}
          </div>
        </div>
        {subtitle && (
          <div className={`text-xs text-gray-600 font-normal leading-tight`}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
