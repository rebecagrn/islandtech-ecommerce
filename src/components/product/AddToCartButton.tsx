"use client";

import { Product } from "@/data/data";
import { useAppStore } from "@/store/appStore";
import { ShoppingCartIcon } from "@/components/ui/icons/ShoppingCartIcon";

export const AddToCartButton = ({ product }: { product: Product }) => {
  const addToCart = useAppStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart({
      id: product.id.toString(),
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <button
      onClick={handleAdd}
      className="text-sm bg-gray-900 text-white px-4 py-3 rounded-full hover:bg-gray-700 transition flex items-center gap-2"
    >
      Add to Cart <ShoppingCartIcon />
    </button>
  );
};
