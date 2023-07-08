import * as actionTypes from "./types";

//sab se pehlay hum in ko call kartay hn then ye action humein reducer ke taraf le jatay hn 
export const login = (userInfo) => {
  return {
    type: actionTypes.LOGIN,
    payload: userInfo,
  };
};
// action me hum do chezein use kartay hn ak type ke kis action ko call karna ha and 
// payload ke kon sa data jaya ga 

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const registerUser = (userData) => {
  return {
    type: actionTypes.REGISTER_USER,
    payload: userData,
  };
};

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (itemId) => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: itemId,
  };
};
