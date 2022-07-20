import { baseUrl } from '../BASE_URL/baseUrl';
import { deleteMedicineData, getmedicineData, postMedicineData, upadateMedicineData } from '../comman/api/medicine.api';
import * as ActionTypes from './action/ActionTypes'

export const get_medicines =()=>(dispatch)=>{  

  getmedicineData()
  .then((data)=>dispatch(({ type: ActionTypes.GET_MEDICINES, payload: data.data })))
  //  try{
  //   dispatch(loadingMedicines());
  //   setTimeout(function(){
  //     return fetch(baseUrl + 'medicines')
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //         error.response = response;
  //         throw error;
  //       }
  //     },
  //       error => {
  //         var errmess = new Error(error.message);
  //         throw errmess;
  //       })
  //     .then(response => response.json())
  //     .then(addmedicines => dispatch(({ type: ActionTypes.GET_MEDICINES, payload: addmedicines })))
  //     .catch((error) =>dispatch(errorMedicines(error.message))
  //     )
    
  //   },1000)
    
  //  }
  //  catch(error){
  //   dispatch(errorMedicines(error.message)) 
     
  //  }
}

export const loadingMedicines=() =>(dispatch)=>{
  dispatch({type : ActionTypes.LOADING_MEDICINES})
}

export const errorMedicines = (error) => (dispatch) => {
  dispatch({type : ActionTypes.ERROR_MEDICINES,payload : error})
  
}

export const addMedicine = (data) => (dispatch) => {
  try {

    setTimeout(() =>{
      return postMedicineData(data)
      .then((data) => dispatch(({ type: ActionTypes.ADD_MEDICINE, payload: data.data })))
      .catch(error => dispatch(errorMedicines(error.message)))
    },2000)
      
  //   dispatch(loadingMedicines());

  //   setTimeout(function () {
  //     return fetch(baseUrl + 'medicines', {
  //       method: 'POST', // or 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then(response => {
  //         if (response.ok) {
  //           return response;
  //         } else {  
  //           var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //           error.response = response;
  //           throw error;
  //         }
  //       },
  //         error => {
  //           var errmess = new Error(error.message);
  //           throw errmess;
  //         })
  //       .then(response => response.json())
  //       .then(addmedicine => dispatch(({ type: ActionTypes.ADD_MEDICINE, payload: addmedicine })))
  //       .catch(error => dispatch(errorMedicines(error.message)))
  //   }, 2000);

  // }
  // catch (error) {
  //   dispatch(errorMedicines(error))
  }

 
  catch (error) {
      dispatch(errorMedicines(error))
}
}


export const deleteMedicine = (id) => (dispatch) => {
  console.log(id)
  try {
    setTimeout(() =>{
      return deleteMedicineData(id)
      .then(dispatch(({ type: ActionTypes.DELETE_MEDICINE, payload: id})))
      .catch(error => dispatch(errorMedicines(error.message)))
    },2000)

    // return fetch(baseUrl + 'medicines/' + id, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then(response => response.json())
    //   .then(deletemedicine => dispatch(({ type: ActionTypes.DELETE_MEDICINE, payload: id })))
    //   .catch(error => dispatch(errorMedicines(error.message)))
  }
  catch (error) {
    dispatch(errorMedicines(error))
  }
}

export const upadateMedicine = (data) => (dispatch) => {
  try {

   
    upadateMedicineData(data)
      .then((data) => dispatch(({ type: ActionTypes.UPDATE_MEDICINE, payload: data.data})))
      .catch(error => dispatch(errorMedicines(error.message)))
   

    // return fetch(baseUrl + 'medicines/' + data.id, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then(response => response.json())
    //   .then(medicine => dispatch(({ type: ActionTypes.UPDATE_MEDICINE, payload: medicine })))
    //   .catch(error => dispatch(errorMedicines(error.message)))
  }
  catch (error) {
    dispatch(errorMedicines(error))
  }
}