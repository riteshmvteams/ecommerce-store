import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* left */}
        <div className="lg:flex-1">
          <h1 className="text-5xl sm:text-6xl font-bold max-w-sm sm:max-w-lg">
            We are changing the way people shop
          </h1>
          <p className="max-w-lg mb-10 sm:mb-14 mt-6 sm:mt-10 leading-7 tracking-wide text-[17px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <Button
            className="text-deep-300 bg-accent-200 hover:bg-accent-300"
            to="/products"
            as="link"
          >
            our products
          </Button>
        </div>

        {/* right */}
        <div className="bg-deep-100 min-h-[300px] rounded-md flex items-center justify-center lg:flex-1">
          single Product Slider
        </div>
      </div>
    </section>
  );
}
