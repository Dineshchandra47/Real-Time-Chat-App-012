import React, { useState, useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import {loader} from '../components/Loader'
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAvatarRoute } from "../utils/APIRoutes";

export const SetAvatar =  () => {
  const api = `https://api.multiavatar.com/4645646`;

  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOptions = {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  };


  // useEffect(() => {
  //   const getToken = async () => {
  //     if (
  //       !localStorage.getItem(
  //         // process.env.REACT_APP_LOCALHOST_KEY
  //         "chat-user"
  //       ) 
  //     )
  //       navigate("/login");
  //       'true'
  //   };
  
  //   getToken();
  // }, []);

 

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
      const user = await JSON.parse(
        localStorage.getItem(
          // process.env.REACT_APP_LOCALHOST_KEY
          "chat-user"
        )
      );

      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });

      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem(
          // process.env.REACT_APP_LOCALHOST_KEY,
          "chat-user",
          JSON.stringify(user)
        );
        navigate("/");
      } else {
        toast.error("Error setting avatar. Please try again.", toastOptions);
      }
    }
  };

 

  useEffect(() => {
    const getAvatar = async () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const response = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        if (response.data) {
          const buffer = new Buffer(response.data);
          data.push(buffer.toString("base64"));
        }
      }
      setAvatars(data);
      setIsLoading(false);
    };
  
    getAvatar();
  }, []);

 
  return (
    <>
      {isLoading ? (
        <Container>
          <img src={loader} alt="loader" className="loader" />
          {/* <loader/> */}
        </Container>
      ) : (
        <Container>
          <div className="title-container">
            <h1>Pick an Avatar as your profile picture</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div key = {index}
                  className={`avatar ${
                    selectedAvatar === index ? "selected" : ""
                  }`}
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={setProfilePicture} className="submit-btn">
            Set as Profile Picture
          </button>
          <ToastContainer />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }
  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.1s ease-in-out;
      img {
        height: 6rem;
        transition: 0.1s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;
