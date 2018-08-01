const orderListReducer = (state={},action)=>{
  switch(action.type){
    case "PLACE_ORDER":
    const ids = Object.keys(state)
    let id = 1
    if(id != 1){
      id = ids[ids.length - 1] + 1
    }
    state[id] = action.payload
    return state
    default:
    return state
  }
}

export default orderListReducer
