import { Link } from "react-router";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import type { Product } from "../services/api";
import { useStore } from "../store/useStore";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const favorite = useStore((state) => state.isFavorite(product.id));

  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-100 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-48 items-center justify-center bg-amber-50 p-5">
        <Link
          to={`/products/${product.id}`}
          className="flex h-full w-full items-center justify-center"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </Link>

        <button
          type="button"
          aria-label="Toggle favorite"
          onClick={() => toggleFavorite(product.id)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-rose-50"
        >
          {favorite ? (
            <FaHeart className="text-rose-500" />
          ) : (
            <FaRegHeart className="text-gray-500" />
          )}
        </button>
      </div>

      <div className="p-4">
        <p className="mb-2 text-xs capitalize text-gray-500">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="line-clamp-1 font-semibold text-gray-900 hover:text-green-700"
        >
          {product.title}
        </Link>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-green-700">
            ${product.price.toFixed(2)}
          </span>

          {product.rating !== undefined && (
            <span className="flex items-center gap-1 text-sm text-amber-500">
              <FaStar />
              {product.rating.toFixed(1)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          <IoCartOutline size={20} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
