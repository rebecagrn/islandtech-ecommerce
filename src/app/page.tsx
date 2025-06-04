import LandingHeader from "@/components/layout/LandingHeader";
import ArrowTopRightIcon from "@/components/ui/ArrowTopRightIcon";
import PopularColors from "@/components/ui/PopularColors";
import SocialLinks from "@/components/ui/SocialLinks";
import MoreProductsCard from "@/components/ui/MoreProductsCard";
import DownloadsCard from "@/components/ui/DownloadsCard";
import ListeningReleasedCard from "@/components/ui/ListeningReleasedCard";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <main className="flex-1 flex flex-col lg:flex-row gap-4 py-4 w-full">
        <div className="flex flex-col gap-6 lg:w-4/5">
          <HeroSection />
          <section className="flex flex-col md:flex-row gap-4 pb-8 lg:w-4/5">
            <MoreProductsCard />
            <DownloadsCard />
            <ListeningReleasedCard />
          </section>
        </div>

        {/* Right: Sidebar */}
        <aside className="w-full lg:w-1/5 flex flex-col gap-6">
          <PopularColors />
          {/* Product Cards */}
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 mb-2">
            <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">New Gen X-Bud</div>
            </div>
            <button className="bg-gray-100 p-2 rounded-full">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">
                Light Grey Surface Headphone
              </div>
              <div className="text-xs text-gray-500">Boosted with bass</div>
            </div>
            <button className="bg-gray-100 p-2 rounded-full">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
