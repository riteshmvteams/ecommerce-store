export default function ProductTitle({ children }) {
  return (
    <h2 className="gradient-text text-2xl sm:text-3xl capitalize font-medium tracking-wide underline decoration-accent-300 w-max">
      {children}
    </h2>
  );
}
