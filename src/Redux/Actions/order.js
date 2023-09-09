import { API_URL } from "../../Utils/helpers/api_url";
// import axios from "axios";
import { toast } from "react-toastify";
import { CREATE_ORDER } from "./type";
import axios from "axios";

export const CreateOrder = (detail) => async (dispatch) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = {
      userId: detail?.userId,
      movieId: detail?.movieId,
      amount: detail?.paymt,
      currency: detail?.currency,
      receipt: detail?.receipt,
      notes: {
        description: detail?.notes,
      },
    };

    axios.post(`${API_URL}/api/v1/trasncations/createOrder`, raw).then((res) => {
        dispatch({
          type: CREATE_ORDER,
          payload: res?.data.results?.order,
        });
      });
  } catch (err) {
    console.log(err);
  }
};

// verify order

export const verifyOrder = (response, id) => {
  console.log(response, id, "response, id");
  const raz_sign = response?.razorpay_signature;
  try {

    axios.post(
      `${API_URL}/api/v1/trasncations/verifyOrderAndBookMovie`,
        {
          order_id: response?.razorpay_order_id,
          payment_id: response?.razorpay_payment_id,
          movie_booking_type: "PREBOOK | BOOK | RENT",
          razorpay_signature:raz_sign
        }
    ).then((res) => {
        if (res.data) {
          purchaseMovie(res.data);
          const message = res.data ? res.data?.message : res.data?.message;
          toast.success(message, {
            theme: "dark",
          });
          setTimeout(() => {
            window.location.href = "/rented-movies";
          }, 2000);
        }
      })
      .catch((error) => {
        const message = error ? error.message : error.message;
        toast.success(message, {
          theme: "dark",
        });
      });
  } catch (err) {
    console.log(err);
  }
};

const purchaseMovie = (data) => {
  const purchaseData = data?.results;
  const dataHistory = purchaseData?.[purchaseData?.length - 1];
  console.log(dataHistory, "dataHistory");
  console.log(dataHistory?.id, "dataHistory?.id");
  console.log(dataHistory?.movieId?.id, "dataHistory?.movieId?.id");
  console.log(dataHistory?.userId?._id, "dataHistory?.userId?.id");

  try {
    axios.post(`${API_URL}/api/v1/purchase`, {
      userId: dataHistory?.userId?._id,
      movieId: dataHistory?.movieId?.id,
      transitionId: dataHistory?.id,
    })
      .then((result) => console.log(result, "result======>>"));
  } catch (err) {
    console.log(err);
  }
};
