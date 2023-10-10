import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addBookmark } from "../redux/features/bookmarkSlice";
import { useState } from "react";

export default function SingleProductCard({ product }) {
  const [isBookrmarked, setIsBookmarked] = useState(false);
  const dispatch = useDispatch();

  // book.forEach((bk) => {
  //   if (bk.id == product.id) {
  //     setIsBookmarked(true);
  //   }
  // });

  const toggleBookmark = (productObj) => {
    const modifiedObj = { ...productObj, bookmark: true };
    dispatch(addBookmark(modifiedObj));

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
        onClick={() => toggleBookmark(product)}
      >
        {isBookrmarked ? (
          <AiFillHeart size={28} fill="red" />
        ) : (
          <AiOutlineHeart size={28} fill="red" />
        )}
      </button>
    </li>
  );
}
