import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src="LogoHouse.png" alt="" />
      <p>Furniro</p>
    </Link>
  );
};
export default Logo;
