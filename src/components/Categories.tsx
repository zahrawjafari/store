import { Link } from "react-router";
const Categories = () => {
  const categories = [
    {
      name: "Fruits & Vegetables",
      value: "Fruits & Vegetables",
      image: "/images/fruits_vegetables-DKTFzdXr.png",
    },
    {
      name: "Personal",
      value: "Personal Care",
      image: "/images/personal_care-DGCwg-ZT.png",
    },
    {
      name: "Pantry Staples",
      value: "Pantry Staples",
      image: "/images/pantry_staples-CcPzJo59.png",
    },
    {
      name: "Bakery",
      value: "Bakery",
      image: "/images/bakery-B-i44uip.png",
    },
    {
      name: "Beverages",
      value: "Beverages",
      image: "/images/drinks-5Jevbc87.png",
    },
    {
      name: "Meat & Seafood",
      value: "Meat & Seafood",
      image: "/images/meat_seafood-B2LTBWqG.png",
    },
    {
      name: "Snacks",
      value: "Snacks",
      image: "/images/snacks-Br0zj0km.png",
    },
    {
      name: "Frozen Food",
      value: "Frozen Foods",
      image: "/images/frozen_foods-CJqLnA0J.png",
    },
    {
      name: "Baby Care",
      value: "Baby Care",
      image: "/images/baby_care-CoAR19dL.png",
    },
  ];
  return (
    <section className="bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-7">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-amber-600">
            Shop by category
          </p>
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Browse Categories
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-5 sm:gap-x-5 lg:grid-cols-9 lg:gap-x-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.value)}`}
              className="group flex min-w-0 flex-col items-center"
            >
              <div className="flex h-[82px] w-[82px] items-center justify-center rounded-xl border-2 border-amber-100 bg-amber-100 transition-all duration-300 group-hover:scale-105 group-hover:border-amber-300 group-hover:bg-amber-200 sm:h-[88px] sm:w-[88px]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-[56px] w-[56px] object-contain transition-transform duration-300 group-hover:scale-110 sm:h-[60px] sm:w-[60px]"
                />
              </div>

              <p className="mt-2 w-full text-center text-xs font-semibold leading-4 text-gray-800 group-hover:text-green-800">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;
