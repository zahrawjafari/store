import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";
import ProductCard from "../Components/ProductCard";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const {
    data: products = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return products;

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term),
    );
  }, [products, search]);

  return (
    <section className="min-h-[60vh] bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
          Fresh Market
        </p>

        <h1 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Products
        </h1>

        <div className="mt-6 max-w-md">
          <input
            value={search}
            onChange={(event) => {
              const value = event.target.value;

              setSearchParams(value ? { search: value } : {}, {
                replace: true,
              });
            }}
            placeholder="Search by product name..."
            aria-label="Search products"
            className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {isLoading ? (
          <p className="py-16 text-center text-gray-500">Loading products...</p>
        ) : isError ? (
          <div className="py-16 text-center">
            <p className="text-red-600">
              Could not load products. Check your internet connection.
            </p>
            <button
              type="button"
              onClick={() => void refetch()}
              className="mt-4 rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
            >
              Try Again
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <p className="py-16 text-center text-gray-500">
            No matching products found.
          </p>
        ) : (
          <>
            <p className="mb-5 mt-8 text-sm text-gray-500">
              {filteredProducts.length} products found
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Products;
