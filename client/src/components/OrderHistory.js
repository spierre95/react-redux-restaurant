import React, { Component } from 'react';
import OrdersPlaced from "./OrdersPlaced.js"
import {connect} from 'react-redux';


const OrderHistory = (props) =>{

let totalOrder = props.orderList[props.res_id]
debugger

let orders = totalOrder.map((order)=>
<OrdersPlaced order={order} totalOrder={totalOrder}/>
)
return (
    <div>
      {orders}
    </div>
  )
}

export default(OrderHistory)