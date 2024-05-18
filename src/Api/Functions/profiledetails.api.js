import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";



export const Profile=async()=>{
    try {
        const response=await axiosInstance.get(endpoints.auth.profileDetails)
        return response?.data?.data;
        
    } catch (error) {
        console.log(error)
        
    }

}