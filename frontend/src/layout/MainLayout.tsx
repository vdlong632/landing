import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../component/context/CartContext";
import { WishlistProvider } from "../component/context/WishListContext"

export default function MainLayout() {
  return (
    <>
    <WishlistProvider>
      <CartProvider>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </CartProvider>
      </WishlistProvider>
    </>
  );
}
