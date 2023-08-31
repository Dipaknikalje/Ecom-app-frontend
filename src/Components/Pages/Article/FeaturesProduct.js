import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import AddToCart from "../../Cart/AddtoCart";
import { NavLink } from "react-router-dom";
import "./featured.css";

function FeaturedProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const API = `https://techdips-com.onrender.com/products/fetchdata`;
    axios
      .get(API)
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="FeaturedHomeCntnr">
        <div className="FeaturedSubCntnr">
          {data
            .filter((item) => item.ids >= 1 && item.ids <= 8)
            .map((item, itemIndex) => (
              <div key={itemIndex} className="Featcard">
                <NavLink to={`/article/${item.ids}`} className="Featcard-data">
                  <img src={item.image} alt="Product" />
                  <div className="product_title">{item.name}</div>
                  <p>Price: ₹{item.price}</p>
                </NavLink>
                <AddToCart item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
