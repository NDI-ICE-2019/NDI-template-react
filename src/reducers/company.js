import * as _ from "lodash";
const initialState = {
  open: false,
  data: []
};

function company(state = initialState, action) {
  switch (action.type) {
    case "OPEN_COMPANY_DIALOG":
      return {
        ...state,
        open: action.open
      };
    case "SAVE_COMPANY_DATA":
      const updatedCompany = _.concat(state.data, action.data);
      return {
        ...state,
        data: updatedCompany
      };
    default:
      return state;
  }
}

export default company;
