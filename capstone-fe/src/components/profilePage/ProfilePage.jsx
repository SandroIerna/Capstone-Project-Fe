import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../homepage/navbar/Navbar";

const ProfilePage = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const accessToken = useSelector((state) => state.user.accessToken);
  const [user, setUser] = useState({});

  const getUserData = async () => {
    const options = {
      method: "GET",
      headers: { authorization: `Bearer ${accessToken.accessToken}` },
    };
    try {
      const URL = process.env.REACT_APP_BE_URL;
      let response = await fetch(`${URL}/users/${userId}`, options);
      if (response.ok) {
        let userData = await response.json();
        setUser(userData);
      } else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Navbar />
      <>{user.firstName}</>
    </>
  );
};
export default ProfilePage;
