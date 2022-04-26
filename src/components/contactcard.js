import React from "react";

const ContactCard = (props) => {
    const {id,name,email} = props.contact // destructure to make getting inomation easier yes
return(
    <div className="item">
    <div className="content" >
        <div className="header">{name}</div>
        <div>{email}</div>
    </div>
    <i className="trash alternate outline icon" 
    style={{ color:"red",marginTop: "7px" }} ></i>
    
</div>
)

}

export default ContactCard