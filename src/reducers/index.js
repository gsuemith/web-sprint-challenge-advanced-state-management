//2. Add in the arguments needed to complete a standard reducer function.
import {
  FETCH_SMURFS_START
} from '../actions'

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
  smurfs: [],
  error: '',
  isFetching: false
}

const reducer = (state = initialState, { type, payload })=>{
  switch (type) {
    //3. Add in a reducer case to accomidate the start of a smurf fetch.
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }

    default: return state;
  }
}

export default reducer;


//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.