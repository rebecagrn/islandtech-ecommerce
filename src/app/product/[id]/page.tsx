import { products } from "@/data/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import LandingHeader from "@/components/layout/LandingHeader";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return notFound();

  return (
    <>
      <LandingHeader />
      <div className="w-full min-h-screen overflow-auto flex justify-center items-start pt-16">
        <ProductCard product={product} />
      </div>
      <Footer />
    </>
  );
}
