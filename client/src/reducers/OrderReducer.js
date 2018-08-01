const initialState = {
    res_id:{
        create_order:[],
        order_received:{
            order_id:[]
        }
    }
}


const orderReducer = (state = initialState,action)=>{
  switch(action.type){
    case "INITIALIZE_RESTURANTS":
        console.log(state)
        let newState = {}
        for (let resturant of action.payload){
            newState[resturant.id] = {create_order:[],order_received:{}}
        }
    return newState
    case "ADD":

    console.log(state)

        for (let key in state){
            if(action.payload.id == key ){
                state[key].create_order.push(action.payload.item)
            }
        }
    return state
    case 'REMOVE':
    const firstIndex = state.indexOf(action.payload)
    return state.filter((item,index) => index !== firstIndex)
    case 'CHECKOUT':
    return action.payload
    default:
    return state
  }
}

export default orderReducer