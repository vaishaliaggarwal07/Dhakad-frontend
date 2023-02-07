import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BottomNavbar from "../../Components/Helper/BottomNavbar";
import { API_URL } from "../../Utils/helpers/api_url";

const Rewards = () => {
  const [user, setUser] = useState();
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${API_URL}/api/v1/users/${userId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setUser(result?.data?.user))
      .catch((error) => console.log("error", error));
  }, [dispatch, userId]);

  const userRewards = user?.rewards;
  const sumuserRewards = userRewards?.reduce(
    (partialSum, a) => partialSum + a.amount,
    0
  );
  return (
    <React.Fragment>
      <div className="main-content">
        <BottomNavbar />
        <div className="container-fluid padding-globle">
          <div className="reward-content col-md-12">
            <div className="row">
              <div className="rewards-title">
                <h2 className="text-center mb-4">
                  Reward Points ₹{sumuserRewards ? sumuserRewards : 0}
                </h2>
                <table className="table table-bordered">
                  {userRewards
                    ? userRewards.map((item) => {
                        return (
                          <tr>
                            <td className="border-0">
                              <div className="rewards-table">
                                <span className="rewards-rk">AB</span>
                                <h4>{item.title}</h4>
                              </div>
                            </td>
                            <td className="border-0">
                              <span className="rewards-rupee">
                                ₹<em>{item.amount}</em>
                              </span>
                            </td>
                          </tr>
                        );
                      })
                    : ""}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rewards;
