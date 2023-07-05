import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function EditUser({users,setUsers, editIdx}) {
  const history=useHistory()
  const {id} =useParams();
  const editUsers=users[id]
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")


  useEffect(()=>{
  
    setFirstname(editUsers.firstname)
    setLastname(editUsers.lastname)
    setEmail(editUsers.email)
      console.log("updating mounted")
      console.log("Id is" ,id)
  }, [editUsers])

  function updateUser () {
    const updateduser={
      firstname,
      lastname,
      email
    }
    console.log(updateduser)
    users[editIdx] = updateduser
    setUsers([...users])
    console.log(editIdx)
    // console.log(editUsers)
   
  }
  return (
    <div>
        <Button variant="contained" onClick={()=>history.push("/")}>Dash-board</Button>
      <Base
      title={"Edit the User Here"}
      description={"Edit User Name Here"}
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
          < Button variant="contained"onClick={updateUser} >Edit User</Button>
          </div>

          
      </Base>
    </div>
  )
}

export default EditUser