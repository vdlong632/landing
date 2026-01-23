import { useWishlist } from "../../../component/context/WishListContext";
import WishItem from "./WishItem";

const WishList = () => {
  const { wishlistItems } = useWishlist();

  return (
    <div className="shopping-cart-modal">
      <div className="cart-items-list">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <WishItem key={item.id} item={item}/>
          ))
        ) : (
          <p className="empty-wishlist">Danh sách yêu thích trống</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
