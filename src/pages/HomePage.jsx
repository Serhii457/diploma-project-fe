import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function HomePage() {
  const {addToCart} = useContext(CartContext);

  return (
    <>
      <Header></Header>
      <main>
      {/* Блок */}
      <section className="banner bannerStyle">
        <h1>Ласкаво просимо до нашого магазину!</h1>
        <p>Знайдіть найкращі товари за доступними цінами.</p>
      </section>

      {/* Block */}
      <div className="row banners-wrap">
        <div className="col-lg-8 col-md-12 p-0 banner">
          <a href="/woman" className="w-100 h-100 d-block">
            <img width="1268" height="786" src="/banner-w.png" alt="Баннер 1" className="img-fluid"/>
          </a>
          <div className="banner-html">
            <a href="/man" className="w-100 h-100 d-block">
            <div className="h1">Жінкам</div>
            </a>
            <a href="/woman">Перейти до розділу</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 p-0 banner">
          <a href="/man" className="w-100 h-100 d-block">
          <img width="634" height="786" src="/banner-m.png" alt="Баннер 2" className="img-fluid"/>
          </a>
          <div className="banner-html">
            <a href="/man" className="w-100 h-100 d-block">
            <div className="h1">Чоловікам</div>
            </a>
            <a href="/man">Перейти до розділу</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 p-0 banner">
          <a href="/aksessuary" className="w-100 h-100 d-block">
          <img width="634" height="786" src="/banner-aks.jpg" alt="Баннер 3" className="img-fluid"/>
          </a>
          <div className="banner-html">
            <a href="/aksessuary" className="w-100 h-100 d-block">
            <div className="h1">Аксесуари</div>
            </a>
            <a href="/aksessuary">Перейти до розділу</a>
          </div>
        </div>

        <div className="col-lg-8 col-md-12 p-0 banner">
          <a href="/kids" className="w-100 h-100 d-block">
          <img width="1268" height="786" src="/banner-kid.png" alt="Баннер 4" className="img-fluid"/>
          </a>
          <div className="banner-html">
            <a href="/kids" className="w-100 h-100 d-block">
            <div className="h1">Дітям</div>
            </a>
            <a href="/kids">Перейти до розділу</a>
          </div>
        </div>
      </div>

      {/* Block */}
      <div className="banner-aboutUs">
        <div className="container">
          <p className="title text-center">CLOTHES - інтернет-магазин, якому довіряють</p>
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-6 col-lg-3 mb-4 position-relative">
              <p className="subtitle">Авторитетна компанія</p>
              <div>Компанія заснована у м. Чернівці у 2022 році. На даний момент ми маємо мережу з 15 точок продажу.</div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4 position-relative border-start-lg">
              <p className="subtitle">Доступні ціни</p>
              <div>Продумана цінова політика дозволяє компанії встановлювати мінімальні ціни</div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4 position-relative border-start-lg">
              <p className="subtitle">Комфортна покупка</p>
              <div>Для замовлення в інтернет-магазині Clothes вам знадобиться зробити всього 3 прості кроки.</div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4 position-relative border-start-lg">
              <p className="subtitle">Швидка доставка</p>
        <div>Після підтвердження деталей ми відразу ж займемося упаковкою вашого замовлення і того ж дня відправимо через Нову Пошту</div>
      </div>
    </div>
  </div>
</div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default HomePage;
