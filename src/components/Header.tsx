import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoIosBicycle } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import {
  FaSearch,
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

type Product = {
  id: string;
  title: string;
  price: number;
  image?: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const CART_KEY = "instantmart-cart";
const PRODUCTS_KEY = "instantmart-products";

const Header = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const readCart = () => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);
      setCart(savedCart ? JSON.parse(savedCart) : {});
    } catch {
      setCart({});
    }

    try {
      const savedProducts = localStorage.getItem(PRODUCTS_KEY);
      setProducts(savedProducts ? JSON.parse(savedProducts) : []);
    } catch {
      setProducts([]);
    }
  };

  useEffect(() => {
    readCart();

    const update = () => readCart();

    window.addEventListener("instantmart-cart-updated", update);
    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener("instantmart-cart-updated", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  const saveCart = (nextCart: Record<string, number>) => {
    setCart(nextCart);
    localStorage.setItem(CART_KEY, JSON.stringify(nextCart));
    window.dispatchEvent(new Event("instantmart-cart-updated"));
  };

  const changeQuantity = (id: string, amount: number) => {
    const nextCart = { ...cart };
    const nextQuantity = (nextCart[id] || 0) + amount;

    if (nextQuantity <= 0) {
      delete nextCart[id];
    } else {
      nextCart[id] = nextQuantity;
    }

    saveCart(nextCart);
  };

  const removeProduct = (id: string) => {
    const nextCart = { ...cart };
    delete nextCart[id];
    saveCart(nextCart);
  };

  const cartItems: CartItem[] = Object.entries(cart)
    .filter(([, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const product = products.find((item) => String(item.id) === id);

      return product ? { product, quantity } : null;
    })
    .filter((item): item is CartItem => item !== null);

  const displayedCount = Object.values(cart).reduce(
    (sum, quantity) => sum + quantity,
    0,
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="hidden h-[36px] w-full items-center justify-between bg-linear-to-r from-green-950 via-green-700 to-green-950 px-4 text-white sm:flex sm:px-6 lg:px-10">
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

          <div className="hidden h-[36px] w-[240px] items-center rounded-full border border-amber-300 bg-amber-50 px-3 lg:flex xl:w-[384px]">
            <FaSearch size={14} className="mr-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search for groceries..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
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
              onClick={() => navigate("/signin")}
              className="flex h-[36px] items-center justify-center rounded-2xl bg-green-900 px-3 text-white hover:bg-green-800 sm:px-5"
            >
              <CiUser size={19} />
              <span className="ml-1 hidden text-sm sm:inline">Sign In</span>
            </button>
          </div>
        </div>
      </header>

      {cartOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close shopping cart"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/30"
          />

          <aside className="absolute right-0 top-0 flex h-screen w-full max-w-[420px] flex-col bg-white shadow-2xl">
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
                aria-label="Close"
              >
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
              ) : cartItems.length === 0 ? (
                <p className="text-sm leading-6 text-gray-500">
                  Cart quantities are saved, but product details are not
                  available yet. Make sure Dashboard saves the product catalog
                  under <code>instantmart-products</code>.
                </p>
              ) : (
                <div className="space-y-5">
                  {cartItems.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="flex gap-3 border-b border-gray-100 pb-5"
                    >
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-amber-50">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <FaShoppingCart className="text-2xl text-gray-300" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-semibold text-gray-900">
                          {product.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          ${product.price.toFixed(2)} / item
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              changeQuantity(String(product.id), -1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md border text-gray-700 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <FaMinus size={10} />
                          </button>

                          <span className="min-w-4 text-center text-sm font-semibold">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              changeQuantity(String(product.id), 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md border text-gray-700 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
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
                          onClick={() => removeProduct(String(product.id))}
                          aria-label={`Remove ${product.title}`}
                          className="p-2 text-red-500 hover:text-red-700"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
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
                  onClick={() => {
                    setCartOpen(false);
                    navigate("/dashboard");
                  }}
                  className="flex-1 rounded-xl border border-green-800 px-3 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
                >
                  Continue Shopping
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCartOpen(false);
                    navigate("/checkout");
                  }}
                  disabled={displayedCount === 0}
                  className="flex-1 rounded-xl bg-green-900 px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Checkout
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
