import React, { Component } from 'react';
import OrdersPlaced from "./OrdersPlaced.js"
import {connect} from 'react-redux';


const OrderHistory = () =>{
  return(<h1>Hello</h1>)
}

// const orderList = () => {
//   for(let key in props.orderList){
//    let orders = props.orderList[key].map((order)=>{
//     <OrdersPlaced orderNum={key} order={order} totalOrder={props.orderList.key}/>
//   }
//   return (
//     <div>
//       {orders}
//     </div>
//   )
// }
// }

// return(
//  <div>
//     <h2>Order Summary</h2>
//     <div>
//       {orderList()}
//     </div>
// </div>
// )
// }

// function mapStateToProps(state){
//   console.log(state)
//   return {
//     orderList:state.orderList
//   }
// }

export default(OrderHistory)