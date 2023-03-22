import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom';

const ContactList = (props) => {

  function deleteContactHandler(id){
      props.getContactId(id);
  }

    const contactRender = props.allContacts.map((contact) => {
        return <ContactCard key= {contact.id} contact = {contact} clickHandler ={deleteContactHandler}/>
    })
  return (
    <>
      <div className='container' >
          <div className ='container' style={{display : 'flex', justifyContent : 'space-around'}}>
              <div>
                  <h2 style={{marginTop : '50px'}}>Contact List</h2>
              </div>

              <div>
                  <Link to="/" >
                    <button className='ui button blue right'style={{marginTop :'50px', boxShadow : "0.2px 0.3px 1px gray"}}>+</button>
                  </Link>
              </div>
            
            </div>
            <div className='ui celled list '>{contactRender}</div>
        </div>
    </>
  );  
}

export default ContactList