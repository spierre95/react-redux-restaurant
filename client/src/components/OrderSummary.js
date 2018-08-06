import React from 'react';
import { Table,Header,Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import Order from './Order.js'

const OrderSummary = (props) => {


  for (let key in props.cart){

    let create_order = props.cart[key]

    var OrderSummary = create_order.map((item,index)=>
    <Order cart={props.cart[key]} item={item}/>)

    var total = () => {
     let total = 0
     create_order.forEach((item)=>{
        total += item.price * item.quantity
     })
     return total
    }
  }

  return(
  <div>
    <h2>Order Summary</h2>

  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Item</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Total</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {OrderSummary}
     </Table.Body>
  </Table>
  <Button animated='fade' onClick= {() => props.placeOrder(props.cart)} >
      <Button.Content visible>Checkout</Button.Content>
      <Button.Content hidden>Total: &#36;{total()}</Button.Content>
  </Button>
  </div>

  )
}

function mapStateToProps(state){
  return {
    cart:state.order
  }
}

function mapDispatchToProps(dispatch){
  return {
    placeOrder:(item) =>{
      dispatch({type:"PLACE_ORDER", payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderSummary)














