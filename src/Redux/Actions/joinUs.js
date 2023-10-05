import { API_URL } from "../../Utils/helpers/api_url";
import axios from "axios";
import { toast } from "react-toastify";

export const createJoinUs = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/joinUs/`, formData);
      return response.data; // Return the response data from the API
    } catch (error) {
      // Handle errors appropriately in your component
      const errorMessage = error.response?.data?.message || 'An error occurred';
      toast.error(errorMessage, {
        theme:"dark",
         // Adjust the duration of the toast
      });
      throw error; // Re-throw the error to allow further handling in the component
    }
  };