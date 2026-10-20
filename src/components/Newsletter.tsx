import { LuMail } from "react-icons/lu";
const Newsletter = () => {
  return (
    <section className="bg-amber-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
            <LuMail className="h-7 w-7 text-[#1F3D2B]" />
          </div>
          <h2 className="mt-5 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-3 max-w-[600px] text-sm leading-6 text-gray-500 sm:text-base">
            Get weekly updates on fresh produce, seasonal offers, and exclusive
            discounts right to your inbox.
          </p>
          <div className="mt-7 flex w-full max-w-[600px] flex-col gap-3 sm:flex-row">
            <div className="flex h-12 flex-1 items-center rounded-full border border-gray-200 bg-gray-50 px-5 transition focus-within:border-[#1F3D2B] focus-within:bg-white">
              <LuMail className="mr-3 h-5 w-5 shrink-0 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-full w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"/>
            </div>
            <button
              type="button"
              className="h-12 rounded-full bg-[#1F3D2B] px-8 text-sm font-semibold text-white transition duration-300 hover:bg-[#163021] sm:w-[140px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
