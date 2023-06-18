import { API_URL } from "../../Utils/helpers/api_url";
import AWS from "aws-sdk";

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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (data.referralCode !== "") {
      data.rewards = {
        title: "Signup Reward",
        amount: 10,
      };
      data.idReferralCode = true;
    }
    data.referralCode =
      data.firstName + Math.floor(1000 + Math.random() * 9000);
    const body = JSON.stringify(data);
    const res = await axios.post(`${API_URL}/api/v1/users/`, body, config);

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
    console.log('auth:valuse : ',data);
    const redirectPath = data.redirectPath;
    delete data.redirectPath;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(data);
    const res = await axios.post(`${API_URL}/api/v1/users/login`, body, config);
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

  var formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("mobile", Number(data.mobile));
  formData.append("gender", data.gender);
  formData.append("dateOfBirth", data.dateOfBirth);
  formData.append("city", data.city);
  formData.append("zipCode", data.zipCode);
  formData.append("state", data.state);
  formData.append("status", data.status);
  formData.append("address", data.address);
  formData.append("photo", data.photo);
  formData.append("country", data.country);

  try {
    const res = await axios.patch(
      `${API_URL}/api/v1/users/${id}`,
      formData,
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email });
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/users/forgotPassword`,
        body,
        config
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
    var data = JSON.stringify({
      email: value.email,
      otp: Number(value.otp),
    });
    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.patch(
      `${API_URL}/api/v1/users/verifyOTP`,
      data,
      config
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email });
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/users/resendOTP`,
        body,
        config
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
    var data = JSON.stringify({
      password: value?.password,
      id: value?.id,
    });
    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.patch(
      `${API_URL}/api/v1/users/resetPassword/${value?.id}`,
      data,
      config
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
// login with google
export const loginWithGoogle =
  ({ token, email }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
      };
      const body = JSON.stringify({
        userType: "user",
        email: email,
        token: `${token}`,
      });
      const res = await axios.post(
        `${API_URL}/api/v1/users/loginwithfirebase`,
        body,
        config
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

//
export const updateProfile = (value) => (dispatch) => {
  const S3_BUCKET = "dhaakadmovies";
  const REGION = "us-east-2";

  AWS.config.update({
    accessKeyId: "AKIA4KKGBAMRQPJX6FMB",
    secretAccessKey: "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",
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
    ACL: "public-read",
  });

  const profileData = {
    file: value.profileUrl,
    fileType: value.type,
    fileLink: value.profileLink,
  };

  try {
    const params = {
      Body: profileData.file,
      Bucket: S3_BUCKET,
      Key: `users/${profileData.fileLink}`,
    };
    // ${profileData.fileType}
    myBucket.upload(params, (error, data) => {
      if (error) {
        console.log(error);
      }
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: data,
      });
    });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    if (error) {
      toast.error(error);
    }
  }
};
