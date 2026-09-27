import logo from './logo.svg';
import './App.css';
import Normalbutton from "./Normalbtn";
import Nav from './navbar';
import Footer from "./footer";


function App() {
  return (
    <div>
      
      <Nav></Nav>

      <br></br>
      <h1>Welcome to <br></br> <span>" EkDoubtHai "</span> </h1>

      <Normalbutton link = "./login.js" txt="Log in"></Normalbutton>

      <Normalbutton link="#" txt="Sign up"></Normalbutton>







      
      <Footer/>

    </div>
  );
}

export default App;
