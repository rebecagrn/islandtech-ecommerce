import Image from "next/image";
import HeartIcon from "@/components/ui/HeartIcon";

const productImages = [
  "/assets/images/product-1.jpg",
  "/assets/images/product-2.jpg",
  "/assets/images/product-3.jpg",
];

export default function MoreProductsCard() {
  return (
    <div className="relative bg-white rounded-3xl p-4 flex flex-col min-w-[260px] min-h-[140px]">
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
        {productImages.map((src, idx) => (
          <div
            key={idx}
            className="w-16 h-20 rounded-[20px] overflow-hidden bg-gray-100 flex items-center justify-center"
          >
            <Image
              src={productImages[idx]}
              alt={`Product ${idx + 1}`}
              width={64}
              height={80}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
