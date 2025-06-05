import LandingHeader from "@/components/layout/LandingHeader";
import PopularColors from "@/components/ui/PopularColors";
import MoreProductsCard from "@/components/ui/MoreProductsCard";
import DownloadsCard from "@/components/ui/DownloadsCard";
import ListeningReleasedCard from "@/components/ui/ListeningReleasedCard";
import HeroSection from "@/components/ui/HeroSection";
import ProductSidebarCard from "@/components/ui/ProductSidebarCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <LandingHeader />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-4 py-4 w-full">
        <div className="flex flex-col gap-4">
          <HeroSection />
          <section className="grid grid-cols-1 md:grid-cols-6 gap-4 pb-8 items-stretch">
            <div className="md:col-span-2 h-full">
              <MoreProductsCard />
            </div>
            <div className="md:col-span-1 h-full">
              <DownloadsCard />
            </div>
            <div className="md:col-span-3 h-full">
              <ListeningReleasedCard />
            </div>
          </section>
        </div>
        <aside className=" grid grid-rows-6 gap-4">
          <div className="row-span-1">
            <PopularColors />
          </div>
          <div className="row-span-1">
            <ProductSidebarCard
              title="New Gen X-Bud"
              image="/assets/images/headphone-1.png"
              arrowPosition="bottom-left"
              showOverlay={false}
              className="h-full bg-white/60"
            />
          </div>
          <div className="row-span-3">
            <ProductSidebarCard
              title="Light Grey Surface Headphone"
              subtitle="Boosted with bass"
              image="/assets/images/vr-background.png"
              textAlign="bottom"
              className="h-full bg-gray-200"
            />
          </div>
        </aside>
      </main>
    </div>
  );
}
