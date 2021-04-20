import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Nav from '../Navbar/Nav';
import OrderList from '../OrderList/OrderList';

const Orders = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderDetails, setOrderDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orderDetails')
            .then(res => res.json())
            .then(data => setOrderDetails(data))

    }, [])

    console.log(orderDetails)


    return (

        <div className="container">
            <Nav></Nav>
        <div className="container text-center mt-5 pt-5 mb-5">
            <h1> <span style={{ color: 'red' }}> {loggedInUser.name}</span> , Your Total order: {orderDetails.length} </h1>
        </div>

        {
            orderDetails.map(orderDetail => <OrderList order={orderDetail}></OrderList>)
            
        }
    </div>
    );
};

export default Orders;