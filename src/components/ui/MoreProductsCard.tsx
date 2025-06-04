import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const productImages = [
  "/placeholder1.png",
  "/placeholder2.png",
  "/placeholder3.png",
];

export default function MoreProductsCard() {
  return (
    <div className="relative bg-white rounded-3xl p-4 flex flex-col min-w-[260px] min-h-[140px]">
      {/* Heart icon */}
      <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
        {/* <FontAwesomeIcon icon={faHeart} className="text-red-500 w-5 h-5" /> */}
      </span>
      <div className="mb-2">
        <div className="font-normal text-gray-900 text-base leading-tight">
          More Products
        </div>
        <div className="text-xs text-gray-500 font-normal">460 plus items.</div>
      </div>
      <div className="flex gap-3 mt-4">
        {productImages.map((src, idx) => (
          <div
            key={idx}
            className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Product ${idx + 1}`}
              width={64}
              height={74}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
