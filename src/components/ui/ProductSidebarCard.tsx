import Image from "next/image";
import ArrowTopRightIcon from "@/components/ui/ArrowTopRightIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductSidebarCardProps {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  className?: string;
  arrowPosition?: "top-right" | "bottom-left";
  textAlign?: "bottom" | "default";
  showOverlay?: boolean;
}

export default function ProductSidebarCard({
  id,
  title,
  subtitle,
  image,
  className = "",
  arrowPosition = "top-right",
  textAlign = "default",
  showOverlay = true,
}: ProductSidebarCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className={cn(
        "relative rounded-3xl flex flex-col justify-between overflow-hidden min-h-[120px] md:min-h-full transition-transform duration-300 ease-out hover:shadow-md p-3 md:p-4",
        className
      )}
    >
      {arrowPosition === "top-right" ? (
        <span className="absolute top-2 right-2 z-20">
          <ArrowTopRightIcon variant="secondary" />
        </span>
      ) : (
        <span className="absolute bottom-2 left-2 z-20">
          <ArrowTopRightIcon variant="secondary" />
        </span>
      )}
      <div className="absolute inset-0 flex items-end justify-end z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-right rounded-3xl min-w-[180px] h-auto"
          loading="lazy"
        />
        {showOverlay && (
          <div className="absolute inset-x-0 bottom-0 pointer-events-none bg-gradient-to-t from-white via-white/70 to-transparent h-[40%]" />
        )}
      </div>
      <div
        className={cn(
          "relative z-10 flex flex-col h-full",
          textAlign === "bottom" ? "justify-end" : "justify-between"
        )}
      >
        <div>
          <h3 className="font-normal text-gray-900 text-base md:text-lg md:leading-5 mb-1 tracking-tight">
            {title}
          </h3>
        </div>
        {subtitle && (
          <div className="text-xs text-gray-600 font-normal leading-tight">
            {subtitle}
          </div>
        )}
      </div>
    </Link>
  );
}
