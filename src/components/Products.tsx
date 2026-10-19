import { Link } from "react-router";
import ProductCard from "./ProductCard";
import type { Product } from "../services/api";

const products: Product[] = [
  {
    id: 1,
    title: "Cheese 200g",
    description: "Delicious cheese for everyday meals.",
    price: 130,
    category: "dairy",
    rating: 4.5,
    stock: 20,
    thumbnail: "/images/gek3mmiig3lixlkpxks8.png",
  },
  {
    id: 2,
    title: "Knorr Cup Soup 70g",
    description: "Quick and tasty cup soup.",
    price: 30,
    category: "groceries",
    rating: 4.5,
    stock: 25,
    thumbnail: "/images/vnzb2qbwtpab5gnqvx0f.png",
  },
  {
    id: 3,
    title: "7 Up 1.5L",
    description: "Refreshing lemon-lime soft drink.",
    price: 70,
    category: "beverages",
    rating: 4.5,
    stock: 30,
    thumbnail: "/images/evuovl2nlwdjukosfz23.png",
  },
  {
    id: 4,
    title: "Basmati Rice 5kg",
    description: "Fragrant basmati rice for family meals.",
    price: 520,
    category: "groceries",
    rating: 4.5,
    stock: 15,
    thumbnail: "/images/spb5sgy8g24rned9nwog.png",
  },
  {
    id: 5,
    title: "Banana 1 kg",
    description: "Fresh bananas for a healthy snack.",
    price: 45,
    category: "fruits",
    rating: 4.5,
    stock: 40,
    thumbnail: "/images/dsnmko6gqtyw31okby80.png",
  },
  {
    id: 6,
    title: "Sprite 1.5L",
    description: "A crisp and refreshing lemon-lime drink.",
    price: 60,
    category: "beverages",
    rating: 4.5,
    stock: 28,
    thumbnail: "/images/wnvtwlm2tphqburhsmyc.png",
  },
  {
    id: 7,
    title: "Onion 500g",
    description: "Everyday onions for your favorite recipes.",
    price: 45,
    category: "vegetables",
    rating: 4.5,
    stock: 35,
    thumbnail: "/images/daiglpvgna1dlhjplbve.png",
  },
  {
    id: 8,
    title: "Maggi Noodles 280g",
    description: "Quick noodles for an easy meal.",
    price: 40,
    category: "groceries",
    rating: 4.5,
    stock: 30,
    thumbnail: "/images/dsep7owmwvfrukzbslqo.png",
  },
  {
    id: 9,
    title: "Orange 1 kg",
    description: "Juicy oranges with a fresh citrus taste.",
    price: 75,
    category: "fruits",
    rating: 4.5,
    stock: 24,
    thumbnail: "/images/dboutcrkdjhoxcvbbqne.png",
  },
  {
    id: 10,
    title: "Mango 1 kg",
    description: "Sweet mangoes for a tropical treat.",
    price: 140,
    category: "fruits",
    rating: 4.5,
    stock: 18,
    thumbnail: "/images/nb1mpxuo4fdcik6ey5yj.png",
  },
];

function Products() {
  return (
    <section className="bg-amber-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Popular Products
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Top-rated products this season
            </p>
          </div>

          <Link
            to="/products"
            className="hidden text-sm font-semibold text-amber-600 transition hover:text-amber-700 sm:block"
          >
            View All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/products"
            className="inline-flex rounded-xl border border-amber-600 px-6 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-600 hover:text-white"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products;