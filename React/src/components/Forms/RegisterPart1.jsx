import  { useState } from 'react'

const Register = () => {
    //give initial value for each form input
   
    const [formData, setFormData] = useState({
      fullname:"",
      email:"",
      password:"",


    });
    // console.log(formData)

    //onchange handler

    const onChangeHandler = (e) =>{

      console.log(e);
      setFormData({
        ...formData, 
        [e.target.name]: e.target.value

      });

    };
    

    // onChangeFullName
    //  const onChangeFullName = (e) =>{
    //      setFullName(e.target.value);
    //      console.log(e.target.value);

    //  }
    // // onChangeEmail
    //  const onChangeEmail = (e) =>{
    //      setEmailName(e.target.value);
    //      console.log(e.target.value);

    //  }
    //  //onchange password
    //  const onChangePassword = (e) =>{
    //      setPassword(e.target.value)
    //      console.log(e.target.value);

    //  }

    // //submit

      const onFormSubmit  = (e) =>{
          e.preventDefault()
          console.log(
            formData

          )
      }
     

    // // const [formData, setFormData] = useState({
    // //     fullname:"",
    // //     email:"",
    // //     password:"",
    // // })
    // // console.log(formData)
    // // //onChange Handler
    // // const onChangeHandler = (e) =>{
    // //     setFormData({
    // //         ...formData, 

    // //     })

    // // }

   return (
    
     <div>
      <h2>Register Form</h2>
       <form onSubmit={onFormSubmit}>
         <div>
         <input onChange={onChangeHandler} type="text" placeholder='FullName' value={formData.fullname} name= "fullname"/>
         </div>
         <div>
         <input onChange={onChangeHandler} type="text" placeholder="email" value={formData.email} name="email"/>
         </div>
         <div>
         <input onChange={onChangeHandler} type="text" placeholder="password" value={formData.password} name="password"/>
        </div>
         <button  type="submit">Register</button>

      </form> 
     </div>
   )
 }


export default Register;



