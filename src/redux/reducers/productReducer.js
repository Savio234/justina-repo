import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            title: "Iphone",
            category: "gadget"
        }
    ]
}

export const productReducer = (state = initialState (type, payload)) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        
        default:
           return state;
    }
}