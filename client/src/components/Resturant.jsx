import React, { Component } from 'react';

const Resturant = (props) => {
  return(
  <div>
    <h3>{props.resturant}</h3>
    <h4>{props.desc}</h4>
  </div>
  )
}

export default Resturant
