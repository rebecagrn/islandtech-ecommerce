import Image from "next/image";
import HeartIcon from "@/components/ui/HeartIcon";
import { highlightedProducts } from "@/data/data";
import Link from "next/link";
import Card from "@/components/ui/Card";

export default function MoreProductsCard() {
  return (
    <Card className="p-4 flex flex-col">
      <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
        <HeartIcon className="text-[#F44336]" />
      </span>
      <div className="mb-2">
        <div className="font-normal text-gray-900 text-base leading-tight tracking-tight">
          More Products
        </div>
        <div className="text-xs text-gray-500 font-normal">460 plus items.</div>
      </div>
      <div className="flex gap-3 mt-4">
        {highlightedProducts.map((_, idx) => (
          <div
            key={idx}
            className="w-16 h-20 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-out"
          >
            <Image
              src={highlightedProducts[idx].image}
              alt={`Product ${idx + 1}`}
              width={64}
              height={80}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
