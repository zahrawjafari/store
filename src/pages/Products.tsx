import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LuChevronDown, LuSlidersHorizontal } from "react-icons/lu";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../services/api";
import { useStore } from "../store/useStore";
const categories = [
  "All",
  "Fruits & Vegetables",
  "Personal Care",
  "Pantry Staples",
  "Bakery",
  "Beverages",
  "Meat & Seafood",
  "Snacks",
  "Frozen Foods",
  "Baby Care",
  "Dairy & Eggs",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [showFilters, setShowFilters] = useState(false);

  // دریافت محصولات با React Query
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

  // وضعیت سبد خرید و علاقه‌مندی‌ها با Zustand
  const addToCart = useStore((state) => state.addToCart);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const favorites = useStore((state) => state.favorites);

  // فیلتر و مرتب‌سازی محصولات
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter((product) => {
        const category = product.category.toLowerCase();

        switch (selectedCategory) {
          case "Fruits & Vegetables":
            return [
              "groceries",
              "fruits",
              "vegetables",
            ].some((item) => category.includes(item));

          case "Beverages":
            return category.includes("beverage") ||
              category.includes("drink");

          case "Personal Care":
            return category.includes("beauty") ||
              category.includes("personal-care");

          case "Pantry Staples":
            return category.includes("pantry") ||
              category.includes("groceries");

          case "Bakery":
            return category.includes("bakery") ||
              category.includes("bread");

          case "Meat & Seafood":
            return category.includes("meat") ||
              category.includes("seafood");

          case "Snacks":
            return category.includes("snack");

          case "Frozen Foods":
            return category.includes("frozen");

          case "Baby Care":
            return category.includes("baby");

          case "Dairy & Eggs":
            return category.includes("dairy") ||
              category.includes("egg") ||
              category.includes("milk");

          default:
            return category === selectedCategory.toLowerCase();
        }
      });
    }

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, sortBy]);

  if (isLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-amber-50">
        <p className="text-lg font-semibold text-green-800">
          در حال دریافت محصولات...
        </p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-4 bg-amber-50 px-4">
        <h2 className="text-xl font-bold text-red-600">
          دریافت محصولات ناموفق بود
        </h2>

        <p className="text-center text-sm text-gray-600">
          {error instanceof Error
            ? error.message
            : "خطای ناشناخته‌ای رخ داده است."}
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="rounded-xl bg-green-900 px-5 py-3 font-semibold text-white"
        >
          تلاش دوباره
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-700">
            Fresh groceries
          </p>

          <h1 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
            All Products
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            {filteredProducts.length} محصول
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowFilters((previous) => !previous)}
          className="mb-5 flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-800 lg:hidden"
        >
          <LuSlidersHorizontal className="h-5 w-5" />
          Filters
        </button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[230px_1fr]">
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } rounded-2xl bg-white p-5 lg:block`}
          >
            <h2 className="text-base font-bold text-gray-900">
              Categories
            </h2>

            <div className="mt-5 flex flex-col gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl px-3 py-2.5 text-left text-sm transition ${
                    selectedCategory === category
                      ? "bg-[#1F3D2B] font-semibold text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <h2 className="text-base font-bold text-gray-900">
                Price Range
              </h2>

              <div className="mt-5">
                <input
                  type="range"
                  min="0"
                  max="300"
                  defaultValue="300"
                  className="w-full accent-[#1F3D2B]"
                />

                <div className="mt-3 flex justify-between text-xs text-gray-500">
                  <span>$0</span>
                  <span>$300+</span>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex justify-end">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-10 appearance-none rounded-lg border border-gray-200 bg-white pl-4 pr-10 text-sm font-medium text-gray-800 outline-none"
                >
                  <option value="Newest">Newest</option>
                  <option value="Price: Low to High">
                    Price: Low to High
                  </option>
                  <option value="Price: High to Low">
                    Price: High to Low
                  </option>
                </select>

                <LuChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl bg-white p-10 text-center">
                <p className="font-semibold text-gray-700">
                  محصولی در این دسته پیدا نشد.
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 font-semibold text-green-800 underline"
                >
                  نمایش همه محصولات
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.title}
                    price={`$${product.price.toFixed(2)}`}
                    oldPrice=""
                    unit="each"
                    discount=""
                    rating={String(product.rating ?? 0)}
                    reviews="API"
                    image={product.thumbnail}
                    onAddToCart={() => addToCart(product)}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={() => toggleFavorite(product.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;