import { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  LuHouse,
  LuSearch,
  LuShoppingCart,
  LuPlus,
  LuMinus,
  LuHeart,
  LuChevronDown,
} from "react-icons/lu";

const products = [
  {
    id: 1,
    name: "Sprite 1.5L",
    category: "Beverages",
    price: 60,
    oldPrice: 75,
    rating: 4.5,
    discount: "20% OFF",
    image: "/images/daiglpvgna1dlhjplbve.png",
  },
  {
    id: 2,
    name: "Spinach 500g",
    category: "Fruits & Vegetables",
    price: 15,
    oldPrice: 18,
    rating: 4.5,
    discount: "17% OFF",
    image: "/images/bhrtl76sscvmeiq4kchm.png",
  },
  {
    id: 3,
    name: "Eggs 12 pcs",
    category: "Dairy & Eggs",
    price: 85,
    oldPrice: 90,
    rating: 4.5,
    discount: "6% OFF",
    image: "/images/cnjrpbcnqesqxy1wr30g.png",
  },
  {
    id: 4,
    name: "Fanta 1.5L",
    category: "Beverages",
    price: 65,
    oldPrice: 70,
    rating: 4.5,
    discount: "7% OFF",
    image: "/images/nexecd3mgyzrpeun1bee.png",
  },
  {
    id: 5,
    name: "Onions 500g",
    category: "Fruits & Vegetables",
    price: 45,
    oldPrice: 50.0,
    rating: 4.5,
    discount: "10% OFF",
    image: "/images/wnvtwlm2tphqburhsmyc.png",
  },
  {
    id: 6,
    name: "Potato 500g",
    category: "Fruits & Vegetables",
    price: 25,
    oldPrice: 29,
    rating: 4.5,
    discount: "13% OFF",
    image: "/images/tzibj2ntsnbn4e0u5kwv.png",
  },
  {
    id: 7,
    name: "Coca Cola 1.5L",
    category: "Beverages",
    price: 60,
    oldPrice: 65,
    rating: 4.5,
    discount: "8% OFF",
    image: "/images/eljxcdud6fduwfim5rdx.png",
  },
  {
    id: 8,
    name: "7UP 1.5L",
    category: "Beverages",
    price: 70,
    oldPrice: 76,
    rating: 4.5,
    discount: "8% OFF",
    image: "/images/qt1ypzsoqni12ghf2ryp.png",
  },
  {
    id: 9,
    name: "Grapes 500g",
    category: "Fruits & Vegetables",
    price: 65,
    oldPrice: 70,
    rating: 4.5,
    discount: "8% OFF",
    image: "/images/jsmb7caaokhnyci2coga.png",
  },
  {
    id: 10,
    name: "Barley 1kg",
    category: "pantry staples",
    price: 140,
    oldPrice: 150,
    rating: 4.5,
    discount: "8% OFF",
    image: "/images/spb5sgy8g24rned9nwog.png",
  },
];

