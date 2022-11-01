import React, { useState } from "react";

const Update = () => {
  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState("");

  const updateHandler = () => {};

  return (
    <div>
      <h4>Update and insert email</h4>
      <input
        onChange={(e) => setUpdate(e.target.value)}
        value={email}
        type="text"
        placeholder="Insert email number here"
      />
      <br></br>
      <br></br>
      <button onClick={updateHandler}>Insert</button>
      <hr />
    </div>
  );
};

export default Update;
