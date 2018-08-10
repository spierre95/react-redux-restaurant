import React, { Component } from 'react';
import { Header,Grid } from 'semantic-ui-react'
import axios from 'axios';
import Resturant from './Restaurant.jsx'
import Menu from './Menu.jsx'
import {connect,dispatch} from "react-redux"
import OrderSummary from './OrderSummary.js'


class ResturantList extends Component{
  constructor(props){
    super(props)
    this.state = {
      restaurants:[]
    }
  }

 componentDidMount() {

  let { dispatch } = this.props

    axios.get(`http://localhost:3000/api/restaurants`)
      .then(res => {
        console.log(res)
        const restaurants = res.data;
        dispatch({type:"INITIALIZE_RESTURANTS", payload:restaurants})
        this.setState({ restaurants })
    })
}

render(){

let restaurantList = this.state.restaurants.map((restaurant,index) =>
<Grid.Column>
      <Resturant restaurant={restaurant.name} desc={restaurant.description} id={restaurant.id}/>
</Grid.Column>
)
return(
<div>
 <Header as='h2' textAlign='center'>
      <Header.Content>Restaurants</Header.Content>
</Header>
<Grid columns={3} padded>
  <Grid.Row>
  {restaurantList}
  </Grid.Row>
</Grid>
</div>
)
}
}


export default connect(
  state => ({ restaurants: state.restaurants })
)(ResturantList)

