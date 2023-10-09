import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function SingleProductCard({ product }) {
  const [isBookrmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <li className="flex-1 p-6 rounded-lg bg-deep-100 relative">
      <Link to={`/products/${product.id}`}>
        <figure className="">
          <img src={product.img} alt={product.description} />
        </figure>
        <h4 className="mt-4 mb-2 text-xl text-center text-gray-100">
          {product.description}
        </h4>
        <p className="text-violet-500 text-center font-bold">
          ${product.price}
        </p>
      </Link>
      <button
        className="absolute top-1 right-1 p-2 bg-deep-300 rounded-lg"
        onClick={toggleBookmark}
      >
        {isBookrmarked ? (
          <AiFillHeart size={28} />
        ) : (
          <AiOutlineHeart size={28} />
        )}
      </button>
    </li>
  );
}
