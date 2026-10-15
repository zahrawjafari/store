import { Link } from "react-router";

const categories = [
  {
    name: "Fruits & Vegetables",
    image: "/images/fruits_vegetables-DKTFzdXr.png",
  },
  {
    name: "Personal Care",
    image: "/images/personal_care-DGCwg-ZT.png",
  },
  {
    name: "Pantry Staples",
    image: "/images/pantry_staples-CcPzJo59.png",
  },
  {
    name: "Bakery",
    image: "/images/bakery-B-i44uip.png",
  },
  {
    name: "Beverages",
    image: "/images/drinks-5Jevbc87.png",
  },
  {
    name: "Meat & Seafood",
    image: "/images/meat_seafood-B2LTBWqG.png",
  },
  {
    name: "Snacks",
    image: "/images/snacks-Br0zj0km.png",
  },
  {
    name: "Frozen Food",
    image: "/images/frozen_foods-CJqLnA0J.png",
  },
  {
    name: "Baby Care",
    image: "/images/baby_care-CoAR19dL.png",
  },
];

function Categories() {
  return (
    <section id="categories" className="bg-amber-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-1 text-sm font-bold uppercase tracking-widest text-amber-600">
          Shop by category
        </p>

        <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Browse Categories
        </h2>

        <p className="mt-2 mb-6 text-sm text-gray-500">
          Discover fresh essentials for your home.
        </p>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {categories.map((category) => (
            <Link
              to="/products"
              key={category.name}
              className="group flex min-w-0 flex-col items-center rounded-2xl p-2 transition hover:bg-white hover:shadow-md"
            >
              <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-amber-100 bg-amber-100 transition group-hover:scale-105 group-hover:bg-amber-200 sm:h-[90px] sm:w-[90px]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                />
              </div>

              <span className="mt-3 text-center text-xs font-semibold leading-5 text-gray-800 sm:text-sm">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
