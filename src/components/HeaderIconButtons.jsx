import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function HeaderIconButtons({ toggleSidebar }) {
  const bookmark = useSelector((state) => state.bookmark.bookmarkedProducts);

  return (
    <div className=" flex items-center gap-6 md:gap-10 ">
      <button className="relative" onClick={toggleSidebar}>
        <AiOutlineHeart size={26} className="text-gray-100" />

        <div className="absolute -top-3 -right-2 px-1.5 rounded-md bg-accent-200">
          <span className="text-sm">{bookmark.length}</span>
        </div>
      </button>

      <Link to="/cart" className="relative">
        <AiOutlineShoppingCart size={26} className="text-gray-100" />
        <div className="absolute -top-3 -right-2 px-1.5 rounded-md bg-accent-200">
          <span className="text-sm">0</span>
        </div>
      </Link>
    </div>
  );
}
