import LandingHeader from "@/components/layout/LandingHeader";
import ArrowTopRightIcon from "@/components/ui/ArrowTopRightIcon";
import PopularColors from "@/components/ui/PopularColors";
import SocialLinks from "@/components/ui/SocialLinks";
import MoreProductsCard from "@/components/ui/MoreProductsCard";
import DownloadsCard from "@/components/ui/DownloadsCard";
import ListeningReleasedCard from "@/components/ui/ListeningReleasedCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row gap-8 py-8">
        <div className="flex flex-col gap-6">
          {/* Left: Hero Section */}
          <section className="flex-1 bg-white/60 rounded-3xl p-8 flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                  Music is Classic
                </span>
              </div>
              <h1 className="text-5xl text-gray-900 mb-2 leading-tight">
                Sequoia Inspiring Musico.
              </h1>
              <div className="text-lg text-gray-700 mb-6">Clear Sounds</div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-bold text-gray-300">01</span>
                <span className="text-gray-500">
                  Making your dream music come true stay with Sequios Sounds!
                </span>
              </div>
              <button className="flex items-center bg-lime-200 hover:bg-lime-400 text-black font-medium pl-4 pr-1 py-1 rounded-full text-sm transition">
                <span className="pr-2">View All Products</span>
                <ArrowTopRightIcon />
              </button>
            </div>
            <SocialLinks />
          </section>

          {/* Bottom Cards */}
          <section className="flex flex-col md:flex-row gap-4 pb-8">
            <MoreProductsCard />
            <DownloadsCard />
            <ListeningReleasedCard />
          </section>
        </div>

        {/* Right: Sidebar */}
        <aside className="w-full lg:w-64 flex flex-col gap-6">
          {/* Popular Colors */}
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
