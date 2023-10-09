import { Link } from "react-router-dom";

export default function Button({ children, className, onClick, type, as, to }) {
  const classes = "px-8 py-4 font-bold text-base uppercase rounded-xl";

  if (as === "link") {
    return (
      <Link to={to} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${classes} ${className}`}>
      {children}
    </button>
  );
}
