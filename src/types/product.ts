export interface ProductSpecifications {
  screen?: string;
  processor?: string;
  ram?: string;
  storage?: string;
  battery?: string;
  weight?: string;
  waterproof?: string;
  sensors?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  specifications: ProductSpecifications;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface ProductData {
  products: Product[];
  categories: Category[];
} 