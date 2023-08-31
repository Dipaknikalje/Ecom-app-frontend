import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import Footer from "../Footer/Footer";
import AddToCart from "../Cart/AddtoCart";

function ProductDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://techdips-com.onrender.com/products/fetchdata")
      .then((res) => {
        setData(res.data.result);
        // console.log(res.data.result)
      });
  });

  console.log(data);
  // console.log(data._id)
  var { Id } = useParams();
  Id = +Id;
  // var newCategory;
  for (var i = 0; i < data.length; i++) {
    if (data[i].ids === Id) {
      // newCategory = data[i].category;
      break;
    }
  }

  return (
    <div>
      {data
        .filter((val) => val.ids === Id)
        .map((value, index) => {
          return (
            <div key={index}>
              <div className="ecom_cntnr ">
                <div className="PD_title">{value.name}</div>
                <div className="PDFlex">
                  <div className="detail_cntnr">
                    <div className="pd-img-cntnr">
                      <img
                        src={value.image}
                        alt="no internet"
                        className="pDImg"
                      />
                    </div>
                    <div className="pd_text_cntnr">
                      <div className="pd_text_sub_cntnr">
                        <div>Price: ₹ {value.price}</div>
                        <div>
                          Rating:
                          <img src={value.ratting} alt="loading" />
                        </div>
                        <div>Quantity Available: {value.quantity}</div>
                        {/* <button className='addCartBtn' onClick={handleCart}>Add to cart</button> */}
                        <AddToCart item={value} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      <div className="pd_hr_cntr">
        {" "}
        <hr className="pd_hr" />
      </div>
      <div className="similar-prod">Similar Products</div>
      <div className="FeaturedCntnr">
        <div className="FeaturedSubCntnr">
          {data
            .filter((item) => item.ids === Id)
            .slice(0, 4)
            .map((item, index) => {
              return (
                <div className="Featcard" key={item.ids}>
                  {/* {console.log(index)} */}
                  <div className="Featcard">
                    <img
                      // onClick={()=>handleDetail(item)}
                      src={item.image}
                      alt="slow internet"
                    />

                    <div
                      // onClick={()=>handleDetail(item)}
                      className="product_title"
                    >
                      {item.name}
                    </div>
                    <p>Price: ₹{item.price}</p>
                    {/* <button
              //  onClick={()=>{dispatch(itemCount())}}
               >add to cart</button> */}
                    <AddToCart item={item} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
