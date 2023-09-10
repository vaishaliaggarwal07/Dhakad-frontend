import React, { useState, useEffect, useMemo } from "react";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import profileImg from "../../Assets/Images/10.svg.png";
import { Image } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../Redux/Actions/auth";
import axios from "axios";
import {API_URL} from "../../Utils/helpers/api_url";
import uploadFileInChunkParallel, {createSASURLWithUUIDV4} from "../../Utils/helpers/uploadFilmToBlob"
import { toast } from "react-toastify";

async function getSASUrlFromAPICall(fileExtension) {
  // get sas token
  const sasResponse = await axios.post(`${API_URL}/api/v1/movies/upload/token`, {})
  return createSASURLWithUUIDV4(sasResponse.data.data, fileExtension);
}

const uploadFile = async (file) => {
  let extension = file.name.split(".").pop();
  const sasUrlObj = await getSASUrlFromAPICall(extension)
  await uploadFileInChunkParallel(file, sasUrlObj.sasUrl);
  return sasUrlObj.uploadUrlPath;
}

const ProfileImg = (props) => {
  const userId = localStorage.getItem("id");
  const getUserDataById = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);
  const userDetails = getUserDataById?.user?.data?.user;

  // aws upload profile
  const [profileData, setProfileData] = useState();

  if (profileData === undefined) {
    setTimeout(() => {
      setProfileData(userDetails?.photo);
    }, 1000);
  }

  const profileImgLink = props.profileImgUrl?.Location;
  useMemo(() => {
    setProfileData(profileImgLink);
  }, [profileImgLink]);

  const uploadProfileHandle = async (event, type) => {
    // set the placeholder image
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = ()=>{
      setProfileData(fileReader.result)
    }
    fileReader.onerror = (err)=>{
      console.error('ProfileImg:onerror: file reader ',err);
    }

    // upload to blob storage
    const uploadPhotoUrl = await uploadFile(event.target.files[0]);

    // update the user
    const result = await axios.patch(`${API_URL}/api/v1/users/${userId}/photo`,{photo:uploadPhotoUrl})
    if(result.data.data){
      toast.success(
          "Profile pic updated successfully"
      );
    }else{
      toast.error(
          "Failed to update profile pic"
      );
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
