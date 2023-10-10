import { useState } from "react";
import { BsFillGrid3X3GapFill, BsHddStack } from "react-icons/bs";
import { products } from "../assets/data/ProductsData";
import SingleProductCard from "./SingleProductCard";

export default function ProductGrid() {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="flex flex-col gap-6 grow">
      <div className="flex justify-end gap-6 items-center border-b border-b-gray-600 pb-4">
        <span>Select your view Choice:</span>

        <div className="flex gap-4">
          <button
            className={`${isGrid ? "bg-deep-300" : ""} p-2 rounded-md`}
            onClick={() => setIsGrid(true)}
          >
            <BsFillGrid3X3GapFill />
          </button>
          <button
            className={`${!isGrid ? "bg-deep-300" : ""} p-2 rounded-md`}
            onClick={() => setIsGrid(false)}
          >
            <BsHddStack />
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
