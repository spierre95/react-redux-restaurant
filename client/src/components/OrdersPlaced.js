import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

const OrdersPlaced = (props) => {


  let totalPrice = () => {
     let total = 0
     props.totalOrder.forEach((item)=>{
        total += item.price * item.quantity
     })
     return total
    }

  return(
    <div>
    <h1>Order Number</h1>
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
         <Table.Row>
          <Table.Cell >
            {props.order.name}
          </Table.Cell>
           <Table.Cell>
            &#36;{props.order.price}
          </Table.Cell>
          <Table.Cell singleLine>
            {props.order.quantity}
          </Table.Cell>
          <Table.Cell>
            &#36;{totalPrice()}
          </Table.Cell>
        </Table.Row>
     </Table.Body>
  </Table>
  </div>
  )
}

export default OrdersPlaced

