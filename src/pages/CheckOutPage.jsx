import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

function CheckOutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", phone: "", delivery: "Нова Пошта", payment: "Оплата при отриманні" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const validateForm = () => {
    const errors = {};
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegEx = /^\+380\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/;

    if (!formData.email || !emailRegEx.test(formData.email)) {
      errors.email = "Введіть правильний email.";
    }
    if (!formData.phone || !phoneRegEx.test(formData.phone)) {
      errors.phone = "Введіть телефон у форматі +380(XX) XXX-XX-XX.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      clearCart();
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="container my-4">
      {successMessage && (
        <div
          className="alert alert-success position-fixed top-25 start-50 translate-middle-x w-100 text-center"
          style={{ zIndex: 1050 }}
        >
          Покупка успішно оформлена!
        </div>
      )}
      <h2>Оформлення замовлення</h2>
      {cart.length > 0 ? (
        <>
          <ul className="list-group mb-4" style={{ maxWidth: "800px" }}>
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover" }}/>
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                </div>
                <strong>{item.price * item.quantity} грн</strong>
              </li>
            ))}
          </ul>
          <h5>
            <strong>Сума товарів:</strong>{" "}
            {cart.reduce((total, item) => total + item.price * item.quantity, 0)} грн
          </h5>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3" style={{ maxWidth: "500px" }}>
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                placeholder="Введіть email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ padding: "10px", border: "1px solid #ced4da", borderRadius: "5px" }}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-5" style={{ maxWidth: "500px" }}>
              <label className="form-label">Телефон</label>
              <InputMask
                mask="+380(99) 999-99-99"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                value={formData.phone}
                placeholder="+380(__) ___-__-__"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ padding: "10px", border: "1px solid #ced4da", borderRadius: "5px" }}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <div className="mb-5">
              <label className="form-label">
                <strong>Доставка</strong>
              </label>
              <div>
                {["Нова Пошта", "УкрПошта", "Meest Express"].map((option) => (
                  <div className="form-check" key={option}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="delivery"
                      id={`delivery-${option}`}
                      value={option}
                      checked={formData.delivery === option}
                      onChange={(e) => setFormData({ ...formData, delivery: e.target.value })}
                    />
                    <label className="form-check-label" htmlFor={`delivery-${option}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <label className="form-label">
                <strong>Форма оплати</strong>
              </label>
              <div>
                {["Оплата при отриманні", "Онлайн оплата"].map((option) => (
                  <div className="form-check" key={option}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id={`payment-${option}`}
                      value={option}
                      checked={formData.payment === option}
                      onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                    />
                    <label className="form-check-label" htmlFor={`payment-${option}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn btn-primary w-100" type="submit" style={{maxWidth: "500px", padding: "10px"}}>
              Підтвердити покупку
            </button>
          </form>
        </>
      ) : (
        <div className="text-center my-4">
          <p>Ваш кошик порожній.</p>
          <button className="btn btn-primary" type="button" onClick={() => navigate("/")}>
            Повернутися до покупок
          </button>
        </div>
      )}
    </div>
  );
}

export default CheckOutPage;