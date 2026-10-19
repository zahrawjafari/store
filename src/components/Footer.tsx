import { Link } from "react-router";
import { IoIosBicycle } from "react-icons/io";
import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#1F3D2B] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex shrink-0 items-center gap-2"
              aria-label="InstantMart home"
            >
              <IoIosBicycle className="h-8 w-8 text-white" />

              <span className="text-xl font-bold">
                InstantMart
              </span>
            </Link>

            <p className="mt-4 max-w-[280px] text-sm leading-6 text-gray-300">
              Bringing fresh, organic groceries straight from local farms
              to your doorstep. Nourish your home with Earth's finest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold">
              Quick Links
            </h3>

            <nav className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
              <Link to="/products" className="transition hover:text-white">
                All Products
              </Link>

              <Link to="/products" className="transition hover:text-white">
                Flash Deals
              </Link>

              <Link to="/cart" className="transition hover:text-white">
                My Cart
              </Link>

              <Link to="/favorites" className="transition hover:text-white">
                Favorites
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base font-semibold">
              Customer Service
            </h3>

            <nav className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
              <Link to="/signin" className="transition hover:text-white">
                My Account
              </Link>

              <Link to="/cart" className="transition hover:text-white">
                Order History
              </Link>

              <Link to="/signup" className="transition hover:text-white">
                Create Account
              </Link>

              <a href="mailto:hello@example.com" className="transition hover:text-white">
                Help Center
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold">
              Contact Us
            </h3>

            <div className="mt-4 flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <LuMapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" />

                <span>
                  123 Green Valley Rd, Portland
                </span>
              </div>

              <a
                href="tel:+11111234567"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <LuPhone className="h-5 w-5 shrink-0 text-white" />
                <span>+1 (111) 123-4567</span>
              </a>

              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <LuMail className="h-5 w-5 shrink-0 text-white" />
                <span>hello@example.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} InstantMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;