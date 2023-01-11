/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import { Link } from "react-router-dom";
export default function Header() {
  const afterClick = () => {
    document.getElementById("nav-check").checked = false;
  };
  return (
      <div className="nav">
        {/* <input type="checkbox"/> */}
        <div className="nav-title" id="nav-check">
          {/* <div className="nav-title"> */}
            <img
              src="https://kalvium.community/images/logo_min.svg"
              alt="logo"
              id="logoImg"
            />
            <h1 id="logoName">kalvium Books</h1>
          {/* </div> */}
        </div>
         <div id="nav-links" className="nav-links">
          <Link to="/">
            <h3 className="home" onClick={() => afterClick()}>
              Home
            </h3>
          </Link>
          <Link to="/form">
            <h3 className="regi" onClick={() => afterClick()}>
              Register
            </h3>
          </Link>
        </div>
      </div>
  );
}
