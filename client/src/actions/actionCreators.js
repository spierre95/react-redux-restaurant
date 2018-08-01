export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

export function addToCart(item){
  return{
    type: ADD_ITEM,
    item
  };
}

export function removeFromCart(id){
  return{
    type: REMOVE_ITEM,
    id
  };
}
