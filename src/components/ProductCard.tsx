import { useStore } from "../store/useStore";
type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  unit: string;
  discount: string;
  rating: string;
  reviews: string;
  image: string;
  onAddToCart: () => void;
};

const ProductCard = ({
  name,
  price,
  oldPrice,
  unit,
  discount,
  rating,
  reviews,
  image,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="absolute left-3 top-3 z-10 rounded-md bg-orange-100 px-2 py-1 text-xs font-bold text-orange-600">
        {discount} OFF
      </div>

      <div className="flex h-[190px] w-full items-center justify-center overflow-hidden bg-white">
        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
          className="h-[140px] w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="border-t border-gray-100 px-4 py-4">
        <h3 className="line-clamp-1 text-sm font-semibold text-gray-900">
          {name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <span className="text-sm text-yellow-500">★</span>
          <span className="text-xs font-medium text-gray-700">
            {rating}
          </span>
          <span className="text-xs text-gray-400">
            ({reviews})
          </span>
        </div>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="flex min-w-0 flex-wrap items-baseline gap-2">
            <span className="text-base font-bold text-gray-900 sm:text-lg">
              {price}
              <span className="ml-1 text-xs font-normal text-gray-500">
                /{unit}
              </span>
            </span>

            <span className="text-xs text-gray-400 line-through">
              {oldPrice}
            </span>
          </div>

          <button
            type="button"
            onClick={onAddToCart}
            aria-label={`Add ${name} to cart`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl font-medium leading-none text-white transition hover:scale-105 hover:bg-amber-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;