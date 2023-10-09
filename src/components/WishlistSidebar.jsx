import { MdOutlineClose } from "react-icons/md";

export default function WishlistSidebar() {
  return (
    <>
      <aside className="fixed right-0 top-0 h-screen text-gray-100 max-w-md bg-deep-300 w-full z-20">
        <button className="p-1 bg-deep-100 rounded-md top-2 left-2 relative hover:bg-deep-200 shadow-xl duration-200 transition-all">
          <MdOutlineClose size={26} />
        </button>
        <div className="mt-6">hello</div>
      </aside>
      {/* overlay */}
      <div className="fixed w-full h-screen top-0 left-0 bg-black/20 z-10"></div>
    </>
  );
}
