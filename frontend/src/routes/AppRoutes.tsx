import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error"
import Shop from "../pages/shop/Shop"
import User from "../component/header/component/actions/child/User";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<User />} />
        
        
      </Route>

      {/* Trang lỗi */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
