import { Link } from "react-router";
import { IoIosBicycle } from "react-icons/io";
import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className="bg-[#1F3D2B] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex shrink-0 items-center gap-1 sm:gap-2">
              <IoIosBicycle
                size={28}
                className="text-white sm:h-[30px] sm:w-[30px]"
              />

              <h1 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                InstantMart
              </h1>
            </Link>

            <p className="mt-4 max-w-[280px] text-sm leading-6 text-gray-300">
              Bringing fresh, organic groceries straight from local farms to
              your doorstep. Nourish your home with Earth's finest.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
              <a href="/products" className="transition hover:text-white">
                All Products
              </a>

              <a href="/deals" className="transition hover:text-white">
                Flash Deals
              </a>

              <a href="/track-order" className="transition hover:text-white">
                Track Order
              </a>

              <a href="/delivery" className="transition hover:text-white">
                Delivery Partner
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Customer Service</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
              <a href="/account" className="transition hover:text-white">
                My Account
              </a>

              <a href="/orders" className="transition hover:text-white">
                Order History
              </a>

              <a href="/addresses" className="transition hover:text-white">
                Addresses
              </a>

              <a href="/help" className="transition hover:text-white">
                Help Center
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Contact Us</h3>

            <div className="mt-4 flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <LuMapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" />

                <span>123 Green Valley Rd, Portland</span>
              </div>

              <div className="flex items-center gap-3">
                <LuPhone className="h-5 w-5 shrink-0 text-white" />

                <span>+1 (111) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <LuMail className="h-5 w-5 shrink-0 text-white" />

                <span>hello@example.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 InstantMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
