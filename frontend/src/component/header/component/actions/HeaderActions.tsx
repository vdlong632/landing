import { Link } from "react-router-dom"
import Cart from "./child/Cart"
import Search from "./child/Search"
import User from "./child/User"
import WishList from "./child/WishList"
const HeaderActions = () => {
    return (
        <div className="action">
            <Link to="/profile"><User/></Link>
            <Search/>
            <WishList/>
            <Cart/>
        </div>
    )
}
export default HeaderActions