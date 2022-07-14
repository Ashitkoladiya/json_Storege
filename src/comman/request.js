import axios from 'axios';
import { baseUrl } from '../BASE_URL/baseUrl';


const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });



const sendRequest = (config)=>{
 return instance.request(config);
}

export const getRequest = (path)=>{
    return sendRequest({
        url : path,
        method : 'GET'
    })
}