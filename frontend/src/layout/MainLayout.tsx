import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../component/context/CartContext";

export default function MainLayout() {
  return (
    <>
      <CartProvider>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </CartProvider>
    </>
  );
}
