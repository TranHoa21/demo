import React, { useState, useEffect } from "react";
import "../../style/menu/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Cart = ({ userId }) => {
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/v1/cart_item');
                const filteredData = response.data.filter(item => item.user_id === userId);
                setCartData(filteredData);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.error(err);
            }
        };

        fetchData();
    }, [userId]);

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <div className="cart-container">
                {/* Render the cart data here */}
                {cartData.map(item => (
                    <div key={item.id}>{item.name} - {item.quantity}</div>
                ))}
            </div>
        </>
    );
}

export default Cart;
