import React, { useState, useEffect } from "react";
import "../style.css";

function Shopping({ cartItems, removeFromCart }) {
  const [shoppings, setShoppings] = useState([]);

  useEffect(() => {
    setShoppings(cartItems);
  }, [cartItems]);

  // const removeFromCart = (id) => {
  //   const updatedCartItems = shoppings.filter((item) => item.id !== id);
  //   setShoppings(updatedCartItems);
  //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  // };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <br />
      <br />
      <br />
      <div className="common">
        <table className="table">
          <thead className="table table-dark">
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Org Price</th>
              <th>DiscountPercentage</th>
              <th>DiscountPrice</th>
              <th>Vendor</th>
              <th>Remove Cart</th>
            </tr>
          </thead>
          <tbody>
            {
            // shoppings.length > 0
            //   ? 
            shoppings.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.DiscountPercentage}</td>
                    <td>{item.DiscountPrice}</td>
                    <td>{item.vendor}</td>
                    <td className="bttnremovetd">
                      <button type="button" className="bttnremove" onClick={() => removeFromCart(item.id)}>
                        Remove Cart
                      </button>
                    </td>
                  </tr>
                ))
              // : shopData?.map((item, index) => (
              //     <tr key={index}>
              //       <td>{item.id}</td>
              //       <td>{item.name}</td>
              //       <td>{item.price}</td>
              //       <td>{item.DiscountPercentage}</td>
              //       <td>{item.DiscountPercentage}</td>
              //       <td>{item.vendor}</td>
              //       <td className="bttnremovetd">
              //         <button type="button" className="bttnremove">
              //           Remove Cart
              //         </button>
              //       </td>
              //     </tr>
              //   ))
            }
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <h1 className="mb-5">Total Price : Rs.{shoppings.reduce((total, item) => total + item.DiscountPrice, 0)}</h1>
    </div>
  );
}

export default Shopping;
