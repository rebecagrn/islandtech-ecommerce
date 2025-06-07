import { products } from "@/data/data";
import LandingHeader from "@/components/layout/LandingHeader";
import ProductSidebarCard from "@/components/ui/ProductSidebarCard";
import PopularColorsCard from "@/components/ui/PopularColorsCard";
import MoreProductsCard from "@/components/ui/MoreProductsCard";
import DownloadsCard from "@/components/ui/DownloadsCard";
import ListeningReleasedCard from "@/components/ui/ListeningReleasedCard";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto">
      <LandingHeader />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[4fr_1fr] gap-3 lg:gap-4 py-4 w-full">
        <div className="flex flex-col gap-4">
          <HeroSection />
          <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 xl:pb-8 items-stretch">
            <div className="col-span-2 h-full">
              <MoreProductsCard />
            </div>
            <div className="col-span-1 xl:col-span-2 2xl:col-span-1 h-full">
              <DownloadsCard />
            </div>
            <div className="col-span-3 xl:col-span-2 2xl:col-span-3 h-full">
              <ListeningReleasedCard />
            </div>
          </section>
        </div>
        <aside className="grid grid-rows-3 md:grid-rows-6 gap-4 md:col-span-1">
          <div className="row-span-1">
            <PopularColorsCard />
          </div>
          {products.slice(0, 2).map((product, idx) => (
            <div
              className={
                idx === 0
                  ? "row-span-1 col-span-2 lg:col-span-full"
                  : "row-span-3 col-span-3 lg:col-span-full"
              }
              key={product.id}
            >
              <ProductSidebarCard
                id={product.id}
                title={product.title}
                subtitle={product.subtitle}
                image={product.images[0]}
                arrowPosition={idx === 0 ? "bottom-left" : undefined}
                showOverlay={idx !== 0}
                textAlign={idx === 1 ? "bottom" : undefined}
                className={
                  idx === 0 ? "h-full bg-white/60" : "h-full bg-gray-200"
                }
              />
            </div>
          ))}
        </aside>
      </main>
    </div>
  );
}
