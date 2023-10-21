import React from "react";
// import Shopping from "./Shopping";
import '../style.css';

function Products({ products, addToCart, getDiscounts }) {
  
  // const [data, setData] = useState([]);
  // const [discount, setDiscount] = useState([]);
  // const [shop, setShop] = useState([]);

  // useEffect(() => {
  //   fetch("/Sample.json")
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       setData(jsonData);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   fetch("/Discount.json")
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       setDiscount(jsonData);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  // function getShoping(product){
  //   const vendorDiscounts = discount.filter(
  //     (dis) => dis.vendor === product.vendor
  //   );

  //   if (vendorDiscounts) {
  //     const firstTag = product.tags[0];
  //     const discountValue = vendorDiscounts[0][firstTag];

  //     if (discountValue !== "N/A") {
  //       product.DiscountPercentage = parseFloat(discountValue);
  //     } else {
  //       product.DiscountPercentage = 0;
  //     }
  //   }

  //   const newProductId =
  //     product.length > 0
  //       ? product[product.length - 1].id + 1
  //       : 1;
  //   product.id = newProductId;
    
  //   setShop(product);

  //   return product;
  // }

  // function getDiscounts(product) {
  //   const vendorDiscounts = discount.filter(
  //     (dis) => dis.vendor === product.vendor
  //   );

  //   if (vendorDiscounts) {
  //     const firstTag = product.tags[0];
  //     const discountValue = vendorDiscounts[0][firstTag];

  //     if (discountValue !== "N/A") {
  //       product.DiscountPercentage = parseFloat(discountValue);
  //     } else {
  //       product.DiscountPercentage = 0;
  //     }
  //   }

  //   const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  //   const newProductId =
  //     storedProducts.length > 0
  //       ? storedProducts[storedProducts.length - 1].id + 1
  //       : 1;

  //   product.id = newProductId;
  //   storedProducts.push(product);
  //   localStorage.setItem("products", JSON.stringify(storedProducts));
    
  //   return product;
  // }

  return (
    <>
      <div>
        <h1>Product Table</h1><br/><br/>
        <div className="common">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>Vendor</th>
                <th>Trade A</th>
                <th>Trade B</th>
                <th>Trade C</th>
                <th>Trade D</th>
                <th>Cart</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </td>
                  <td>{item.price}</td>
                  <td>{item.tags.join(", ")}</td>
                  <td>{item.vendor}</td>
                  <td className="btntd">
                    <button
                      type="button"
                      className="bttn"
                      onClick={() => { 
                        addToCart(item);
                        getDiscounts(item);
                      }}
                    >
                      Add ToCart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div><br/><br/>
        {/* <Shopping shopData={shop} /> */}
      </div>
    </>
  );
}

export default Products;
