import ProductCard from "./ProductCard";
import { useStore } from "../store/useStore";
import type { Product } from "../services/api";
const products = [
  {
    id: 1,
    name: "Cheese 200g",
    price: "$130.0",
    oldPrice: "$140.0",
    unit: "200g",
    discount: "7%",
    rating: "4.5",
    reviews: "12",
    image: "/images/gek3mmiig3lixlkpxks8.png",
    numericPrice: 130,
  },
  {
    id: 2,
    name: "Knorr Cup Soup 70g",
    price: "$30.0",
    oldPrice: "$35.0",
    unit: "70g",
    discount: "14%",
    rating: "4.5",
    reviews: "12",
    image: "/images/vnzb2qbwtpab5gnqvx0f.png",
    numericPrice: 30,
  },
  {
    id: 3,
    name: "7 Up 1.5L",
    price: "$70.0",
    oldPrice: "$76.0",
    unit: "1.5L",
    discount: "8%",
    rating: "4.5",
    reviews: "12",
    image: "/images/evuovl2nlwdjukosfz23.png",
    numericPrice: 70,
  },
  {
    id: 4,
    name: "Basmati Rice 5kg",
    price: "$520.0",
    oldPrice: "$550.0",
    unit: "5kg",
    discount: "5%",
    rating: "4.5",
    reviews: "12",
    image: "/images/spb5sgy8g24rned9nwog.png",
    numericPrice: 520,
  },
  {
    id: 5,
    name: "Banana 1 kg",
    price: "$45.0",
    oldPrice: "$50.0",
    unit: "1kg",
    discount: "10%",
    rating: "4.5",
    reviews: "12",
    image: "/images/dsnmko6gqtyw31okby80.png",
    numericPrice: 45,
  },
  {
    id: 6,
    name: "Sprite 1.5L",
    price: "$60.0",
    oldPrice: "$75.0",
    unit: "1.5L",
    discount: "20%",
    rating: "4.5",
    reviews: "12",
    image: "/images/wnvtwlm2tphqburhsmyc.png",
    numericPrice: 60,
  },
  {
    id: 7,
    name: "Onion 500g",
    price: "$45.0",
    oldPrice: "$50.0",
    unit: "500g",
    discount: "10%",
    rating: "4.5",
    reviews: "12",
    image: "/images/daiglpvgna1dlhjplbve.png",
    numericPrice: 45,
  },
  {
    id: 8,
    name: "Maggi Noodles 280g",
    price: "$40.0",
    oldPrice: "$55.0",
    unit: "280g",
    discount: "27%",
    rating: "4.5",
    reviews: "12",
    image: "/images/dsep7owmwvfrukzbslqo.png",
    numericPrice: 40,
  },
  {
    id: 9,
    name: "Orange 1 kg",
    price: "$75.0",
    oldPrice: "$80.0",
    unit: "1kg",
    discount: "6%",
    rating: "4.5",
    reviews: "12",
    image: "/images/dboutcrkdjhoxcvbbqne.png",
    numericPrice: 75,
  },
  {
    id: 10,
    name: "Mango 1 kg",
    price: "$140.0",
    oldPrice: "$150.0",
    unit: "1kg",
    discount: "7%",
    rating: "4.5",
    reviews: "12",
    image: "/images/nb1mpxuo4fdcik6ey5yj.png",
    numericPrice: 140,
  },
];
function Products() {
  const addToCart = useStore((state) => state.addToCart);
  const handleAddToCart = (item: (typeof products)[number]) => {
    const product: Product = {
      id: item.id,
      title: item.name,
      description: item.name,
      price: item.numericPrice,
      category: "groceries",
      rating: Number(item.rating),
      stock: 100,
      thumbnail: item.image,
    };
    addToCart(product);
  };
  return (
    <section className="bg-amber-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Popular Products
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Top-rated products this season
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              window.location.href = "/products";
            }}
            className="hidden text-sm font-semibold text-amber-600 transition hover:text-amber-700 sm:block">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              unit={product.unit}
              discount={product.discount}
              rating={product.rating}
              reviews={product.reviews}
              image={product.image}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Products;