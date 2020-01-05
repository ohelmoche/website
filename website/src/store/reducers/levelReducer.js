const initialState = { user: {} }

function toggleLevel(state = initialState, action) {

  switch (action.type) {

    case 'user':
      return { ...state, user: action.value };
    default:
      return state
      
  }


}





export default toggleLevel