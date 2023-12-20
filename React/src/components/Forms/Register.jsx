import React, { useState } from 'react'

const Register = () => {
    //give initial value for each form input
   
     const [fullname, setFullName] = useState("")
     const [email, setEmailName] = useState("")
     const [password, setPassword] = useState("")
    

    // onChangeFullName
     const onChangeFullName = (e) =>{
         setFullName(e.target.value);
         console.log(e.target.value);

     }
    // onChangeEmail
     const onChangeEmail = (e) =>{
         setEmailName(e.target.value);
         console.log(e.target.value);

     }
     //onchange password
     const onChangePassword = (e) =>{
         setPassword(e.target.value)
         console.log(e.target.value);

     }

    //submit

     const onFormSubmit  = (e) =>{
         e.preventDefault()
         console.log(
            fullname, email, password 

         )
     }
     

    // const [formData, setFormData] = useState({
    //     fullname:"",
    //     email:"",
    //     password:"",
    // })
    // console.log(formData)
    // //onChange Handler
    // const onChangeHandler = (e) =>{
    //     setFormData({
    //         ...formData, 

    //     })

    // }

  return (
    <div>
     <h2>Register Form</h2>
      <form onSubmit={onFormSubmit}>
        <div>
        <input onChange={onChangeFullName} type="text" placeholder='FullName' value={fullname} name= "fullname"/>
        </div>
        <div>
        <input onChange={onChangeEmail} type="text" placeholder="email" value={email} name="email"/>
        </div>
        <div>
        <input onChange={onChangePassword} type="text" placeholder="password" value={password} name="password"/>
        </div>
        <button  type="submit">Register</button>

     </form> 
    </div>
  )
}


export default Register
