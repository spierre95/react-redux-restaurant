import React, { Component } from 'react';
import { Header,Grid } from 'semantic-ui-react'
import axios from 'axios';
import Resturant from './Resturant.jsx'
import Menu from './Menu.jsx'
import {connect,dispatch} from "react-redux"
import OrderSummary from './OrderSummary.js'


class ResturantList extends Component{
  constructor(props){
    super(props)
    this.state = {
      resturants:[]
    }
  }

 componentDidMount() {

  let { dispatch } = this.props

    axios.get(`http://localhost:3000/api/resturants`)
      .then(res => {
        console.log(res)
        const resturants = res.data;
        dispatch({type:"INITIALIZE_RESTURANTS", payload:resturants})
        this.setState({ resturants })
    })
}

render(){

let resturantList = this.state.resturants.map((resturant,index) =>
<Grid.Column>
      <Resturant resturant={resturant.name} desc={resturant.description} id={resturant.id}/>
      <Menu menu={resturant.menu} id={resturant.id}/>
</Grid.Column>
)
return(
<div>
 <Header as='h2' textAlign='center'>
      <Header.Content>Resturants</Header.Content>
</Header>
<Grid columns={3} padded>
  <Grid.Row>
  {resturantList}
  </Grid.Row>
  <OrderSummary/>
</Grid>
</div>
)
}
}


export default connect(
  state => ({ resturants: state.resturants })
)(ResturantList)

