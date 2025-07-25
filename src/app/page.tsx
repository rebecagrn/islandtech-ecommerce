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
    <>
      <LandingHeader />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[4fr_1fr] gap-3 lg:gap-4 py-4 w-full">
        <div className="flex flex-col gap-4">
          <HeroSection />
          <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 items-stretch">
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
        <aside className="flex flex-col gap-4 h-full min-h-0">
          <div>
            <PopularColorsCard />
          </div>
          {products.slice(0, 2).map((product, idx) => (
            <div
              key={product.id}
              className={
                idx === 1
                  ? "flex-1 flex flex-col min-h-[300px] lg:min-h-0 max-h-[425px]"
                  : "min-h-[300px] lg:min-h-[160px]"
              }
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
    </>
  );
}
