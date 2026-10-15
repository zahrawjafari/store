import { Link } from "react-router";
import { IoTrashOutline } from "react-icons/io5";
import { useStore } from "../store/useStore";

function Cart() {
  const cart = useStore((state) => state.cart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <section className="min-h-[60vh] bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1000px]">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-10 text-center">
            <p className="text-lg text-gray-600">
              Your shopping cart is empty.
            </p>
            <Link
              to="/products"
              className="mt-5 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <article
                  key={item.product.id}
                  className="flex flex-wrap items-center gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-nowrap"
                >
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    className="h-20 w-20 rounded-xl bg-amber-50 object-contain p-2"
                  />

                  <div className="min-w-0 flex-1">
                    <Link
                      to={`/products/${item.product.id}`}
                      className="font-semibold text-gray-900 hover:text-green-700"
                    >
                      {item.product.title}
                    </Link>

                    <p className="mt-1 text-sm text-green-700">
                      ${item.product.price.toFixed(2)} each
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.product.id)}
                        aria-label="Decrease quantity"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border"
                      >
                        −
                      </button>

                      <span className="min-w-4 text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.product.id)}
                        aria-label="Increase quantity"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="ml-auto flex items-center gap-3">
                    <span className="font-bold text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label="Remove product"
                      className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                    >
                      <IoTrashOutline size={20} />
                    </button>
                  </div>
                </article>
              ))}

              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-red-600 hover:text-red-800"
              >
                Clear cart
              </button>
            </div>

            <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              <div className="mt-5 flex justify-between text-sm text-gray-600">
                <span>Items</span>
                <span>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm text-gray-600">
                <span>Delivery</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="mt-5 border-t pt-5">
                <div className="flex justify-between gap-3 font-bold text-gray-900">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-xl bg-gray-300 px-4 py-3 font-semibold text-gray-600"
              >
                Checkout coming soon
              </button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
