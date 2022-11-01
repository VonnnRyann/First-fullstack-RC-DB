import React from "react";
import { GoogleLogout } from "react-google-login";

//const API_KEY = process.env.REACT_APP_MY_KEY;
//const API_KEY2 = process.env.REACT_APP_MY_KEY;

const Logout = () => {
  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const onLogoutSuccess = (res) => {
    console.log("logout made successfully!!!!", res);
    localStorage.clear();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
        style={{ marginTop: "100px" }}
      />
    </div>
  );
};

export default Logout;
