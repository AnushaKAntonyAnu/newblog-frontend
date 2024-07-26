import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
  
  const[token,setToken]=useState(
    sessionStorage.getItem("token")
  ) 

  const [input,setInput]=useState(
    {
      "Message":"",
      "userId":sessionStorage.getItem("userId")
    }
  )
  const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
const readValues=()=>{
  console.log(input)
  console.log(token)
  axios.post("http://localhost:3031/create",input,{
    headers:{"token":token,"Content-Type":"application/json"}
  }).then(
    (response)=>{
if (response.data.status=="success") {
  alert("Posted Successfully")
} else {
  alert("There is something want wrong")
}
    }
  ).catch(
    (error)=>{
      console.log(error)
    }
  )
}
  return (
    <div>
       <br></br><h3><center><u>Create a Post</u></center></h3><br></br>
      <div className="container">
      <div className="card" >
      <div class="card-body">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Post a Message</label>
                <textarea name="Message" value={input.Message}  className="form-control" onChange={inputHandler} ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <center><button  onClick={readValues} className="btn btn-success">Post</button></center> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreatePost