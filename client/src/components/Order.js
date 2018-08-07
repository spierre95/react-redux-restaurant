import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

const Order = (props) => {

  return(
      <Table.Row>
        <Table.Cell >
          {props.item.name}
        </Table.Cell>
         <Table.Cell>
          &#36;{props.item.price}
        </Table.Cell>
        <Table.Cell singleLine>
          {props.item.quantity}
        </Table.Cell>
        <Table.Cell>
          &#36;{props.item.quantity * props.item.price}
        </Table.Cell>
      </Table.Row>
  )
}

export default Order

