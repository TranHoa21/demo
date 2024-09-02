import React, { useState, useEffect } from "react";
import "../../style/menu/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/v1/cart_item');
                setCartData(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    return (
        <>
            <div className="cart-container">

            </div>

        </>
    )
}
export default Cart;