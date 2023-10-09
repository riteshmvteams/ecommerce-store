import { createBrowserRouter, RouterProvider } from "react-router-dom";
// PAGES
import AppLayout from "./layout/AppLayout";
import {
  AboutPage,
  ContactPage,
  Error,
  HomePage,
  LoginPage,
  Products,
  RegisterPage,
  SingleProduct,
} from "./pages";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
