import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        const foundProduct = data.products.find(
          (item) => item.id === parseInt(id, 10)
        );
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      {showMessage && (
        <div className="alert alert-success position-fixed top-0 start-50 translate-middle-x w-100 text-center"
             style={{ zIndex: 1050 }}
        >
          Додано в кошик!
        </div>
      )}

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{
                maxWidth: "100%",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <h1 className="mb-4">{product.name}</h1>
            <p className="fs-4">
              <strong>Ціна:</strong> {product.price} грн
            </p>
            <p>
              <strong>Категорія:</strong> {product.category}
            </p>
            <p>
              <strong>Опис:</strong> {product.description || "Опис відсутній."}
            </p>
            <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
              Додати в кошик
            </button>
            <br />
            <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
              Продовжити пошук
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;