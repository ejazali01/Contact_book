import React,{useState} from 'react'
import { useNavigate } from 'react-router';

const AddContact = (props) => {
  const initialValue = {name : "", email : ""};
  const [contactValue, setContactValue] = useState(initialValue);
  const navigate = useNavigate();

  function changeHandler(e){
    const {name, value} = e.target ;
    setContactValue({...contactValue, [name]: value})
  }
  
  function submitHandler(e){
    e.preventDefault();
    if(contactValue.name === "" || contactValue.email  === ""){
      alert("please fill the data")
      return ;
    }
    props.gettingAllContacts(contactValue);
    setContactValue({name : "", email : ""});
    // props.history.push("/");
    navigate('/contact');
  }

  return (
    <div className='ui container' style={{marginTop : '7px'}}>
      <h2>Add Contact</h2>

      <form className='ui form' onSubmit={submitHandler}>
        <div style={{display : 'flex', flexDirection :'column'}}>
        <div className='field ui left icon input'>
          {/* <label>Name</label> */}
            <input type='text' name= 'name'
            value= {contactValue.name}
            onChange = {changeHandler}
             placeholder= 'Name' /><i className="users icon"></i>
        </div>

        <div className='field ui left icon input'>
          {/* <label>Email</label> */}
            <input type='email' name= 'email'
            value={contactValue.email}
            onChange = {changeHandler}
            placeholder= 'Email' />
        </div>
        </div>
            <button className='ui button blue' style={{ marginTop :'10px'}}>Add</button>
      </form>
    </div>
  )
}

export default AddContact