const categories = [
  "All Categories",
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

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Categories" ||
        product.category === selectedCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, search, sort]);

  function addToCart(id: number) {
    setCart((previous) => ({
      ...previous,
      [id]: (previous[id] || 0) + 1,
    }));
  }

  function toggleFavorite(id: number) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#252820]">
      <div className="border-b border-gray-200 bg-[#202020] px-5 py-3 text-sm text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <span>
            This is a sample UI platform designed exclusively for testing and
            demo.
          </span>
          <a href="#" className="hidden underline sm:block">
            Get Source Code
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <LuShoppingCart size={27} />
            <span className="text-2xl font-bold tracking-tight">
              InstantMart
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <Link to="/" className="hover:text-amber-600">
              Home
            </Link>
            <Link to="/products" className="font-semibold text-amber-600">
              Products
            </Link>
            <Link to="/products" className="hover:text-amber-600">
              Deals
            </Link>
            <Link to="/dashboard" className="hover:text-amber-600">
              Dashboard
            </Link>
          </nav>

          <div className="flex min-w-0 flex-1 items-center gap-3 md:max-w-[370px]">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-gray-200 bg-[#FAFAF7] px-4 py-3">
              <LuSearch size={18} className="shrink-0 text-gray-500" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search for groceries..."
                className="w-full min-w-0 bg-transparent text-sm outline-none"
              />
            </div>

            <button
              type="button"
              aria-label="Shopping cart"
              className="relative rounded-full p-2 hover:bg-gray-100"
            >
              <LuShoppingCart size={22} />
              {Object.values(cart).reduce((sum, count) => sum + count, 0) >
                0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-xs text-white">
                  {Object.values(cart).reduce((sum, count) => sum + count, 0)}
                </span>
              )}
            </button>

            <Link
              to="/"
              className="rounded-full bg-[#252525] px-4 py-2.5 text-sm font-medium text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-5 py-6">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" aria-label="Home">
            <LuHouse size={17} />
          </Link>
          <span>/</span>
          <span className="text-gray-800">Dashboard</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-gray-100 bg-white p-5">
            <h2 className="mb-4 font-semibold">Categories</h2>

            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    selectedCategory === category
                      ? "bg-[#252525] font-medium text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-7 border-t border-gray-100 pt-5">
              <h3 className="mb-3 font-semibold">Price Range</h3>
              <p className="text-sm text-gray-500">
                Choose a category to filter products.
              </p>
            </div>

            <Link
              to="/"
              className="mt-6 block rounded-xl border border-gray-200 px-4 py-3 text-center text-sm hover:bg-gray-50"
            >
              Back to Home
            </Link>
          </aside>

          <section className="min-w-0">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold sm:text-3xl">Dashboard</h1>
                <p className="mt-2 text-sm text-gray-500">
                  {filteredProducts.length} products found
                </p>
              </div>

              <label className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm">
                <span className="text-gray-500">Sort:</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="max-w-[150px] bg-transparent outline-none"
                >
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <LuChevronDown size={15} />
              </label>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl bg-white p-10 text-center text-gray-500">
                No products found.
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group relative min-w-0 rounded-2xl border border-gray-100 bg-white p-3 transition hover:shadow-md sm:p-4"
                  >
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[#C87555] px-2 py-1 text-[10px] font-semibold text-white">
                      {product.discount}
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleFavorite(product.id)}
                      aria-label="Toggle favorite"
                      className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow-sm"
                    >
                      <LuHeart
                        size={17}
                        className={
                          favorites.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-500"
                        }
                      />
                    </button>

                    <div className="flex h-36 items-center justify-center sm:h-44">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.visibility = "hidden";
                        }}
                      />
                    </div>

                    <h2 className="mt-3 truncate text-sm font-medium">
                      {product.name}
                    </h2>

                    <p className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                      <span className="text-amber-500">★</span>
                      {product.rating}
                      <span>(12)</span>
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-semibold">
                          ${product.price.toFixed(1)}
                        </p>
                        <p className="text-xs text-gray-400 line-through">
                          ${product.oldPrice.toFixed(1)}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-1">
                        {cart[product.id] > 0 && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setCart((previous) => ({
                                  ...previous,
                                  [product.id]: Math.max(
                                    0,
                                    (previous[product.id] || 0) - 1,
                                  ),
                                }))
                              }
                              className="rounded-full border border-gray-200 p-1.5"
                              aria-label="Decrease quantity"
                            >
                              <LuMinus size={13} />
                            </button>
                            <span className="text-xs">{cart[product.id]}</span>
                          </>
                        )}

                        <button
                          type="button"
                          onClick={() => addToCart(product.id)}
                          aria-label="Add to cart"
                          className="rounded-full bg-[#D68A4E] p-2 text-white transition hover:bg-[#BD7138]"
                        >
                          <LuPlus size={17} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
