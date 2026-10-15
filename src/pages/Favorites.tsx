import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";
import { useStore } from "../store/useStore";
import ProductCard from "../Components/ProductCard";

function Favorites() {
  const favorites = useStore((state) => state.favorites);

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id),
  );

  return (
    <section className="min-h-[60vh] bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          My Favorites
        </h1>

        {isLoading ? (
          <p className="py-12 text-gray-500">Loading favorites...</p>
        ) : isError ? (
          <p className="py-12 text-red-600">Could not load favorites.</p>
        ) : favoriteProducts.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-10 text-center">
            <p className="text-gray-600">You have no saved favorites yet.</p>
            <Link
              to="/products"
              className="mt-5 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Favorites;
