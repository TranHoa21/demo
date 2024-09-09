import React, { useState, useEffect } from "react";
import "../../style/menu/menuitem.scss"
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
    const chunkedData = [];
    for (let i = 0; i < menuData.length; i += 4) {
        chunkedData.push(menuData.slice(i, i + 4));
    }
    return (
        <>
            <div className="sp-container">
                {chunkedData.map((chunk, index) => (
                    <div key={index} className="sp-menu row">
                        {chunk.map(item => (

                            <div key={item.id} className="sp-menu-item col-sm-3">
                                <img className="sp-image" src={item.img} alt={item.name} />
                                <h5 className="sp-menu-item-title">{item.name}</h5>
                                <div className="list-product-item-star">
                                    <p className="list-product-item-price">Price: ${item.price}</p>
                                    <div className="list-product-item-review">
                                        <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                    </div>

                                </div>
                            </div>

                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
export default MenuItem;