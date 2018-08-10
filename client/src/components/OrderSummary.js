import React from 'react';
import { Table,Header,Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import Order from './Order.js'
import OrderHistory from './OrderHistory.js'

const OrderSummary = (props) => {

    const res_id = props.match.params.res_id

    let myOrder = props.cart[res_id].filter((item) =>item.quantity !== 0 )

    var OrderSummary = myOrder.map((item,index)=>
    <Order cart={props.cart[res_id]} item={item}/>)

    let totalPrice = () => {
     let total = 0
     myOrder.forEach((item)=>{
        total += item.price * item.quantity
     })
     return total
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
  <Button animated='fade' onClick= {() => props.placeOrder(myOrder,res_id)} >
      <Button.Content visible>Checkout</Button.Content>
      <Button.Content hidden>Total: &#36;{totalPrice()}</Button.Content>
  </Button>
  <OrderHistory res_id={res_id} orderList={props.orderList}/>
  </div>
  )
}

function mapStateToProps(state){
  return {
    cart:state.order,
    orderList:state.orderList
  }
}



function mapDispatchToProps(dispatch){
  return {
    placeOrder:(item,id) =>{
      dispatch({type:"PLACE_ORDER", payload:{item:item,id:id}})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderSummary)














