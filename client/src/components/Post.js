import { useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";

const Post = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState(false);

  const postRequestHandler = async () => {
    console.log("you clicked me");
    const data = { firstName, email, password, image };
    const res = await axios.post(
      "https://myfirstfullstack01.herokuapp.com/create-user",
      data
    );
    setMessage(true);
    setFirstName("");
    setEmail("");
    setPassword("");
    setImage("");
  };

  return (
    <div>
      <h4>First Name</h4>
      <input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        type="text"
        placeholder="Insert name here"
      />
      <br></br>
      <h4>Email</h4>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Insert email here"
      />
      <br></br>
      <h4>Password</h4>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Insert password here"
      />
      <br></br>
      <h4>Files</h4>
      <FileBase64
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />
      <br></br>
      <br></br>
      <button onClick={postRequestHandler}>Insert</button>
      <hr />

      {message ? (
        <h3 style={{ color: "green" }}>Data inserted succesfully!</h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
