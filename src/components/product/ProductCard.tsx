import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/data";
import Card from "@/components/shared/Card";
import ArrowLeftIcon from "@/components/ui/icons/ArrowLeftIcon";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="max-w-3xl w-full p-8 my-4 mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-8 text-sm px-4 py-2 rounded-full bg-gray-900 hover:bg-gray-700 transition font-medium text-white"
      >
        <span className="w-5 h-5 flex items-center justify-center">
          <ArrowLeftIcon />
        </span>
        Back
      </Link>
      <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 leading-tight tracking-tight">
        {product.title}
      </h1>
      {product.subtitle && (
        <h2 className="text-lg text-gray-600 mb-6 font-normal">
          {product.subtitle}
        </h2>
      )}
      <div className="rounded-2xl overflow-hidden mb-8 bg-gray-100">
        <Image
          src={product.images[1]}
          alt={product.title}
          width={800}
          height={500}
          className="w-full h-[340px] md:h-[420px] object-cover bg-white"
          priority
        />
      </div>
      <div className="flex items-center gap-6 mb-6">
        <span className="text-2xl font-semibold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        <span className="flex items-center gap-1 text-yellow-500 font-medium text-base">
          ★ {product.rating}
        </span>
        <span className="text-gray-500 text-sm">
          ({product.reviews} reviews)
        </span>
      </div>
      <p className="text-gray-700 text-base mb-2 max-w-2xl">
        {product.description}
      </p>
    </Card>
  );
}
