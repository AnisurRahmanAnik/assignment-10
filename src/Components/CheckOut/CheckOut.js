import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Nav from '../Navbar/Nav';

const CheckOut = () => {

    let { productID }= useParams();


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [product, setProduct] = useState([])

    useEffect(() => {
      fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    // console.log(product)

    const OrderDetails = product.find(product => product._id == productID);
    console.log(OrderDetails)

    const { name, price } = OrderDetails || {}

    const handleOrder = () => {


      console.log('submit', OrderDetails)

      const orderDetails = { ...loggedInUser, Shipment: OrderDetails, orderTime: new Date() }

      fetch('http://localhost:5000/addOrder', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            alert('successful')
          }
        })
    }

    return (
        <div className="container">

            <Nav></Nav>

            <div className="container text-center mt-5 pt-5 shadow p-3 mb-5 bg-body rounded">


                <div class="card text-center m-5">

                    <div class="card-body ">
                        <p class="card-text">{name}</p>
                        <p class="card-text">{price}</p>
                  


                    </div>


                </div>
                <div className="m-0">
                
                        <button className="btn btn-success mt-3 mb-3" onClick={() => handleOrder()}>Check out</button>
               
                </div>
            </div>
        </div>
    );
};

export default CheckOut;