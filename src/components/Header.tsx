import { useEffect, useState } from "react";
import { Link } from "react-router";
import { IoIosBicycle } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
type HeaderProps = {
  cartCount?: number;
};
const Header = ({ cartCount }: HeaderProps) => {
  const [currentCartCount, setCurrentCartCount] = useState(0);
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem("instantmart-cart");
      if (savedCart) {
        const cart = JSON.parse(savedCart) as Record<string, number>;
        setCurrentCartCount(
          Object.values(cart).reduce((sum, count) => sum + count, 0),
        );
      } else {
        setCurrentCartCount(0);
      }
    };
    updateCartCount();
    window.addEventListener("instantmart-cart-updated", updateCartCount);
    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("instantmart-cart-updated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);
  const displayedCount = cartCount ?? currentCartCount;
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="hidden h-[36px] w-full items-center bg-linear-to-r from-green-950 via-green-700 to-green-950 px-4 text-white sm:flex sm:px-6 lg:px-10">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xs font-normal sm:text-sm">
            This is a sample UI platform designed exclusively for testing and
            demo.
          </h4>
          <a
            href="/"
            className="shrink-0 px-2 text-xs font-medium transition hover:text-orange-300 sm:px-3 sm:text-sm"
          >
            Get Source Code
          </a>
        </div>
      </div>
      <div className="flex h-[64px] w-full items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <Link to="/" className="flex shrink-0 items-center gap-1 sm:gap-2">
          <IoIosBicycle
            size={28}
            className="text-black sm:h-[30px] sm:w-[30px]"
          />
          <h1 className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
            InstantMart
          </h1>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-10">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-400"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-400"
          >
            Products
          </Link>

          <Link
            to="/deals"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-400"
          >
            Deals
          </Link>
        </nav>

        <div className="hidden h-[36px] w-[240px] items-center rounded-full border border-amber-300 bg-amber-50 px-3 lg:flex xl:w-[384px] xl:px-4">
          <FaSearch
            size={14}
            className="mr-2 shrink-0 text-gray-500 xl:mr-3"
          />

          <input
            type="text"
            placeholder="Search for groceries..."
            className="w-full bg-transparent px-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <button
            type="button"
            className="relative text-gray-600 transition hover:text-orange-400"
            aria-label="Shopping cart"
          >
            <FaShoppingCart size={18} />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-400 px-1 text-[9px] text-white sm:text-[10px]">
              {displayedCount}
            </span>
          </button>

          <button
            type="button"
            className="flex h-[36px] w-[36px] items-center justify-center rounded-2xl bg-green-900 text-white transition hover:bg-green-800 sm:w-[85px] md:w-[97px]"
            aria-label="Account"
          >
            <CiUser size={19} />

            <span className="hidden text-sm sm:ml-1 sm:inline">
              Sign In
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;