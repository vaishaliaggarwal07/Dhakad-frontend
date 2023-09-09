import React, { useState, useEffect, useMemo } from "react";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import profileImg from "../../Assets/Images/10.svg.png";
import { Image } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../Redux/Actions/auth";

import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const ProfileImg = (props) => {
  const userId = localStorage.getItem("id");
  const getUserDataById = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);
  const userDetails = getUserDataById?.user?.data?.user;
  const requiedFields = {
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName,
    email: userDetails?.email,
    dateOfBirth: userDetails?.dateOfBirth,
    gender: userDetails?.gender,
    state: userDetails?.state,
    country: userDetails?.country,
    city: userDetails?.city,
  };

  const checkValueField = Object.values(requiedFields).every((value) => {
    if (value === undefined) {
      return false;
    }
    return true;
  });
  // aws upload profile
  const [profileData, setProfileData] = useState();
  const [uploadStatus, setUploadStatus] = useState(false);
  if (profileData === undefined) {
    setTimeout(() => {
      setProfileData(userDetails?.photo);
    }, 1000);
  }

  const profileImgLink = props.profileImgUrl?.Location;
  useMemo(() => {
    setProfileData(profileImgLink);
  }, [profileImgLink]);

  const uploadProfileHandle = (data, type) => {
    if (checkValueField === false) {
      toast.error("Fill all required fields!", {
        theme: "dark",
      });
      setUploadStatus(false);
    } else {
      // TODO: Change the profile pic to Azure bucket
      /*const profileUrl = data.target.files[0];
      var fileName = profileUrl.name;
      var file_ext = fileName.substr(
        (Math.max(0, fileName.lastIndexOf(".")) || Infinity) + 1
      );
      let filePath = `${uuidv4()}.${file_ext}`;
      const ProfileData = {
        type: type,
        profileUrl: profileUrl,
        profileLink: filePath,
      };
      dispatch(updateProfile(ProfileData));*/
      setUploadStatus(true);
    }
  };
  useEffect(() => {
    handleUserProfile(profileData);
  }, [profileImgLink]);

  const handleUserProfile = (img) => {
    const profileApiData = {
      firstName: userDetails?.firstName,
      lastName: userDetails?.lastName,
      email: userDetails?.email,
      mobile: userDetails?.mobile,
      gender: userDetails?.gender,
      dateOfBirth: userDetails?.dateOfBirth,
      city: userDetails?.city,
      state: userDetails?.state,
      status: userDetails?.status,
      userType: "user",
      zipCode: userDetails?.zipCode,
      address: userDetails?.address,
      country: userDetails?.country,
      photo: userDetails?.photo,
    };
    if (profileImgLink !== null && uploadStatus === true) {
      const payload = {
        ...profileApiData,
        photo: img,
      };
      setTimeout(() => {
        dispatch(updateUser(payload, userId));
        setUploadStatus(false);
      }, 2000);
    }
  };

  return (
    <React.Fragment>
      <div className="profile-outer">
        <form>
          <div className="profile-img-sec">
            <Image
              className="profile-img rounded"
              src={
                profileData !== "undefined" &&
                profileData !== "" &&
                profileData !== undefined
                  ? profileData
                  : profileImg
              }
              alt={"user"}
              roundedCircle
            />
            <div className="profile-input">
              <input
                className="hide_file"
                accept="image/*"
                type="file"
                onChange={(event) => {
                  uploadProfileHandle(event, "users");
                }}
              />
            </div>
            <div className="profile-snap-icon">
              <CameraAltOutlinedIcon />
            </div>
          </div>
        </form>
        <p className="change-profile-text">Change Profile Photo</p>
      </div>
      <div className="profile-details">
        <div className="profile_title">
          <h2>{userDetails?.email}</h2>
          <p className="ref-codes">
            Referral Code: {userDetails?.referralCode}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    is_loading: state.user?.is_loading,
    profileImgUrl: state?.user?.user_profile,
  };
};

export default connect(mapStateToProps, { getUser })(ProfileImg);
