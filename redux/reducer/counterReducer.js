import {INCREMENT,DECREMENT} from '../constants/index';
const initialState=0;
const counterReducer=(state=initialState,action)=>{
    console.log("Action :",action)
    switch(action.type){
        case INCREMENT:
            return state+1;
            break;
        case DECREMENT: 
        return state-1;
        break;
        default:
            return state;
    }
}
export default counterReducer;