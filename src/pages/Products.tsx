import { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  LuSearch,
  LuSlidersHorizontal,
  LuShoppingCart,
  LuHeart,
  LuStar,
} from "react-icons/lu";
const products = [
  {
    id: 1,
    name: "Fresh Bananas",
    category: "Fruits & Vegetables",
    price: 2.5,
    oldPrice: 3,
    rating: 4.8,
    image: "/images/dsnmko6gqtyw31okby80.png",
    unit: "1 kg",
  },
  {
    id: 2,
    name: "Fresh Oranges",
    category: "Fruits & Vegetables",
    price: 3.2,
    oldPrice: 3.8,
    rating: 4.7,
    image: "/images/dboutcrkdjhoxcvbbqne.png",
    unit: "1 kg",
  },
  {
    id: 3,
    name: "Basmati Rice",
    category: "Pantry Staples",
    price: 8.5,
    oldPrice: 9.5,
    rating: 4.9,
    image: "/images/spb5sgy8g24rned9nwog.png",
    unit: "5 kg",
  },
  {
    id: 4,
    name: "Cheese",
    category: "Dairy & Eggs",
    price: 4.5,
    oldPrice: 5,
    rating: 4.6,
    image: "/images/gek3mmiig3lixlkpxks8.png",
    unit: "200 g",
  },
  {
    id: 5,
    name: "Sprite",
    category: "Beverages",
    price: 2,
    oldPrice: 2.5,
    rating: 4.5,
    image: "/images/wnvtwlm2tphqburhsmyc.png",
    unit: "1.5 L",
  },
  {
    id: 6,
    name: "Knorr Cup Soup",
    category: "Pantry Staples",
    price: 1.5,
    oldPrice: 2,
    rating: 4.4,
    image: "/images/vnzb2qbwtpab5gnqvx0f.png",
    unit: "70 g",
  },
  {
    id: 7,
    name: "Fresh Mango",
    category: "Fruits & Vegetables",
    price: 4.2,
    oldPrice: 4.8,
    rating: 4.9,
    image: "/images/nb1mpxuo4fdcik6ey5yj.png",
    unit: "1 kg",
  },
  {
    id: 8,
    name: "Maggi Noodles",
    category: "Snacks",
    price: 1.2,
    oldPrice: 1.6,
    rating: 4.5,
    image: "/images/dsep7owmwvfrukzbslqo.png",
    unit: "280 g",
  },
];

const categories = [
  "All Products",
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Pantry Staples",
  "Beverages",
  "Snacks",
];
function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [sort, setSort] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        category === "All Products" || product.category === category;
      return matchesSearch && matchesCategory;
    });
    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [search, category, sort]);
  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };
  return (
    <main className="min-h-screen bg-amber-50 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 rounded-3xl bg-[#1F3D2B] px-6 py-10 text-white sm:px-10 sm:py-14">
          <p className="text-sm font-medium text-amber-300">
            FRESH FROM OUR STORE
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Shop All Products
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
            Discover fresh groceries and everyday essentials, carefully selected
            for your home.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            <LuShoppingCart size={18} />
            Cart items: {cartCount}
          </div>
        </div>
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>
            <p className="mt-1 text-sm text-gray-500">
              {filteredProducts.length} products available
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex h-12 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 sm:w-64">
              <LuSearch className="shrink-0 text-gray-400" size={19} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent text-sm outline-none"/>
            </div>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3">
              <LuSlidersHorizontal size={18} className="text-gray-500" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent text-sm outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-medium transition ${
                category === item
                  ? "bg-[#1F3D2B] text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
              }`}>
              {item}
            </button>
          ))}
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => {
              const isFavorite = favorites.includes(product.id);
              const discount = Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100,
              );
              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative flex h-52 items-center justify-center bg-white p-5">
                    <span className="absolute left-3 top-3 rounded-lg bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-700">
                      -{discount}%
                    </span>
                    <button
                      type="button"
                      aria-label="Toggle favorite"
                      onClick={() => toggleFavorite(product.id)}
                      className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border transition ${
                        isFavorite
                          ? "border-red-100 bg-red-50 text-red-500"
                          : "border-gray-100 bg-white text-gray-500 hover:text-red-500"
                      }`}>
                      <LuHeart
                        size={18}
                        fill={isFavorite ? "currentColor" : "none"}/>
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-36 w-36 object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t border-gray-100 p-4">
                    <p className="text-xs text-gray-400">{product.category}</p>
                    <h3 className="mt-1 truncate font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5">
                      <LuStar
                        size={15}
                        fill="#F59E0B"
                        className="text-amber-500"/>
                      <span className="text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                      <span className="text-xs text-gray-400">
                        Customer rating
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-lg font-bold text-[#1F3D2B]">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="ml-2 text-xs text-gray-400 line-through">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                        <p className="mt-0.5 text-xs text-gray-400">
                          per {product.unit}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCartCount((count) => count + 1)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1F3D2B] text-white transition hover:bg-[#163021]"
                        aria-label={`Add ${product.name} to cart`}>
                        <LuShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-16 text-center">
            <LuSearch className="mx-auto text-gray-300" size={40} />
            <h3 className="mt-4 text-lg font-bold text-gray-900">
              No products found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All Products");
              }}
              className="mt-5 rounded-full bg-[#1F3D2B] px-5 py-2.5 text-sm font-semibold text-white">
              Clear filters
            </button>
          </div>
        )}
        <div className="mt-12 flex justify-center">
          <Link
            to="/"
            className="rounded-full border border-[#1F3D2B] px-6 py-3 text-sm font-semibold text-[#1F3D2B] transition hover:bg-[#1F3D2B] hover:text-white">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Products;
