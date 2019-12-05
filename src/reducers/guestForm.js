const initialState = {
  open: false
};

function guestForm(state = initialState, action) {
  switch (action.type) {
    case "OPEN_GUEST_DIALOG":
      return {
        ...state,
        open: action.open
      };
    default:
      return state;
  }
}

export default guestForm;
