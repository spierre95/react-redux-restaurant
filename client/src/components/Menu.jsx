import React, { Component } from 'react';
import {connect} from 'react-redux';
import MenuItem from './MenuItem.js';

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

    return(
    <div>
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

