import { Link } from "react-router";
import {
  LuTruck,
  LuClock,
  LuShieldCheck,
} from "react-icons/lu";
import { BiLeaf } from "react-icons/bi";

const Hero = () => {
  const features = [
    {
      title: "Free Delivery",
      description: "Orders over $20",
      icon: LuTruck,
    },
    {
      title: "100% Organic",
      description: "Certified products",
      icon: BiLeaf,
    },
    {
      title: "Same Day",
      description: "Express delivery",
      icon: LuClock,
    },
    {
      title: "Secure Pay",
      description: "Safe checkout",
      icon: LuShieldCheck,
    },
  ];

  return (
    <main className="flex flex-col items-center bg-amber-50 px-4 pb-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative mt-8 h-[500px] w-full max-w-[1200px] overflow-hidden rounded-2xl sm:mt-10 sm:h-[520px] lg:mt-12 lg:h-[560px]">
        <img
          src="/images/hero_bg-iD2fuyEl.jpeg"
          alt="Fresh organic groceries"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Background overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.62) 25%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="absolute inset-y-0 left-5 right-5 z-10 flex items-center sm:left-10 sm:right-10 lg:left-14 lg:right-14">
          <div className="flex max-w-[600px] flex-col justify-center">
            <div className="w-fit rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-orange-300 backdrop-blur-sm sm:px-4">
              <div className="flex items-center gap-1.5">
                <BiLeaf className="size-4" />
                <span>Farm-Fresh & Organic</span>
              </div>
            </div>

            <h1 className="mt-5 font-serif text-3xl leading-tight text-white sm:mt-7 sm:text-5xl lg:text-6xl">
              Nourish your home with{" "}
              <span className="text-orange-400">
                Earth's finest
              </span>
            </h1>

            <p className="mt-4 max-w-[520px] text-sm leading-6 text-gray-100 sm:mt-5 sm:text-base sm:leading-7">
              Fresh, organic groceries delivered from local farms to
              your doorstep. Quality you can taste, convenience you
              deserve.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:gap-4">
              <Link
                to="/products"
                className="flex h-[49px] w-full items-center justify-center rounded-3xl bg-amber-500 px-6 text-sm font-semibold text-white transition hover:bg-amber-600 sm:w-[152px]"
              >
                Shop Now
              </Link>

              <Link
                to="/#categories"
                className="flex h-[49px] w-full items-center justify-center rounded-3xl border border-white/80 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-[194px]"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="mt-6 grid w-full max-w-[1200px] grid-cols-1 overflow-hidden rounded-xl bg-white sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`flex items-center gap-3 px-6 py-5 lg:px-5 ${
                index > 0
                  ? "border-t border-gray-100 sm:border-t-0"
                  : ""
              } ${
                index % 2 === 1
                  ? "sm:border-l sm:border-gray-100 lg:border-l-0"
                  : ""
              } ${
                index > 0 ? "lg:border-l lg:border-gray-100" : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                <Icon className="size-5 text-[#1F3D2B]" />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  {feature.title}
                </h2>

                <p className="text-sm text-[#6B7280]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Hero;