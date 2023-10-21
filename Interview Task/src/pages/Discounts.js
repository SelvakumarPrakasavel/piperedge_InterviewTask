import React, { useState, useEffect } from 'react'
// import Products from './Products';
import '../style.css'

function Discounts() {
    const [discount, setDiscount] = useState([]);

    useEffect(() => {
      // Load data from the JSON file
      fetch('/Discount.json')
        .then((response) => response.json())
        .then((jsonData) => {
            setDiscount(jsonData);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);

  return (
    <div>
        <br/>
        <h1>Discount Table</h1><br/>
        <div className='common'>
            <table className='table'>
                <thead className='table table-dark'>
                    <tr>
                        <th>Vendor</th>
                        <th>Trade A</th>
                        <th>Trade B</th>
                        <th>Trade C</th>
                        <th>Trade D</th>
                    </tr>
                </thead>
                <tbody>
                {discount.map((item, index) => (
                      <tr key={index}>
                          <td>{item.vendor.charAt(0).toUpperCase() + item.vendor.slice(1)}</td>
                          <td>{item['TRADE A']}</td>
                          <td>{item['TRADE B']}</td>
                          <td>{item['TRADE C']}</td>
                          <td>{item['TRADE D']}</td>
                      </tr>
                  ))}
                </tbody>
            </table>
        </div><br/><br/>
        {/* <Products /> */}
    </div>
  )
}

export default Discounts