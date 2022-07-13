import * as ActionTypes from '../action/ActionTypes'

const newvalue ={
    counter :0 
}
export const counterReducer = (state=newvalue,action)=>
{
    switch(action.type)
    {
        case ActionTypes.INCRIMENT_Data :
        return {
            ...state,
            counter:state.counter+1
        }
        case ActionTypes.DENCRIMENT_Data :
            return {
                ...state,
                counter:state.counter-1
            }
        default :
            return state
    }
}