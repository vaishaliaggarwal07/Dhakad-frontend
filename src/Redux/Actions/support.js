import { API_URL } from "../../Utils/helpers/api_url";
import axios from "axios";
import { toast } from "react-toastify";
export const supportChat = (value) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    var data = JSON.stringify({
      title: value?.title,
      description: value?.description,
      email: value?.email,
    });

    var config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.post(`${API_URL}/api/v1/suport`, data, config);
    if (response) {
      const message = response?.data?.message;
      toast.success(message, {
        theme: "dark",
      });
    }
  } catch (err) {
    console.log(err);
    if (err) {
      toast.error("Please login first!", {
        theme: "dark",
      });
    }
  }
};
