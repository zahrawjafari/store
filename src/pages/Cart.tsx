import { useEffect, useState } from "react";
type CartItems = Record<string, number>;
function Cart() {
  const [cart, setCart] = useState<CartItems>({});
  useEffect(() => {
    const savedCart = localStorage.getItem("instantmart-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart) as CartItems);
      } catch {
        setCart({});
      }
    }
  }, []);
  const totalItems = Object.values(cart).reduce(
    (sum, quantity) => sum + quantity,
    0,
  );
  return (
    <div className="min-h-screen bg-amber-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Shopping Cart
        </h1>
        {totalItems === 0 ? (
          <p className="text-gray-500">
            Your shopping cart is empty.
          </p>
        ) : (
          <p className="text-gray-700">
            Total items in your cart:{" "}
            <span className="font-bold">{totalItems}</span>
          </p>
        )}
      </div>
    </div>
  );
}
export default Cart;