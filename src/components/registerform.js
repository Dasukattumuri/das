import React from "react";
import "../styles/registerform.css";


export default function Registerform() {
    return (
        <div className="redister-container">
            <div className="register">
                
                    <div className="formm">

                      
                            <h1>Registration Form</h1>
                      
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Register</button>

                    </div>
                    <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" />
              
            </div>
        </div>
    )

}