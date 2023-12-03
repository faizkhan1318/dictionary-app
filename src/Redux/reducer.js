import { ADD_RESULT, add_result } from "./action";

const initialState = [];

const reducer = (state=initialState, action)=>{
    if(action.type == ADD_RESULT){
        return [...state, action.payload]
    }
    else{
        return state;
    }
}

export default reducer;