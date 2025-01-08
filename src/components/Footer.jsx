import React from "react";

function Footer() {
  return (
    <>
      <div className="myFooterStyle">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-2 mb-3">
                <h5>Категорії</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="/man" className="nav-link p-0 text-body-secondary">Чоловіки</a></li>
                  <li className="nav-item mb-2"><a href="/woman" className="nav-link p-0 text-body-secondary">Жінки</a></li>
                  <li className="nav-item mb-2"><a href="/kids" className="nav-link p-0 text-body-secondary">Діти</a></li>
                  <li className="nav-item mb-2"><a href="/aksessuary" className="nav-link p-0 text-body-secondary">Аксесуари</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Подарункові сертифікати</a></li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-md-2 mb-3">
                <h5>Інформація</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Доставка</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Вакансії</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Контакти</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Реферальна програма</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Співпраця</a></li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-md-2 mb-3">
                <h5>Служба підтримки</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Питання і відповіді</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Повернення</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Обмін</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Контакти</a></li>
                </ul>
              </div>

              <div className="col-12 col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2025 Clothes Online Shop. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-body-emphasis" href="https://twitter.com" target="_blank"><i className="bi bi-twitter"></i></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="https://instagram.com" target="_blank"><i className="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="https://facebook.com" target="_blank"><i className="bi bi-facebook"></i></a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;