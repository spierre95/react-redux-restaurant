import React, { Component } from 'react';
import OrdersPlaced from "./OrdersPlaced.js"
import {connect} from 'react-redux';


const OrderHistory = () =>{

let totalOrder = props.orderList[props.res_id]

let orders = totalOrder.map((order)=>
<OrdersPlaced order={order} totalOrder={totalOrder}/>
)

return (
    <div>
      {orders}
    </div>
  )

}

function mapStateToProps(state){
  console.log(state)
  return {
    orderList:state.orderList
  }
}

export default(OrderHistory)