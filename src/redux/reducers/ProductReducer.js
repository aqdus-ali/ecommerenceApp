import { ActionType } from "../contants/action-types";
const intial={
    products:[
        // {
        //     id:1,
        //     title:"Akdas",
        //     category:"Human"
        // },
    ],
};

export const productReducer =(state=intial,{type,payload})=>{
    switch (type)
    {
        case ActionType.SET_PRODUCTS:
        {
            return {...state,products:payload};
        }
        default:
        {
            return state;
        }
    }
};
export const selectedProductReducer= (state={},{type,payload})=>{

    switch(type)
    {
        case ActionType.SELECTED_PRODUCTS:
              return{...state,...payload}
            
            default :
            
                return state; 
            
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionType.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionType.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };