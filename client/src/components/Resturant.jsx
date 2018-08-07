import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Resturant = (props) => {
  return(
  <div>
    <Link to={`/menu/${props.id}`}><h3>{props.resturant}</h3></Link>
  </div>
  )
}

export default Resturant
