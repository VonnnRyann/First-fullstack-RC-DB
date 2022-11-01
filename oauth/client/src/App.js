import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useState } from "react";
import axios from "axios";

function App() {
  const [details, setDetails] = useState([]);

  const getRequestHandler = async () => {
    const API = axios.create({ baseURL: "http://localhost:5000" });

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.getItem("profile")).res.tokenId
        }`;
      }
      return req;
    });

    const res = await API.get("/get-users");
    console.log("im the response", res);
    setDetails(res.data.details);
  };

  const removeUser = async (id) => {
    try {
      const API = axios.create({ baseURL: "http://localhost:5000" });

      API.interceptors.request.use((req) => {
        if (localStorage.getItem("profile")) {
          req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).res.tokenId
          }`;
        }
        return req;
      });

      await axios.delete(`/${id}`);
      console.log("user deleted", id);
      getRequestHandler();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="App">
      <Login />
      <br></br>
      <Logout />

      <br></br>
      <br></br>
      <h3>Click the button to get all users!</h3>

      {localStorage.getItem("profile") ? (
        <button onClick={getRequestHandler}>GET</button>
      ) : (
        "Login first!"
      )}
      {details.map((value) => {
        return (
          <div key={value.id}>
            <img src={value.image} alt="myImage" width="100" />
            <h3>
              Name: {value.firstName} | E-mail: {value.email}
            </h3>
            <div>
              <small onClick={() => removeUser(value._id)}>Delete</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
