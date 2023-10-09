import SingleProductCard from "./SingleProductCard";
import Title from "./Title";
import { products } from "../assets/data/ProductsData";

export default function RecommendedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* top title */}
        <div className="mb-10">
          <Title>our Trending Products</Title>
        </div>
        {/* recommended products */}
        <div>
          <ul className="flex flex-col md:flex-row gap-6 lg:gap-12">
            {products.slice(4, 7).map((product) => {
              return <SingleProductCard key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
