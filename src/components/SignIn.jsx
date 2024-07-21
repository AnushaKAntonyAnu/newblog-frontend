import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate()

    const [input,setInput]=useState(
        {
            "email":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:3031/signin",input).then(
            (response)=>{
                console.log(response.input)
                if (response.data.status=="Incorrect password") {
                    alert("Incorrect password ")
                } else if(response.data.status=="Invalid email ID"){
                    alert("Invalid email ID")
                }
                else{
                    let token=response.data.token
                    let userId=response.data.userId
                    console.log(userId)
                    console.log(token)

                    sessionStorage.setItem("userId",userId)
                    sessionStorage.setItem("token",token)

                    navigate("/createpost")
                }
            }
        )
    }

    return (
        <div>



            <br></br><h3><center><u>Login</u></center></h3><br></br>
            <div className="container">
                <div className="card" >
                    <div class="card-body">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}  />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" id="" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                                </div>
                               <center> <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>Log In</button>
                                   
                                </div></center>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="/signup" className="btn btn-secondary">Goto Register</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default SignIn