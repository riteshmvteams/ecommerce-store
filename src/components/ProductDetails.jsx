import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { products } from "../assets/data/ProductsData";
import Button from "./Button";

export default function ProductDetails() {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [currentImg, setCurrentImg] = useState("");
  const [productCount, setProductCount] = useState(1);

  console.log(currentProduct);

  const changeImage = (img) => {
    setCurrentImg(img);
  };

  const decreaseCount = () => {
    if (productCount === 1) return;
    setProductCount((prev) => prev - 1);
  };

  const increaseCount = () => {
    setProductCount((prev) => prev + 1);
  };

  useEffect(() => {
    const matchedProduct = products.find((pro) => pro.id == id);
    setCurrentProduct(matchedProduct);
    setProductImages([matchedProduct.img, ...matchedProduct.otherImgs]);
    setCurrentImg(matchedProduct.img);
  }, [id]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-gray-100 flex gap-6">
        {/* left */}
        <div className="flex-1 flex flex-col justify-center bg-deep-100 xl:items-center">
          <figure className="border-b-4 border-b-deep-300 xl:w-4/5">
            <img
              className="w-full h-full object-cover aspect-square"
              src={currentImg}
              alt={currentProduct?.description}
            />
          </figure>
          <ul className="flex gap-2">
            {productImages?.map((img, i) => {
              return (
                <li
                  key={i}
                  role="button"
                  onMouseEnter={() => changeImage(img)}
                  onTouchStart={() => changeImage(img)}
                >
                  <img
                    className="w-28 aspect-square object-cover"
                    src={img}
                    alt="product-img"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        {/* right */}
        <div className="flex-1 sticky top-0">
          <h2 className="text-4xl font-semibold">Product Title</h2>

          <p className="text-2xl text-accent-200 font-semibold">
            ${currentProduct?.price}
          </p>

          <p className="text-base tracking-wide font-light text-justify leading-6 mt-4">
            {currentProduct.specs}
          </p>

          <ul className="flex flex-col gap-4 mt-6">
            <li className="flex items-center">
              <span className="w-28 ">Category:</span>
              <span className="text-accent-200 hover:text-accent-300 rounded-md font-normal inline-block py-1 px-3 bg-deep-300 w-max">
                {currentProduct.category}
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-28 ">Size:</span>
              <span className="text-accent-200 hover:text-accent-300 rounded-md font-normal inline-block py-1 px-3 bg-deep-300 w-max">
                {currentProduct.size}
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-28 ">Texture:</span>
              <span className="text-accent-200 hover:text-accent-300 rounded-md font-normal inline-block py-1 px-3 bg-deep-300 w-max">
                {currentProduct.texture}
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-28 ">Weight:</span>
              <span className="text-accent-200 hover:text-accent-300 rounded-md font-normal inline-block py-1 px-3 bg-deep-300 w-max">
                {currentProduct?.weight}
              </span>
            </li>
          </ul>

          <div className="flex gap-4 mt-8">
            <div className="flex-1 flex items-center bg-deep-300 rounded-md overflow-hidden">
              <button
                className=" h-full px-4 hover:bg-deep-100"
                onClick={decreaseCount}
              >
                <AiOutlineMinus />
              </button>
              <span className="inline-block w-full text-center">
                {productCount}
              </span>
              <button
                className="h-full px-4 hover:bg-deep-100"
                onClick={increaseCount}
              >
                <AiOutlinePlus />
              </button>
            </div>

            <Button className="bg-deep-300 hover:bg-deep-100 text-accent-200 hover:text-accent-300 flex-[2] flex items-center justify-center gap-2 font-medium">
              <span>
                <BsCartPlus size={24} strokeWidth="0.25px" />
              </span>
              <span>Add to cart</span>
            </Button>
          </div>

          <Button className="text-deep-300 bg-violet-400 hover:bg-violet-500 w-full mt-2">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
}
