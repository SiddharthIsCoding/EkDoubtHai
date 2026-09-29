import react from "react";

function LoginPage(){
    return (
        <div class="loginpage" >
            <div class="loginform" >
                <h1>Login</h1>
                <form>
                    <input class="inputbox" type="email" placeholder="Email" ></input><br></br>
                    <input class="inputbox" type="password" placeholder="Password" ></input><br></br>
                    <button class="normalbtn" type="submit" >Login</button>
                </form>

            </div>
        </div>
    )
}

export default LoginPage;