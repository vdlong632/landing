import { Link } from "react-router-dom";

const Footer = () => {
  const links = ["Home", "Shop", "About", "Contact"];
  const help = ["Payment Options", "Returns", "Privacy Policies"];

  return (
    <footer className="container footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Funiro.</h2>
          <p>400 University Drive Suite 200 Coral Gables, <br/> FL 33134 USA</p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            {links.map(item => <Link to={item.toLowerCase()} key={item}>{item}</Link>)}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            {help.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>2023 furino. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer