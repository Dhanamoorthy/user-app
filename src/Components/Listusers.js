import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom';
import { Button, ButtonBase, Card } from '@mui/material';


function Listusers({users,setUsers}) {

 
  const [editIdx,setEditIdx]=useState()
 const history=useHistory();

 

  return (
      <div>
          <Button variant="contained" onClick={()=>history.push("/")}>Dash-board</Button>
         <Base
      title={"List Of Users"}
      description={"The page Contains All User Data"}
      >
      
        
        <div className='card-container' >
            {users.map((user,idx)=>(
              <div className='card' key={idx}>
                <div className='content'>
                  
                   <Card style={{ width: '18rem' }}>
                         <ListGroup variant="flush">
                            <ListGroup.Item>{user.firstname}</ListGroup.Item>
                         </ListGroup>
                         < Button variant="contained" className='button' onClick={()=>history.push(`/edit-user/${idx}`)}>Edit User</Button>
                       </Card>
                  </div>
                </div>
            ))}   
    
    
        </div>
     
    
     
      </Base>
      </div>
   
  )
}

export default Listusers;


