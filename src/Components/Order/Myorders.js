import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Myorders = () => {
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const URL = `https://techdips-com.onrender.com/order/orderuserdetail/${userId}`;
    const addCart = axios.get(URL);
    addCart.then((res) => {
      setData(res.data.result);
    });
  });
  return (
    <div>
      {data.map((post) => {
        const { id, name, image, price, oPrice, ratting } = post;
        return (
          <>
            <div className="main-content">
              <NavLink to={`/article/${id}`}>
                <img
                  src={image}
                  width={200}
                  height={200}
                  alt={"img not found"}
                />

                <div className="content">
                  <h3 className="cotent-tittle">{name}</h3>
                  <br />
                  <img
                    src={ratting}
                    alt="images not found"
                    width="100px"
                    height="50px"
                  ></img>
                  <br />

                  <p className="price">{price}...</p>
                  <br />

                  <p className="mrp">{oPrice}</p>
                  <br />
                </div>
              </NavLink>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Myorders;
