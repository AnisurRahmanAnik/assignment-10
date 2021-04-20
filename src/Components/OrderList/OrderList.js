import React from 'react';

const OrderList = (props) => {


    
    return (
        
      <table class="table">

      <thead>
        <tr>
          <th scope="col">User's name</th>
          <th scope="col">Email</th>
          <th scope="col"> Product name </th>
          <th scope="col">Price</th>
          <th scope="col">Ordered Date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">{props.order.name}</th>
          <td>{props.order.email}</td>
          <td>{props.order.Shipment.name}</td>
          <td>{props.order.Shipment.price}</td>
          <td>{(new Date(props.order.orderTime).toDateString('dd/mm/yyyy'))}</td>
        </tr>
      </tbody>

    </table>
    );
};

export default OrderList;