import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoIosBicycle } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import {
  FaSearch,
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaUserCircle,
} from "react-icons/fa";
import { useStore } from "../store/useStore";
const Header = () => {
  const cart = useStore((state) => state.cart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const displayedCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search.trim();
    navigate(
      query ? `/dashboard?search=${encodeURIComponent(query)}` : "/dashboard",
    );
  };
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSignedIn(true);
    setSignInOpen(false);
    setProfileOpen(false);
    setPassword("");
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setProfileOpen(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="hidden h-[36px] w-full items-center justify-between bg-gradient-to-r from-green-950 via-green-700 to-green-950 px-4 text-white sm:flex sm:px-6 lg:px-10">
          <h4 className="text-xs sm:text-sm">
            This is a sample UI platform designed exclusively for testing and
            demo.
          </h4>

          <a href="/" className="px-2 text-xs hover:text-orange-300 sm:text-sm">
            Get Source Code
          </a>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <IoIosBicycle size={30} className="text-black" />

            <h1 className="text-lg font-bold text-gray-900 sm:text-2xl">
              InstantMart
            </h1>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-10">
            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-orange-400"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className="text-sm font-medium text-gray-600 hover:text-orange-400"
            >
              Products
            </Link>

            <Link
              to="/deals"
              className="text-sm font-medium text-gray-600 hover:text-orange-400"
            >
              Deals
            </Link>
          </nav>
          <form
            onSubmit={handleSearch}
            className="hidden h-[36px] w-[240px] items-center rounded-full border border-amber-300 bg-amber-50 px-3 lg:flex xl:w-[384px]">
            <FaSearch size={14} className="mr-3 shrink-0 text-gray-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              type="search"
              placeholder="Search for groceries..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
            />
          </form>
          <div className="relative flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setCartOpen(true);
                setSignInOpen(false);
                setProfileOpen(false);
              }}
              aria-label="Open shopping cart"
              className="relative text-gray-600 hover:text-orange-400"
            >
              <FaShoppingCart size={19} />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-400 px-1 text-[10px] text-white">
                {displayedCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (isSignedIn) {
                  setProfileOpen((previous) => !previous);
                  setSignInOpen(false);
                  setCartOpen(false);
                } else {
                  setSignInOpen(true);
                  setCartOpen(false);
                  setProfileOpen(false);
                }
              }}
              aria-label={isSignedIn ? "Open profile" : "Sign in"}
              className="flex h-[36px] items-center justify-center rounded-2xl bg-green-900 px-3 text-white hover:bg-green-800 sm:px-5">
              {isSignedIn ? (
                <>
                  <FaUserCircle size={19} />
                  <span className="ml-1 hidden text-sm sm:inline">Profile</span>
                </>
              ) : (
                <>
                  <CiUser size={19} />
                  <span className="ml-1 hidden text-sm sm:inline">Sign In</span>
                </>
              )}
            </button>
            {profileOpen && isSignedIn && (
              <div className="absolute right-0 top-12 z-[80] w-48 rounded-xl border border-gray-100 bg-white p-3 shadow-xl">
                <p className="truncate px-2 py-2 text-sm text-gray-600">
                  {email}
                </p>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="h-[100px] sm:h-[100px]" />
      {cartOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close shopping cart"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/30"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Cart"
            className="absolute right-0 top-0 flex h-screen w-full max-w-[420px] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Shopping Cart
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {displayedCount} items in your cart
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="text-2xl text-gray-500 hover:text-gray-900"
                aria-label="Close cart">
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {displayedCount === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <FaShoppingCart size={38} className="mb-4 text-gray-300" />
                  <p className="font-semibold text-gray-700">
                    Your cart is empty
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Add products to see them here.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map(({ product, quantity }) => {
                    const productName = product.title || "Product";
                    const productImage = product.thumbnail;
                    return (
                      <div
                        key={product.id}
                        className="flex gap-3 border-b border-gray-100 pb-5">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-amber-50">
                          {productImage ? (
                            <img
                              src={productImage}
                              alt={productName}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <FaShoppingCart className="text-2xl text-gray-300" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate font-semibold text-gray-900">
                            {productName}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            ${product.price.toFixed(2)} / item
                          </p>
                          <div className="mt-3 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(Number(product.id))
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-md border text-gray-700 hover:bg-gray-100"
                              aria-label="Decrease quantity">
                              <FaMinus size={10} />
                            </button>
                            <span className="min-w-4 text-center text-sm font-semibold">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(Number(product.id))
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-md border text-gray-700 hover:bg-gray-100"
                              aria-label="Increase quantity">
                              <FaPlus size={10} />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <span className="font-semibold text-gray-900">
                            ${(product.price * quantity).toFixed(2)}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(Number(product.id))}
                            aria-label={`Remove ${productName}`}
                            className="p-2 text-red-500 hover:text-red-700">
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="border-t bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-xl font-bold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="flex-1 rounded-xl border border-green-800 px-3 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50">
                  Continue Shopping
                </button>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  disabled={displayedCount === 0}
                  className="flex-1 rounded-xl bg-green-900 px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50">
                  Checkout
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
      {signInOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close sign in"
            onClick={() => setSignInOpen(false)}
            className="absolute inset-0 bg-black/30"/>
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Sign In"
            className="relative z-10 w-full max-w-[400px] rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Sign In</h2>
              <button
                type="button"
                onClick={() => setSignInOpen(false)}
                aria-label="Close sign in"
                className="text-2xl text-gray-500 hover:text-gray-900">
                ×
              </button>
            </div>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label
                  htmlFor="signin-email"
                  className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="signin-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-green-800"
                  placeholder="Enter your email"/>
              </div>
              <div>
                <label
                  htmlFor="signin-password"
                  className="mb-1 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="signin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-green-800"
                  placeholder="Enter your password"/>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-green-900 px-4 py-3 font-semibold text-white transition hover:bg-green-800">
                Sign In
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
};
export default Header;
