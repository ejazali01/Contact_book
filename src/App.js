import React,{useState, useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';





function App() {
  const LOCAT_STORAGE_KEY = "allContacts" ;
  const [allContacts, setAllContacts] = useState([]);

  function  contacts(reciveAllContacts){
    setAllContacts([...allContacts, {id : uuidv4(), ...reciveAllContacts}])
  }

  useEffect(() => {
      const retriveAllContacts = JSON.parse(localStorage.getItem(LOCAT_STORAGE_KEY)); 
      if(retriveAllContacts) setAllContacts(retriveAllContacts);
  }, []);

  useEffect(() => {
      localStorage.setItem(LOCAT_STORAGE_KEY, JSON.stringify(allContacts))
      
  }, [allContacts]);


  const removeContactHandler = (id) => {
    const newContactList = allContacts.filter((curElm) => {
        return curElm.id !== id ; 
    })

    setAllContacts(newContactList);
  }

  return (
    <>
    <BrowserRouter >
        <Header/>
      <Routes>
        <Route path='/' element = {<AddContact  gettingAllContacts = {contacts} />} />
        <Route path='/contact' element = {<ContactList allContacts = {allContacts}   getContactId = {removeContactHandler} />} />
      </Routes>
        
    </BrowserRouter>
    </>
  );
}

export default App;
