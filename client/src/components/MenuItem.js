import React, { Component } from 'react';
import { Card,Button } from 'semantic-ui-react'
import {connect} from 'react-redux';

const MenuItem = (props) => {

  for(let key in props.cart){

    console.log(key)

    var itemsInCart = props.cart[key].create_order.filter((item) =>item.name === props.menuItem.name ).length
    console.log(itemsInCart)
  }

  const priceTotal = () => {
    if(itemsInCart === 0){
      return 0
    }
    return props.menuItem.price * itemsInCart
  }

  return(
    <div>
    <Card>
      <Card.Content>
        <Card.Header>{props.menuItem.name} x {itemsInCart}</Card.Header>
        <Card.Meta>Price: &#36;{props.menuItem.price}</Card.Meta>
        <Card.Description>
          Total: &#36;{priceTotal()}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick= {() => props.addToCart(props.menuItem,props.id)}>
            ADD
          </Button>
          <Button basic color='red'onClick= {()=>props.removeFromCart(props.menuItem,props.id)}>
            REMOVE
          </Button>
        </div>
      </Card.Content>
    </Card>
    </div>
  )
}

function mapStateToProps(state){
  return {
    cart:state.order
  }
}

export default connect(mapStateToProps)(MenuItem)