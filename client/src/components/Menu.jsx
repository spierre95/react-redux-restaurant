import React, { Component } from 'react';
import {connect} from 'react-redux';
import MenuItem from './MenuItem.js';
import Navbar from './Header.jsx'

const Menu = (props) => {


for(let key in props.cart){

  let res_id = props.match.params.res_id

  if(key == res_id){
    let currentMenu = props.cart[res_id]

    let menuItems = currentMenu.map((menuItem,index)=>
    <MenuItem addToCart={props.addToCart}
    removeFromCart={props.removeFromCart}
    menuItem={menuItem}
    id={res_id}/>)

    let totalPrice = () => {
     let total = 0
     currentMenu.forEach((item)=>{
        total += item.price * item.quantity
     })
     return total
    }

    let totalQuantity = () =>{
       let total = 0
     currentMenu.forEach((item)=>{
        total += item.quantity
     })
     return total
    }

    return(
    <div>
    <Navbar totalQuantity={totalQuantity()} totalPrice={totalPrice()} res_id={res_id}/>
      {menuItems}
    </div>
  )
}
}
}

function mapStateToProps(state){
  return {
    cart:state.order
  }
}



function mapDispatchToProps(dispatch){
  return {
    addToCart:(item,id) =>{
      dispatch({type:"ADD", payload:{item:item,id:id}})
    },
    removeFromCart:(item,id) => {
      dispatch({type:"REMOVE", payload:{item:item,id:id}})
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Menu)

