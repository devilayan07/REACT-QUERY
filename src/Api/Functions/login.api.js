import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const AddloginNow=async(payload)=>{
    try {
        const response=await axiosInstance.post(endpoints.auth.login,payload)
        return response?.data;
        
    } catch (error) {
        console.log(error)
        
    }

}