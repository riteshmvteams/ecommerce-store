import { FilterSidebar, ProductGrid } from "../components";

export default function Products() {
  return (
    <main>
      <section className="py-20 text-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
          <FilterSidebar />
          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
