import { notFound } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types/product";
import productData from "@/mocks/data.json";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productData.products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative h-24 rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${product.name} - Imagem ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>
          </div>

          <p className="text-2xl font-bold text-gray-900">
            R${" "}
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </p>

          <p className="text-gray-600">{product.description}</p>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Especificações</h2>
            <dl className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-sm font-medium text-gray-500 capitalize">
                    {key}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
