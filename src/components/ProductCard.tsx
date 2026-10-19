import { useState } from "react";
import { Link } from "react-router";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useStore } from "../store/useStore";
import type { Product } from "../services/api";
interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const addToCart = useStore((state) => state.addToCart);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = useStore((state) =>
    state.favorites.includes(product.id)
  );
  const image = product.thumbnail || product.images?.[0];
  const isOutOfStock =
    product.stock !== undefined && product.stock <= 0;
  const category = product.category
    .replaceAll("-", " ")
    .replaceAll("_", " ");
  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addToCart(product);
  };
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-50 p-5">
        {image && !imageError ? (
          <img
            src={image}
            alt={product.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-400">
            <FaShoppingCart size={32} />
            <span className="text-sm">Image unavailable</span>
          </div>
        )}
        <button
          type="button"
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          aria-pressed={isFavorite}
          onClick={() => toggleFavorite(product.id)}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110 ${
            isFavorite
              ? "text-red-500"
              : "text-slate-400 hover:text-red-500"
          }`}
        >
          <FaHeart
            size={17}
            className={isFavorite ? "scale-110" : ""}
          />
        </button>
        {isOutOfStock && (
          <span className="absolute bottom-3 left-3 rounded-full bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600">
            Out of stock
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold capitalize tracking-wide text-green-700">
          {category}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="mt-2 line-clamp-2 min-h-12 font-bold leading-6 text-slate-800 transition-colors hover:text-green-700"
        >
          {product.title}
        </Link>
        <div className="mt-3 flex items-center gap-2 text-sm">
          <FaStar className="shrink-0 text-amber-400" />
          <span className="font-semibold text-slate-700">
            {typeof product.rating === "number"
              ? product.rating.toFixed(1)
              : "N/A"}
          </span>
          <span className="text-slate-400">Rating</span>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div className="min-w-0">
            <p className="text-xl font-extrabold text-slate-900">
              ${product.price.toFixed(2)}
            </p>
            {product.stock !== undefined && (
              <p
                className={`mt-1 text-xs ${
                  isOutOfStock
                    ? "font-medium text-red-500"
                    : "text-slate-500"
                }`}
              >
                {isOutOfStock
                  ? "Currently unavailable"
                  : `${product.stock} in stock`}
              </p>
            )}
          </div>

          <button
            type="button"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to cart`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white transition-all duration-200 hover:scale-105 hover:bg-green-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:hover:scale-100"
          >
            <FaShoppingCart size={17} />
          </button>
        </div>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 block rounded-xl border border-green-600 py-2.5 text-center text-sm font-bold text-green-700 transition-colors hover:bg-green-600 hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
