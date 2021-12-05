import React,{useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const inputEl = useRef("");
    // console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

  
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );
    });

    const getSearchterm = () => {
        props.searchKeyWord(inputEl.current.value);
    }
    return (
        <div className="ui celled list" style={{ marginTop: "50px" }}>
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right">
                        Add Contact
                    </button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchterm} />
                    <i className="search-icon">

                    </i>
                </div>
            </div>
            {renderContactList.length > 0 ? renderContactList:"No Contacts Available"}
        </div>
    );
};

export default ContactList;
