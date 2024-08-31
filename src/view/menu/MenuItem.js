import React, { useState, useEffect } from "react";
import "../../style/menu/navmenu.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const MenuItem = () => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/v1/menu');
                setMenuData(response.data);
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
            <div className="sp-menu-container">
                {menuData.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.describe}</p>
                        <p>Price: ${item.price}</p>
                        <img src={item.img} alt={item.name} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default MenuItem;