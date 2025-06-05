import Image from "next/image";
import HeartIcon from "@/components/ui/HeartIcon";

const productImages = [
  "/assets/images/box-1.jpeg",
  "/assets/images/airpods-pro.jpg",
  "/assets/images/woman-vr.jpeg",
];

export default function MoreProductsCard() {
  return (
    <div className="relative bg-white/60 rounded-3xl p-4 flex flex-col h-full">
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
        {productImages.map((_, idx) => (
          <div
            key={idx}
            className="w-16 h-20 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center"
          >
            <Image
              src={productImages[idx]}
              alt={`Product ${idx + 1}`}
              width={64}
              height={80}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
