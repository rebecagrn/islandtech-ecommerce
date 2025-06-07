import { products } from "@/data/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowLeftIcon from "@/components/ui/icons/ArrowLeftIcon";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return notFound();

  return (
    <>
      <div className="w-full min-h-screen overflow-auto flex justify-center items-start">
        <ProductCard product={product} />
      </div>
      <Footer />
    </>
  );
}
