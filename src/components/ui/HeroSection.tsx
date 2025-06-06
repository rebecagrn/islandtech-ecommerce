import SocialLinks from "@/components/ui/SocialLinks";
import DottedArrow from "@/components/ui/DottedArrow";
import HeroSlider from "@/components/ui/HeroSlider";
import ViewProductsButton from "@/components/ui/ViewProductsButton";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-white/60 rounded-3xl p-8 gap-4 transition-transform duration-300 ease-out hover:shadow-md">
      <div className="flex-1 flex flex-col justify-between max-w-xl">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="inline-flex items-center bg-white text-gray-500 text-xs font-medium px-3 py-2 rounded-full">
              <span className="text-xs">🎛️</span>
              <span>Music is Classic</span>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl text-gray-900 mb-2 lg:mt-4 leading-tight font-normal max-w-full lg:max-w-lg tracking-tight">
            Sequoia Inspiring Musico.
          </h1>
          <div className="flex items-center mb-8 mt-6">
            <div className="mt-2 flex items-center">
              <span
                className="text-5xl font-bold text-transparent leading-none mr-2"
                style={{ WebkitTextStroke: "2px #bbb", color: "transparent" }}
              >
                01
              </span>
              <DottedArrow />
            </div>
            <div className="flex flex-col ml-2 gap-2">
              <span className="text-lg font-normal text-gray-900 leading-tight tracking-tight">
                Clear Sounds
              </span>
              <span className="text-gray-500 text-sm font-normal -mt-1 max-w-72 leading-4">
                Making your dream music come true stay with Sequios Sounds!
              </span>
            </div>
          </div>
          <ViewProductsButton />
        </div>
        <SocialLinks />
      </div>
      <div className="flex-1 items-center justify-center min-w-[340px] md:block hidden">
        <HeroSlider />
      </div>
    </section>
  );
}
