import LandingHeader from "@/components/layout/LandingHeader";
import PopularColors from "@/components/ui/PopularColors";
import MoreProductsCard from "@/components/ui/MoreProductsCard";
import DownloadsCard from "@/components/ui/DownloadsCard";
import ListeningReleasedCard from "@/components/ui/ListeningReleasedCard";
import HeroSection from "@/components/ui/HeroSection";
import ProductSidebarCard from "@/components/ui/ProductSidebarCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <main className="flex-1 flex flex-col lg:flex-row gap-4 py-4 w-full">
        <div className="flex flex-col gap-4 lg:w-4/5">
          <HeroSection />
          <section className="flex flex-col md:flex-row gap-4 pb-8 lg:w-4/5">
            <MoreProductsCard />
            <DownloadsCard />
            <ListeningReleasedCard />
          </section>
        </div>

        {/* Right: Sidebar */}
        <aside className="w-full lg:w-1/5 flex flex-col gap-4">
          <PopularColors />
          <ProductSidebarCard
            title="New Gen X-Bud"
            image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=400&q=80"
            arrowPosition="bottom-left"
          />
          <ProductSidebarCard
            title="Light Grey Surface Headphone"
            subtitle="Boosted with bass"
            image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80"
            textAlign="bottom"
            // className="h-[330px]"
          />
        </aside>
      </main>
    </div>
  );
}
