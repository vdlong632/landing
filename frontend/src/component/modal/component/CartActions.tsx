import { Link } from "react-router-dom"

const CartActions = () => {
    return (
        <div className="cart_actions">
            <Link to="/cart"><button>Cart</button></Link>
            <Link to="/checkout"><button>Checkout</button></Link>
            <Link to="/comparison"><button>Comparison</button></Link>
        </div>
    )
}
export default CartActions