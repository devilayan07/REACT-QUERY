import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const AddcontactNow = async (payload) => {
  try {
    const response = await axiosInstance.post(endpoints.auth.signup, payload);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
