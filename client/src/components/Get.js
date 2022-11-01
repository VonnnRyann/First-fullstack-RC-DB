import { useState } from "react";
import axios from "axios";

const Get = () => {
  const [request, setRequest] = useState();
  const [details, setDetails] = useState([]);

  const getRequestHandler = async () => {
    const res = await axios.get(
      "https://myfirstfullstack01.herokuapp.com/get-users"
    );
    console.log("im the response", res);
    setDetails(res.data.details);
    setRequest("GET");
  };

  const removeUser = async (id) => {
    try {
      await axios.delete(`https://myfirstfullstack01.herokuapp.com/${id}`);
      console.log("user deleted", id);
      getRequestHandler();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h3>Click the button to get all users!</h3>
      <button onClick={getRequestHandler}>GET</button>
      {request === "GET"
        ? details.map((value) => {
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
          })
        : ""}
    </div>
  );
};

export default Get;
