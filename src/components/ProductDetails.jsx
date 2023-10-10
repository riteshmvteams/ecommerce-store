import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/data/ProductsData";

export default function ProductDetails() {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [currentImg, setCurrentImg] = useState("");

  //   console.log(productImages);

  const changeImage = (img) => {
    setCurrentImg(img);
  };

  useEffect(() => {
    const matchedProduct = products.find((pro) => pro.id == id);
    setCurrentProduct(matchedProduct);
    setProductImages([matchedProduct.img, ...matchedProduct.otherImgs]);
    setCurrentImg(matchedProduct.img);
  }, [id]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-gray-100 flex">
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
        <div className="flex-1">right</div>
      </div>
    </section>
  );
}
