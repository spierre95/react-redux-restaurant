const initialState = {
    res_id:[{}]
}


const orderReducer = (state = initialState,action)=>{
  switch(action.type){

    case "INITIALIZE_RESTURANTS":

        let newState = {}
        for (let restaurant of action.payload){
            newState[restaurant.id] = restaurant.menu
        }

    return newState

    case "ADD":

    var resId = action.payload.id

    for (let key in state){
        if(resId === key ){
           var increaseQuantity = state[key].map((item)=>{
                 if(item.name == action.payload.item.name){
                    item.quantity += 1
                }
                return item
            })
        }
    }

    let addItem = {[resId]:increaseQuantity}

    return Object.assign({},state,addItem)

    case 'REMOVE':

    resId = action.payload.id
    for (let key in state){
        if(resId === key ){
            var decreaseQuantity = state[key].map((item)=>{
                 if(item.name == action.payload.item.name && item.quantity > 0){
                    item.quantity -= 1
                }
                return item
            })
        }
    }

    let removeItem = {[resId]:decreaseQuantity}

    return Object.assign({},state,removeItem)

    case 'CHECKOUT':
    return action.payload
    default:
    return state
  }
}

export default orderReducer