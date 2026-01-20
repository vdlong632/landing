import { useState } from "react";
import Cart from "./child/Cart";
import Search from "./child/Search";
import User from "./child/User";
import WishList from "./child/WishList";
import ListCart from "./child/ListCart";

const HeaderActions = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const handleCartClick = () => {
    setShowCart(prev => !prev);
  };

  return (
    <div className="action">
      <User />
      <Search />
      <WishList />
      <Cart onClick={handleCartClick} />

      {showCart && <ListCart onClose={() => setShowCart(false)} />}
    </div>
  );
};

export default HeaderActions;
