import { FaApple, FaGooglePlay } from "react-icons/fa";
const DeliveryBanner = () => {
  return (
    <section className="bg-amber-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#1F3D2B]">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative z-10 flex min-h-[360px] items-center px-6 py-12 sm:px-10 lg:px-14">
            <div className="max-w-[570px]">
              <h2 className="mt-5 font-serif text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">
                Get fresh groceries in minutes
              </h2>
              <p className="mt-3 max-w-[520px] text-sm leading-6 text-gray-200 sm:text-base sm:leading-7">
                Download the InstantMart app for exclusive deals,
                real-time tracking, and the freshest selection
                delivered right to your door.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[54px] w-[165px] items-center justify-center gap-3 rounded-xl bg-white px-5 transition hover:bg-gray-100"
                >
                  <div className="text-center">
                    <p className="text-base font-bold leading-tight text-[#1F3D2B]">
                      App Store
                    </p>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[54px] w-[165px] items-center justify-center gap-3 rounded-xl border border-white/80 bg-white/5 px-4 transition hover:bg-white/15"
                >
                  <div className="text-center">
                    <p className="text-base font-bold leading-tight text-white">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <img
            src="/images/delivery_truck-BvY4lSkI.svg"
            alt="Fresh grocery delivery truck"
            loading="lazy"
            className="pointer-events-none absolute bottom-[-35px] right-[20px] hidden h-[390px] w-[500px] object-contain lg:block"
          />
        </div>
      </div>
    </section>
  );
};
export default DeliveryBanner;
