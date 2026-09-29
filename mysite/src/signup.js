import react from "react";
import Nav from "./navbar";
import Footer from "./footer";

function Signup() {
    return (
        <div class="loginpage" >
            <Nav></Nav>
            <div class="loginform" >
                <h1>Signup </h1>
                <form>
                    <input class="inputbox" type="text" placeholder="Name" ></input><br></br>
                    <input class="inputbox" type="email" placeholder="Email" ></input><br></br>
                    <input class="inputbox" type="password" placeholder="Password" ></input><br></br>
                    <button class="normalbtn" type="submit" >Signup</button>
                </form>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Signup;