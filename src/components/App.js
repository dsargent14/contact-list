import React,  {useState} from 'react';
import './App.css';
import Header from "./header"
import AddContact from "./AddContact"
import ContactList from "./contactlist"

// create jsx compnonet
function App() {
const [contacts,setContacts] =useState([])

const addContactHandler = (contact)=> {
setContacts([...contacts,contact])
}

    return ( 
      
       <div className='ui container' > 
          <Header />
          <AddContact addContactHandler={addContactHandler}  />
          <ContactList contacts= {contacts}/>

          </div>

    );
}

export default App;