export default function SingleProductStack({ product }) {
  return (
    <li className="bg-deep-300 p-4 rounded-lg">
      <figure className="">
        <img
          className="aspect-square w-40 bg-white rounded-lg"
          src={product.img}
          alt={product.description}
        />
      </figure>
    </li>
  );
}
