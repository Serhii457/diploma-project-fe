import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="container my-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-3">
            <h2>Кошик</h2>
            <div className="cartCounter">{totalItems}</div>
          </div>
          <button className="btn btn-danger" onClick={clearCart}>
            Очистити кошик
          </button>
        </div>

        {cart.length > 0 ? (
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center gap-3"
              >
                <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100px", cursor: "pointer"}}
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="img-fluid"
                  />
                  <div>
                    <h5
                      className="mb-3 text-truncate"
                      onClick={() => navigate(`/product/${item.id}`)}
                      style={{ maxWidth: "250px", cursor: "pointer" }}
                    >
                      {item.name}
                    </h5>
                    <p className="mb-2">
                      <strong>Ціна:</strong> {item.price} грн
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <strong>Кількість:</strong>
                      <button className="btn btn-outline-secondary" onClick={() => removeFromCart(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="btn btn-outline-secondary" onClick={() => addToCart(item)}>+</button>
                    </div>
                    <button className="btn btn-outline-primary mt-3" onClick={() => removeFromCart(item.id)}>
                      Видалити з кошику
                    </button>
                  </div>
                </div>
                <p className="text-center text-md-end">
                  <strong>Загальна сума:</strong> {item.price * item.quantity} грн
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center my-4">
            <p>В кошику немає товарів.</p>
            <button className="btn btn-primary" type="button" onClick={() => navigate("/")}>
              Продовжити покупки
            </button>
          </div>
        )}

        {cart.length > 0 && (
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 gap-3">
            <h5>
              <strong>Сума товарів:</strong>{" "}
              {cart.reduce((total, item) => total + item.price * item.quantity, 0)}{" "}
              грн
            </h5>
            <div className="d-flex flex-column flex-md-row gap-3">
              <button className="btn btn-secondary" type="button" onClick={() => navigate("/")}>
                Продовжити пошук
              </button>
              <button className="btn btn-primary" type="button" onClick={() => navigate("/checkout")}>
                Оформити покупку
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;