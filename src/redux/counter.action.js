 import * as ActionTypes from './action/ActionTypes'
 export const IcData =()=>(dispatch) =>{
    dispatch({type :ActionTypes.INCRIMENT_Data})
}
export const DeData =()=>(dispatch)=>{
    dispatch({type : ActionTypes.DENCRIMENT_Data})
} 