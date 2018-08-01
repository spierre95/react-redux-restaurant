import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

const Order = (props) => {
const numberOfItems = props.cart.filter((item) =>item.name === props.item.name ).length

  const PriceTotal = () => {
    if(numberOfItems === 0){
      return props.item.price
    }
    return props.item.price * numberOfItems
  }

  return(
      <Table.Row>
        <Table.Cell >
            {props.item.name}
        </Table.Cell>
         <Table.Cell>
          &#36;{props.item.price}
        </Table.Cell>
        <Table.Cell singleLine>
          {numberOfItems}
        </Table.Cell>
        <Table.Cell>
          &#36;{PriceTotal()}
        </Table.Cell>
      </Table.Row>
  )
}

export default Order

