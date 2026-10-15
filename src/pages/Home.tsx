
import { BiLeaf } from "react-icons/bi";
const Home = () => {
  return (
    <main className="min-h-screen bg-amber-50 px-4 pt-4 sm:px-6 lg:px-10">
      <section className="relative mx-auto h-[500px] w-full max-w-[1200px] overflow-hidden rounded-2xl sm:h-[520px] lg:h-[560px]">
        <img
          src="/images/hero_bg-iD2fuyEl.jpeg"
          alt="Fresh organic groceries"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent sm:hidden" />
        <div className="absolute inset-y-0 left-5 right-5 z-10 flex items-center sm:left-10 sm:right-10 lg:left-14 lg:right-14">
          <div className="flex max-w-[600px] flex-col justify-center">
            <div className="w-fit rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-orange-300 backdrop-blur-sm sm:px-4">
              <div className="flex items-center gap-1.5">
                <BiLeaf className="size-4" />
                <span>Farm-Fresh & Organic</span>
              </div>
            </div>
            <h1 className="mt-5 font-serif text-2xl font-semibold leading-tight text-white sm:mt-7 sm:text-5xl lg:text-5xl">
              Nourish your home with{" "}
              <span className="text-orange-400">Earth&apos;s finest</span>
            </h1>

            <p className="mt-4 max-w-[520px] text-sm leading-6 text-gray-100 sm:mt-5 sm:text-base sm:leading-7">
              Fresh, organic groceries delivered from local farms to your
              doorstep. Quality you can taste, convenience you deserve.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:gap-4">
              <button
                type="button"
                className="h-[49px] w-full rounded-3xl bg-amber-500 px-6 text-sm font-semibold text-white transition hover:bg-amber-600 sm:w-[152px]"
              >
                Shop Now
              </button>

              <button
                type="button"
                className="h-[49px] w-full rounded-3xl border border-white/80 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-[194px]"
              >
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;