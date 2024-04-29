import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/SignUp/SignUp";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<SignUp />} /> */}
    </Routes>
  </BrowserRouter>
);

function App() {
  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
