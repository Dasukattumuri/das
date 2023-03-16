import React from "react";
import "../styles/login.css";

export default function Login() {

    return (
        <div className="login-container">
            <div className="log">
                <div className="form">
                    <h3>Login</h3>
                    <p>Doesn't have an account yet? <span>Sign Up</span> </p>
                    <label>Email Address</label>
                    <input className="input" type="text" placeholder="you@example.com" />
                    <div className="pass">
                        <label>Password</label>
                        <span>Forgot Password?</span>
                    </div>
                    <input className="input" type="text" placeholder="you@example.com" />
                    <div className="check">
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </div>
                    <button>LOGIN</button>
                </div>
                <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg"/>
            </div>
        </div>
    )
}