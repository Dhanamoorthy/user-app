import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router-dom';


function Base({title,description,children}) {
    const history=useHistory();
  return (
    <div>
       
         {/* <Button variant="primary"><Listusers/></Button>
         <Button variant="primary"><CreateUser/></Button>
         <Button variant="primary"><EditUser/></Button>
         <Button variant="primary"><Profile/></Button>
         <Button variant="primary"><Editprofile/></Button> */}

        <header>
            <h1 className='heading'>{title}</h1>
         </header>
         <main className='main-segment'>
             <h2>{description}</h2>
             <div>
               {children}
             </div>
         </main>
        
    </div>
  )
}

export default Base;