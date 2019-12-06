const initialState = {
  category: [],
  name : ""
};

function aids(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CATEGORY_FILTER":
      var tmpArray = state.category
      if (tmpArray.includes(action.id)) {
        tmpArray.splice(tmpArray.indexOf(action.id))
      }
      else {
        tmpArray.push(action.id)
      }
      return {
        ...state,
        category: tmpArray
      }
    case "UPDATE_AIDS_NAME_FILTER":
      return{
        ...state,
        name : action.text
      }
    default:
      return state;
  }
}

export default aids;
