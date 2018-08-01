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
    for (let key in state){
        if(action.payload.id === key ){
            if(state[key].create_order.length == 0){
                state[key].create_order.push(action.payload.item)
            }
             for(let el of state[key].create_order){
                if(el.name !== action.payload.item.name){
                    state[key].create_order.push(action.payload.item)
                } else {
                    el.quantity += 1
                }
            }
        }
    }
    console.log(state)
    return state
    case 'REMOVE':
    const firstIndex = state.indexOf(action.payload)
    for (let key in state){
        if(action.payload.id === key ){
            if(state[key].create_order.length == 0){
               state.filter((item,index) => index !== firstIndex)
            }
        }
    }

    case 'CHECKOUT':
    return action.payload
    default:
    return state
  }
}

export default orderReducer