import { MdOutlineClose } from "react-icons/md";
import randomImg from "../assets/images/products/2.jpg";
import Button from "./Button";

export default function WishlistSidebar({ toggleSidebar, sidebarOpen }) {
  return (
    <>
      <aside
        className={`${
          sidebarOpen ? "right-0" : "-right-[448px]"
        } fixed top-0 h-screen text-gray-100 max-w-md bg-deep-300 w-full z-20 transition-all duration-200`}
      >
        <button
          className="p-1 bg-deep-100 rounded-md top-2 left-2 relative hover:bg-deep-200 shadow-xl duration-200 transition-all"
          onClick={toggleSidebar}
        >
          <MdOutlineClose size={26} />
        </button>
        <div className="mt-6 px-2">
          <ul className="flex flex-col gap-4 overflow-y-scroll h-[90vh] hide_scrollbar">
            {Array.from({ length: 20 }).map((_, i) => {
              return (
                <li
                  key={i}
                  className="flex px-2 py-4 bg-deep-100 rounded-md gap-3"
                >
                  <figure className="w-36 h-36 rounded-md overflow-hidden">
                    <img src={randomImg} alt="img" />
                  </figure>
                  <div className="grow flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h4 className="text-xl capitalize font-medium text-gray-100">
                        My wishlisted product
                      </h4>
                      <MdOutlineClose size={26} />
                    </div>
                    <p className="text-accent-200">$49</p>
                    <Button className="text-deep-300 bg-accent-200 hover:bg-accent-300 mt-auto text-xs">
                      Add to cart
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      {/* overlay */}
      <div
        role="button"
        onClick={toggleSidebar}
        className={`${
          sidebarOpen ? "block" : "hidden"
        } fixed w-full h-screen top-0 left-0 bg-black/20 z-10`}
      ></div>
    </>
  );
}
