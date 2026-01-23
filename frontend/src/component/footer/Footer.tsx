import { Link } from "react-router-dom";

const Footer = () => {
  const links = ["Home", "Shop", "About", "Contact", "Blog"];
  const help = ["Payment Options", "Returns", "Privacy Policies"];

  return (
    <footer className="container footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h5>Funiro.</h5>
          <p>400 University Drive Suite 200 Coral Gables, <br/> FL 33134 USA</p>
        </div>

        <div className="footer-section">
          <span>Links</span>
          <ul>
            {links.map(item => <li><Link to={item.toLowerCase()} key={item}>{item}</Link></li>)}
          </ul>
        </div>

        <div className="footer-section help">
          <span>Help</span>
          <ul>
            {help.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="footer-newsletter">
          <span>Newsletter</span>
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