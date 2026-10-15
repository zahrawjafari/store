import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router";
import {
  FaSearch,
  FaHeart,
  FaArrowRight,
  FaRedo,
  FaExclamationCircle,
} from "react-icons/fa";

import { getProducts } from "../services/api";

const Products = () => {
  const [searchParams] = useSearchParams();
  const search = (searchParams.get("search") ?? "").trim().toLowerCase();

  const {
    data: products = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const filteredProducts = useMemo(() => {
    if (!search) return products;

    return products.filter((product) =>
      `${product.title} ${product.description} ${product.category}`
        .toLowerCase()
        .includes(search)
    );
  }, [products, search]);

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold text-green-600">
              FRESH MARKET
            </p>

            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Fresh Products
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Discover fresh groceries for your everyday needs.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
            <FaSearch className="text-green-600" />
            <span>
              {filteredProducts.length} products found
            </span>
          </div>
        </div>

        {search && (
          <div className="mb-6 rounded-xl border border-green-100 bg-green-50 p-4 text-sm text-gray-700">
            Search results for:{" "}
            <span className="font-semibold">{searchParams.get("search")}</span>
          </div>
        )}

        {isLoading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl bg-white p-4 shadow-sm"
              >
                <div className="mb-4 h-48 rounded-xl bg-gray-200" />
                <div className="mb-3 h-4 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-1/3 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="rounded-2xl border border-red-100 bg-white p-8 text-center">
            <FaExclamationCircle className="mx-auto mb-4 text-4xl text-red-500" />

            <h2 className="text-xl font-bold text-gray-900">
              Could not load products
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm text-gray-500">
              {error instanceof Error
                ? error.message
                : "Something went wrong. Please try again."}
            </p>

            <button
              type="button"
              onClick={() => void refetch()}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <FaRedo />
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !isError && filteredProducts.length === 0 && (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <FaSearch className="mx-auto mb-4 text-4xl text-gray-300" />

            <h2 className="text-xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with another name.
            </p>

            <Link
              to="/products"
              className="mt-5 inline-block font-semibold text-green-600 hover:text-green-700"
            >
              Show all products
            </Link>
          </div>
        )}

        {!isLoading && !isError && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  to={`/products/${product.id}`}
                  className="relative block overflow-hidden bg-white p-5"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className="h-48 w-full object-contain transition duration-300 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold capitalize text-green-700">
                    {product.category}
                  </span>
                </Link>

                <div className="p-5 pt-0">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <Link
                      to={`/products/${product.id}`}
                      className="line-clamp-2 font-semibold text-gray-900 transition hover:text-green-600"
                    >
                      {product.title}
                    </Link>

                    <button
                      type="button"
                      aria-label={`Add ${product.title} to favorites`}
                      title="Favorites feature is not connected yet"
                      className="shrink-0 rounded-full p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <FaHeart />
                    </button>
                  </div>

                  <p className="mb-4 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xl font-bold text-green-600">
                      ${product.price.toFixed(2)}
                    </p>

                    <Link
                      to={`/products/${product.id}`}
                      aria-label={`View ${product.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white transition hover:bg-green-700"
                    >
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;