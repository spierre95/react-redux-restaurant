import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

const OrdersPlaced = (props) => {

console.log(props)
const numberOfItems = props.totalOrder.filter((item) =>item.name === props.order.name ).length

  const PriceTotal = () => {
    if(numberOfItems === 0){
      return props.order.price
    }
    return props.order.price * numberOfItems
  }

  return(
    <div>
    <h1>Order Number {props.orderNum}</h1>
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
            {numberOfItems}
          </Table.Cell>
          <Table.Cell>
            &#36;{PriceTotal()}
          </Table.Cell>
        </Table.Row>
     </Table.Body>
  </Table>
  </div>
  )
}

export default OrdersPlaced

