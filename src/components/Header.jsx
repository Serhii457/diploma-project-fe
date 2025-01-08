import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="header" className="sticky-top bg-light shadow text-primary">
      <div className="container d-flex align-items-center justify-content-between py-3">
        
        <button className="navbar-toggler d-lg-none border-0 bg-transparent"
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}>
          <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" />
        </button>

        <div className="logo d-flex align-items-center">
          <Link to="/" className="text-decoration-none">
            <h1 className="sitename text-primary fw-bold mb-0" style={{ fontSize: "1.8rem" }}>
              Clothes
            </h1>
          </Link>
        </div>

        <nav className="d-none d-lg-flex">
          <ul className="list-unstyled d-flex gap-4 mb-0">
            <li><Link to="/man" className="text-decoration-none">Чоловіки</Link></li>
            <li><Link to="/woman" className="text-decoration-none">Жінки</Link></li>
            <li><Link to="/kids" className="text-decoration-none">Діти</Link></li>
            <li><Link to="/aksessuary" className="text-decoration-none">Аксесуари</Link></li>
            <li><Link to="#" className="text-decoration-none">Sale</Link></li>
            <li><Link to="#" className="text-decoration-none">New</Link></li>
            <li><Link to="#" className="text-decoration-none">Контакти</Link></li>
          </ul>
        </nav>

        <div className="d-flex gap-3 align-items-center">
          <div className="telefone d-flex align-items-center gap-2">
            <a href="tel:0-800-123-456">
              <FontAwesomeIcon icon="fa-solid fa-phone" size="2x" />
            </a>
            <a href="tel:0-800-123-456" className="text-decoration-none">
              <span className="d-none d-lg-inline">
                0-800-123-456
              </span>
            </a>
          </div>

          <div id="cart" className="position-relative">
            <Link to="/cart">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="2x" />
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu bg-light position-fixed top-0 start-0 w-75 h-100 d-lg-none ${
          isMenuOpen ? "show" : "d-none"
        }`}
        style={{ zIndex: 1050 }}
      >
        <div className="container h-100 d-flex flex-column">
          
          <button
            className="navbar-toggler border-0 bg-transparent align-self-start mt-3"
            type="button"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon="fa-solid fa-times" size="lg" />
          </button>

          <ul className="list-unstyled d-flex flex-column gap-4 mt-5">
            <li><Link to="/man" className="text-decoration-none" onClick={() => setIsMenuOpen(false)}>Чоловіки</Link></li>
            <li><Link to="/woman" className="text-decoration-none" onClick={() => setIsMenuOpen(false)}>Жінки</Link></li>
            <li><Link to="/kids" className="text-decoration-none" onClick={() => setIsMenuOpen(false)}>Діти</Link></li>
            <li><Link to="/aksessuary" className="text-decoration-none" onClick={() => setIsMenuOpen(false)}>Аксесуари</Link></li>
            <li><Link to="/sale" className="text-decoration-none" onClick={() => setIsMenuOpen(false)}>Sale</Link></li>
            <li><Link to="/new" className="text-decoration-none" onClick={() => setIsMenuOpen(false)}>New</Link></li>
            <li><Link to="/contact" className="text-decoration-none" onClick={() => setIsMenuOpen(false)}>Контакти</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;