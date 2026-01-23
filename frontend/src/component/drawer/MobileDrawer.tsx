import { Link } from "react-router-dom";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: Props) {
    return (
        <div className={`drawer-overlay ${open ? "show" : ""}`}>
            <div className="drawer">
                <button className="drawer__close" onClick={onClose}>
                    ✕
                </button>

                <ul className="drawer__menu">
                    <li>
                        <Link to="/" onClick={onClose}>Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" onClick={onClose}>Shop</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={onClose}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={onClose}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={onClose}>Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
