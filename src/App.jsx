import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import Label from "./components/Label/Label";
import Banners from "./components/Banners/Banners";
import MyClub from "./components/MiniLabels/MyClub";
import Offers from "./components/Offers/Offers";
import Fruits from "./components/Fruits/Fruits";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="fluid-container">
              <Navbar1 />
              <Navbar2 />
              <Label />
              <Banners />
              <MyClub />
              <Offers />
              <Fruits />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/login/register" Component={Signup}></Route>
      </Routes>
    </>
  );
}

export default App;
