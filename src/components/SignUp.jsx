import axios from 'axios'
import React, { useState } from 'react'


    

const SignUp = () => {

    const [input,setInput]=new useState(
        {
            "name":"",
            "phone":"",
            "email":"",
            "password":"",
            "cnfpwd":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
       if (input.password==input.cnfpwd) {
             
             let newInput={ "name":input.name,"phone":input.phone,"email":input.email,"password":input.password}
             axios.post("http://localhost:3031/signup",newInput).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Registered Successfully")
                        setInput( {
                            "name":"",
                            "phone":"",
                            "email":"",
                            "password":"",
                            "cnfpwd":""
                        })
                    } else {
                        alert("Email id is already exist")
                        setInput( {
                            "name":"",
                            "phone":"",
                            "email":"",
                            "password":"",
                            "cnfpwd":""
                        })
                    }
                }
             ).catch(
                (error)=>{
                    console.log(error)
                }
             )
       } else {
             alert("Password and Confirm Password doesn't match")
       }
    }

    return (
        <div>
            <br></br><h3><center><u>Registration</u></center></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">PhoneNo</label>
                                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                                </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" className="form-control"  name='password' value={input.password} onChange={inputHandler}  />
                                </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password"   className="form-control"  name='cnfpwd' value={input.cnfpwd} onChange={inputHandler}  />
                            </div>
                        <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Register</button>
                            </div></center> 
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="/signin" className="btn btn-primary">Back to Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp