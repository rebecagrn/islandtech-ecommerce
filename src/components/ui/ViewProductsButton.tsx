import ArrowTopRightIcon from "@/components/ui/icons/ArrowTopRightIcon";

export default function ViewProductsButton() {
  return (
    <button className="flex items-center bg-lime-200 hover:bg-lime-400 text-black font-medium pl-4 pr-1 py-1 rounded-full text-sm transition">
      <span className="pr-2">View All Products</span>
      <ArrowTopRightIcon />
    </button>
  );
}
