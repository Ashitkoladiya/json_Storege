import { getRequest } from "../request"

export const getmedicineData = () =>{
    return getRequest('medicines')
}