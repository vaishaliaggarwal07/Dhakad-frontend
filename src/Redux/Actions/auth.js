import { API_URL } from "../../Utils/helpers/api_url";

import {
  LOGIN_SUCCESS,
  GET_USER,
  IS_LOADING,
  LOGIN_FAIL,
  FORGOT_PASSWORD,
  EDIT_USER,
  UPDATE_USER_PROFILE,
  VERIFY_PASSWORD,
} from "../Actions/type";
import axios from "axios";
import { toast } from "react-toastify";

export const signup = (data) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });
   
    if (data.referralCode !== "") {
      data.rewards = {
        title: "Signup Reward",
        amount: 10,
      };
      data.idReferralCode = true;
    }
    data.referralCode =
      data.firstName + Math.floor(1000 + Math.random() * 9000);
    const res = await axios.post(`${API_URL}/api/v1/users/`, data);

    if (res?.data?.status === "success") {
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("id", res?.data?.data?._id);
      const message = res.data ? res.data.message : res.message;
      toast.success(message, {
        theme: "dark",
      });
      setTimeout(() => {
        window.location.href = data.redirectUrl;
      }, 500);
    }
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
    }
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const redirectPath = data.redirectPath;
    delete data.redirectPath;
    const res = await axios.post(`${API_URL}/api/v1/users/login`, data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    if (res) {
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("id", res?.data?.id);
      toast.success('Login Success', {
        theme: "dark",
      });
      setTimeout(() => {
        window.location.href = redirectPath;
      }, 500);
    }
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  }
};
// logOut
export const logOutUser = () => {
  setTimeout(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.href = "/";
  }, 2000);
};

// getUser
export const getUser = (id) => async (dispatch) => {
  dispatch({
    type: IS_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(`${API_URL}/api/v1/users/${id}`, config);
    dispatch({
      type: GET_USER,
      payload: res?.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// update User
export const updateUser = (data, id) => async (dispatch) => {
  dispatch({
    type: IS_LOADING,
  });
 
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

 try {

    const res = await axios.patch(
      `${API_URL}/api/v1/users/${id}`,
      JSON.stringify(data),
      config
    );
    if (res) {
      dispatch({
        type: EDIT_USER,
        payload: res?.data,
      });
      const message = res?.data?.message
        ? res?.data?.message
        : res?.data?.message;
      toast.success(message, {
        theme: "dark",
      });
    }
   
    
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    toast.error(error, {
      theme: "dark",
    });
  }
};
// forgot password
export const forgotPassword =
  ({ email }) =>
  async (dispatch) => {

    try {
      const res = await axios.post(
        `${API_URL}/api/v1/users/forgotPassword`,
          { email },
      );
      if (res) {
        dispatch({
          type: FORGOT_PASSWORD,
          payload: res?.data,
        });
        const response = res?.data ? res?.data?.message : res?.message;
        toast.success(response, {
          theme: "dark",
        });
      }
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      if (error) {
        toast.error(error, {
          theme: "dark",
        });
      }
    }
  };
//
export const verifyPasswordOTP = (value) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `${API_URL}/api/v1/users/verifyOTP`,
        {
          email: value.email,
          otp: Number(value.otp),
        },
    );
    const message = res?.data?.message;
    if (res) {
      dispatch({
        type: VERIFY_PASSWORD,
        payload: res.data,
      });
      toast.success(message, {
        theme: "dark",
      });
    }
  } catch (err) {
    if (err) {
      toast.error("Please try again!", {
        theme: "dark",
      });
    }
  }
};
//
export const resendOTP =
  ({ email }) =>
  async (dispatch) => {

    try {
      const res = await axios.post(
        `${API_URL}/api/v1/users/resendOTP`,
          { email },
      );
      if (res) {
        dispatch({
          type: FORGOT_PASSWORD,
          payload: res?.data,
        });
        const response = res?.data ? res?.data?.message : res?.message;
        toast.success(response, {
          theme: "dark",
        });
      }
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      if (error) {
        toast.error(error, {
          theme: "dark",
        });
      }
    }
  };

//
export const createNewPassword = (value) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `${API_URL}/api/v1/users/resetPassword/${value?.id}`,
        {
          password: value?.password,
          id: value?.id,
        }
    );
    const message = res?.data?.message;
    if (res) {
      toast.success(message, {
        theme: "dark",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  } catch (err) {
    if (err) {
      toast.error("Token is invalid or has expired!", {
        theme: "dark",
      });
    }
  }
};

export function getUserByEmail(email) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL}/api/v1/users/getUserByEmail/${email}`);
      const userId = res.data.data.user["_id"];
      console.log("User ID:", userId);
      return userId;
    } catch (error) {
      console.error("Failed to get user by email:", error);
      return null; // Return null or handle the error appropriately
    }
  };
}


// export function getUserByEmail(email) {
//    return async (dispatch) => {
//     try {
//       const res = await axios.get(`${API_URL}/api/v1/users/getUserByEmail/${email}`); 
//       const userId = res.data.data.user["_id"];
//       const payload = { userData: res.data.data, userId: userId };
//       console.log("getUserByEmail Payload:", payload); // Log the payload
//       dispatch({
//         type: GET_USER_BY_EMAIL,
//         payload: { userData: res.data.data, userId: userId },
//       }
//       );
     

//     } catch (error) {
//       console.error("Failed to get user by email:", error);
//     }
//   };
// }
// login with google
export const loginWithGoogle =
  ({ token, email }) =>
  async (dispatch) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/users/loginwithfirebase`,
          {
            userType: "user",
            email: email,
            token: `${token}`,
          }
      );
      if (res) {
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("id", res?.data?.id);
        const message = res.data ? res.data.message : res.message;
        toast.success(message, {
          theme: "dark",
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      // const error = err?.res;
      console.log(err, "err====>>>>");
    }
  };

export const registerFirebaseUser = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/api/v1/users/signup/firebase`, data);
    if (res) {
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("id", res?.data?.id);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      toast.success('Login Success', {
        theme: "dark",
      });

      /*setTimeout(() => {
        window.location.href = redirectPath;
      }, 500);*/
    }
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  }
};
