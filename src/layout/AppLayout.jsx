import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
