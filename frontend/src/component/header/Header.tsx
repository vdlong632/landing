import HeaderActions from "./component/actions/HeaderActions";
import Logo from "./component/logo/Logo";
import Navigation from "./component/navigation/Navigation";

const Header = () => {
  return (
    <div className="header">
      <Logo/>
      <Navigation/>
      <HeaderActions/>
    </div>
  )
};
export default Header
