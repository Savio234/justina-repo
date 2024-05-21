import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        // {
        //     id: 1,
        //     title: "Iphone",
        //     category: "gadget"
        // }
    ]
}

type Product = {
    id: number;
    title: string;
    category: string;
}

type Action = {
    type: string;
    payload?: Product[];
}

export const productReducer = (state = initialState, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload || []
            }
        
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, type: any, payload: any) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                product: payload || []
            };
        default:
          return state;
    }
    
}
