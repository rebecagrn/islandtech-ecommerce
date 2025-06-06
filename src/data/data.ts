export type Product = {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  popular?: boolean;
};

export type HighlightedProduct = {
  id: number;
  title: string;
  image: string;
  popular?: boolean;
};

export type Avatar = string;

export type PopularColor = {
  color: string;
  gradient: string;
};

export const highlightedProducts: HighlightedProduct[] = [
  {
    id: 1,
    title: "Box with Light",
    image: "/assets/images/box-1.jpeg",
    popular: true,
  },
  {
    id: 2,
    title: "Airpods Pro",
    image: "/assets/images/airpods-pro.jpg",
    popular: true,
  },
  {
    id: 3,
    title: "VR",
    image: "/assets/images/woman-vr.jpeg",
    popular: true,
  },
];

export const products: Product[] = [
  {
    id: 1,
    title: "New Gen X-Bud",
    image: "/assets/images/airpods-pro.jpg",
    popular: true,
  },
  {
    id: 2,
    title: "Light Grey Surface Headphone",
    subtitle: "Boosted with bass",
    image: "/assets/images/woman-vr-2.png",
    popular: false,
  },
];

export const avatars: Avatar[] = [
  "/assets/images/avatar1.png",
  "/assets/images/avatar2.png",
  "/assets/images/avatar3.png",
];

export const popularColors: PopularColor[] = [
  { color: "#60A5FA", gradient: "bg-gradient-to-br from-blue-300 to-blue-800" },
  { color: "#FBBF24", gradient: "bg-gradient-to-br from-orange-300 to-orange-600" },
  { color: "#34D399", gradient: "bg-gradient-to-br from-green-300 to-green-700" },
  { color: "#F87171", gradient: "bg-gradient-to-br from-red-300 to-red-600" },
  { color: "#38BDF8", gradient: "bg-gradient-to-br from-sky-300 to-sky-600" },
];