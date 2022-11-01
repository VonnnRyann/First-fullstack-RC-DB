import { Routes, Route, NavLink as Link } from "react-router-dom";
import Get from "./components/Get";
import Post from "./components/Post";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      {" "}
      <nav>
        <ul>
          <li>
            <Link to="/">GET</Link>
          </li>
          <li>
            <Link to="/create-user">POST</Link>
          </li>
          <li>
            <Link to="/update-user">UPDATE</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Get />}></Route>
          <Route path="/create-user" element={<Post />}></Route>
          <Route path="/update-user" element={<Update />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
