import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import {
  FaArrowLeft,
  FaExclamationCircle,
  FaRedo,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import { getProduct } from "../services/api";

const ProductDetail = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id!),
    enabled: Boolean(id),
  });

  if (!id) {
    return (
      <section className="px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Product ID is missing
        </h1>

        <Link
          to="/products"
          className="mt-5 inline-flex items-center gap-2 text-green-600"
        >
          <FaArrowLeft />
          Back to products
        </Link>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl animate-pulse px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="h-80 rounded-2xl bg-gray-200" />
          <div className="space-y-5">
            <div className="h-8 w-3/4 rounded bg-gray-200" />
            <div className="h-5 w-1/3 rounded bg-gray-200" />
            <div className="h-24 rounded bg-gray-200" />
          </div>
        </div>
      </section>
    );
  }

  if (isError || !product) {
    return (
      <section className="px-4 py-16 text-center">
        <FaExclamationCircle className="mx-auto mb-4 text-4xl text-red-500" />

        <h1 className="text-2xl font-bold text-gray-900">
          Could not load product
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          {error instanceof Error
            ? error.message
            : "The product could not be found."}
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => void refetch()}
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
          >
            <FaRedo />
            Try Again
          </button>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-gray-700 hover:bg-gray-50"
          >
            <FaArrowLeft />
            Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-green-600"
        >
          <FaArrowLeft />
          Back to products
        </Link>

        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="flex min-h-72 items-center justify-center rounded-2xl bg-gray-50 p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-96 w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-600">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {product.title}
            </h1>

            {typeof product.rating === "number" && (
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <FaStar className="text-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span>Customer rating</span>
              </div>
            )}

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <p className="mt-6 text-3xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </p>

            {typeof product.stock === "number" && (
              <p className="mt-3 text-sm text-gray-500">
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Currently out of stock"}
              </p>
            )}

            <button
              type="button"
              disabled={product.stock === 0}
              title="Cart functionality is not connected yet"
              className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <p className="mt-3 text-xs text-gray-400">
              Shopping cart functionality will need to be connected separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;