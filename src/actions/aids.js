export const updateCategoryFilter = (id) => {
  return {
    type : "UPDATE_CATEGORY_FILTER",
    id
  }
}

export const updateAidsNameFilter = (text) =>{
  return {
    type:  "UPDATE_AIDS_NAME_FILTER",
    text
  }
}