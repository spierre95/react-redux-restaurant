import axios from 'axios'

const dataService = store => next => action => {

  next(action)
  switch (action.type) {
    case 'GET_DATA':
    axios.get('https://huddolapi-next.herokuapp.com/v1/challenge')
      .then((res) => {
        debugger

        const data = res.data
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: 'DATA_RECEIVED',
          data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
      break
    /*
  Do nothing if the action does not interest us
  */
    default:
      break
  }
}

export default dataService