import { useState } from "react";
import { BsFillGrid3X3GapFill, BsHddStack } from "react-icons/bs";
// import { useSelector } from "react-redux";
import { products } from "../assets/data/ProductsData";
import SingleProductCard from "./SingleProductCard";

export default function ProductGrid() {
  const [isGrid, setIsGrid] = useState(true);
  // const book = useSelector((state) => state.bookmark.bookmarkedProducts);

  return (
    <div className="flex flex-col gap-6 grow">
      <div className="flex justify-end gap-6 items-center border-b border-b-gray-600 pb-4">
        <span>Select your view Choice:</span>

        <div className="flex gap-3">
          <button
            className={`${
              isGrid ? "bg-deep-300" : ""
            } p-2 rounded-md hover:bg-deep-300`}
            onClick={() => setIsGrid(true)}
          >
            <BsFillGrid3X3GapFill fill={`${isGrid ? "#FF57B6" : "white"}`} />
          </button>
          <button
            className={`${
              !isGrid ? "bg-deep-300" : ""
            } p-2 rounded-md hover:bg-deep-300`}
            onClick={() => setIsGrid(false)}
          >
            <BsHddStack fill={`${!isGrid ? "#FF57B6" : "white"}`} />
          </button>
        </div>
      </div>

      <div>
        {isGrid ? (
          <ul className="product__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6">
            {products.map((product) => {
              return <SingleProductCard key={product.id} product={product} />;
            })}
          </ul>
        ) : (
          <h1>Currently in progress</h1>
        )}
      </div>
    </div>
  );
}
