import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'


function CreateUser({users,setUsers}) {
 

 const history=useHistory();
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  
// create user function is you cklicked the createuser button function
 const addUser=()=>{
     // our data type is a array of object so we create the new object of data
     
     const newUser={
         firstname,
         lastname,
         email ,
     }
   setUsers([...users,newUser])
   
 }
  return (
    <div>
       <Button variant="contained" onClick={()=>history.push("/")}>Dash-board</Button>
      <Base
      title={"Create User"}
      description={"The page create a new user"}
      >
        <div>
      

        <TextField id="filled-basic"
         label="First-Name"
          variant="filled"
           type='text'
           placeholder='firstname' 
           value={firstname}
            onChange={(e)=>setFirstname(e.target.value)} />
        <TextField id="filled-basic" 
        label="Last-Name" 
        variant="filled"
         type="text"
         placeholder='lastname' 
         value={lastname}
         onChange={(e)=>setLastname(e.target.value)} />
        <TextField id="filled-basic" 
        label="Email" 
        variant="filled"
         type="email"
         placeholder='email' 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}/>

           < Button variant="contained" onClick={addUser}>CreateUser</Button>
        </div>

      </Base>
    </div>
  )
}

export default CreateUser