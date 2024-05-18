import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const AddcreateNow=async(payload)=>{
    try {
        const response=await axiosInstance.post(endpoints.cms.create,payload);
        return response.data;

        
    } catch (error) {
        console.log(error)
        
    }
}