import React, { Component } from 'react';
import { Card,Button } from 'semantic-ui-react'
import {connect} from 'react-redux';

const MenuItem = (props) => {

  return(
    <div>
    <Card>
      <Card.Content>
        <Card.Header>{props.menuItem.name} x {props.menuItem.quantity}</Card.Header>
        <img src={props.menuItem.image_url}/>
        <Card.Meta>Price: &#36;{props.menuItem.price}</Card.Meta>
        <Card.Description>
         Total: &#36;{props.menuItem.quantity * props.menuItem.price}
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
  console.log(state.order)
  return {
    cart:state.order
  }
}

export default connect(mapStateToProps)(MenuItem)