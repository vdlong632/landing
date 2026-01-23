import { useState } from "react";
import HeaderActions from "./component/actions/HeaderActions";
import Logo from "./component/logo/Logo";
import Navigation from "./component/navigation/Navigation";
import MobileDrawer from "../drawer/MobileDrawer";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <Logo />
      <Navigation />
      <HeaderActions />
      <button className="btn-toggle" onClick={() => setOpen(true)}>
        ☰
      </button>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
export default Header;
