import React, { useContext, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from '../components/ProductList';
import { CartContext } from "../context/CartContext";

function Aksessuary(props) {
    const { addToCart } = useContext(CartContext);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <>
        <Header></Header>
            <section className="products">
                <div className="container">
                    <h2 className="my-4 text-center">Аксесуари</h2>
                    
                    <div className="d-flex justify-content-end align-items-center mb-4">
                        <h5 className="me-3 text-muted">Сортувати:</h5>
                        <select className="form-select w-auto shadow-sm"
                                value={sortOrder}
                                onChange={handleSortChange}
                        >
                            <option value="asc">Ціна: від дешевшого до дорожчого</option>
                            <option value="desc">Ціна: від дорожчого до дешевшого</option>
                        </select>
                    </div>
                    
                    <div className="row">
                        <ProductList category="aksessuary" onAddToCart={addToCart} sortOrder={sortOrder} />
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}

export default Aksessuary;