import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

function Dashboard() {
  const history=useHistory();
  return (
    <div>
       <div className='nav-bar'>
           <Button variant="contained" onClick={()=>history.push("/users")}>List-Users</Button>
           <Button variant="contained" onClick={()=>history.push("/create-user")}>Create-user</Button>
          
           </div>
        <Base
        title={"Dashboard"}
        description={"Welcome to Admin Portal"}
        >
           
         
        </Base>
    </div>
  )
}

export default Dashboard