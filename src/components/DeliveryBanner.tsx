import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { IoArrowBack, IoCartOutline } from "react-icons/io5";
import { getProduct } from "../services/api";
import { useStore } from "../store/useStore";

function ProductDetail() {
  const { id } = useParams();
  const addToCart = useStore((state) => state.addToCart);

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id!),
    enabled: Boolean(id),
  });

  if (isLoading) {
    return (
      <div className="px-4 py-20 text-center text-gray-500">
        Loading product...
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="px-4 py-20 text-center">
        <p className="text-red-600">Could not load this product.</p>
        <Link to="/products" className="mt-4 inline-block text-green-700">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-[60vh] bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-700"
        >
          <IoArrowBack />
          Back to products
        </Link>

        <div className="grid gap-8 rounded-3xl bg-white p-5 shadow-sm sm:p-8 md:grid-cols-2">
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-amber-50 p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[350px] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm capitalize text-green-700">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            {product.rating !== undefined && (
              <p className="mt-3 text-sm text-amber-600">
                ★ {product.rating.toFixed(1)} / 5
              </p>
            )}

            <p className="mt-5 leading-7 text-gray-600">
              {product.description}
            </p>

            <p className="mt-6 text-3xl font-extrabold text-green-700">
              ${product.price.toFixed(2)}
            </p>

            {product.stock !== undefined && (
              <p className="mt-2 text-sm text-gray-500">
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </p>
            )}

            <button
              type="button"
              disabled={product.stock === 0}
              onClick={() => addToCart(product)}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <IoCartOutline size={21} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
