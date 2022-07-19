import * as ActionTypes from '../action/ActionTypes'

const newvalue = {
    isLoading : false,
    medicine : [],
    error : '' 
    
}


export const reducer_medicines = (state=newvalue, action )=>{
        
console.log(action.type , action.payload , state);
    switch(action.type){

        case ActionTypes.GET_MEDICINES:
        return {
            ...state,
            isLoading : false,
            medicine : action.payload,
            error : ''   
        }

        case ActionTypes.LOADING_MEDICINES:
            return{
                ...state,
                isLoading : true,
                error:''
            }

        case ActionTypes.ERROR_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicine : [],
                error: action.payload
            }

        case ActionTypes.ADD_MEDICINE:
            return{
                ...state,
                isLoading: false,
                medicine: state.medicine.concat(action.payload),
                error: ''
                }
        case ActionTypes.DELETE_MEDICINE:
            return{
                ...state,
                isLoading: false,
                medicine: state.medicine.filter((d,i)=>d.id !== action.payload),
                error: ''
            }
        case ActionTypes.UPDATE_MEDICINE:
            return{
                ...state,
                isLoading: false,
                medicine: state.medicine.map((l)=>{
                    if(l.id === action.payload.id){
                        return action.payload
                    }
                    else{
                        return l;
                    }
                }),
                error: ''
            }

        default : 
        return state;
    }
}