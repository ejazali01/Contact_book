import React from 'react'
import user from '../images/user.png'

const ContactCard = (props) => {
    const {id, name, email} = props.contact;

  
  return (
    <>

    <div className='ui container' style={{display :'flex', justifyContent : 'space-between', marginTop :'10px', boxShadow : "0.2px 0.3px 1px gray"}}>
    <div className='item' key={id} style={{display :'flex', justifyContent : 'space-between'}}>
        <img className='ui avatar image' src={user} alt='user' />
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
    </div>

    <i className='trash alternate outline icon' 
        style={{color : 'red', marginTop : '7px', cursor:'pointer'}}
        onClick = {() => props.clickHandler(id)}
    ></i>
    </div>
    </>
        
        );
    };

export default ContactCard