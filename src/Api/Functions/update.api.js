import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";



export const AddupdateNow=async(payload)=>{
    try {
        const response=await axiosInstance.post(endpoints.cms.update,payload)
        return response?.data;
        
    } catch (error) {
        console.log(error)
        
    }

}