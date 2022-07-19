import { deleteRequest, getRequest, postRequest, putRequest } from "../request"

export const getmedicineData = () =>{
    return getRequest('medicines')
}

export const postMedicineData = (data) => {
    console.log(data);
    return postRequest('medicines' , data)
}

export const deleteMedicineData = (id)=>{
    return deleteRequest('medicines/',id)
}

export const upadateMedicineData = (data)=>{
    return putRequest('medicines/',data)
}