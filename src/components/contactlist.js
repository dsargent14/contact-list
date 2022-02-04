import React from "react";
import ContactCard from "./contactcard";

// always import react or where code is coming from



const ContactList = (props) => {
    const renderContactList= props.contacts.map((contact) =>{
return( // JSX block
<ContactCard contact= {contact}></ContactCard>
)
    
})


    return  <div className="ui celled list">
        {renderContactList}
        </div>
}
export default ContactList  // export the functions so they can be imported