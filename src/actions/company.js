export const openCompanyFormDialog = open => {
  return {
    type: "OPEN_COMPANY_DIALOG",
    open
  };
};

export const saveDataCompany = data => {
  return {
    type: "SAVE_COMPANY_DATA",
    data
  };
};

export const fetchDataCompany = () => {
  return {
    type: "FETCH_COMPANY_DATA"
  };
};
