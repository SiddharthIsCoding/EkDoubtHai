import logo from './logo.svg';
import './App.css';
import Normalbutton from "./Normalbtn";
import Nav from './navbar';
import Footer from "./footer";
import {BrowserRouter, Routes, Route , Link } from "react-router-dom";
import LoginPage from './login';
import Signup from './signup';
import NotFound from './404';



function Home() {
  return (
    <div>
      <Nav></Nav>

      <h1>Welcome to <br></br> <span>" EkDoubtHai "</span> </h1>

      <Link to="/login" ><Normalbutton link="/login" txt="Login"></Normalbutton></Link>
      <Link to="/signup" ><Normalbutton link="/signup" txt="Signup"></Normalbutton></Link>

      <Footer></Footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>

          <Route path="/login" element={<LoginPage></LoginPage>} ></Route>

          <Route path="/signup" element={<Signup></Signup>} ></Route>

          <Route path="*" element = {<NotFound></NotFound>} ></Route>
        </Routes>

  </BrowserRouter>

  );
}

export default App;
