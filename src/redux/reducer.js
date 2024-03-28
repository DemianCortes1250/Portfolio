import { ADD_PROJECT } from "./action-types";


const initialState = {
    proyectos: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PROJECT:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload]
            };   
        default:
            return {...state}
    }
}

export default rootReducer;