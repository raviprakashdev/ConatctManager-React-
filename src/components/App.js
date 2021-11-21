import {React,useState} from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

    const [contacts, setContacts] = useState([]);
    
    const addContactHandler = (contact) => {
        console.log(contact);
    }

    // const contacts = [
    //     {
    //         id: "1",
    //         name: "Ravi Prakash",
    //         email: "raviprakash01a@gmail.com",
    //     },
    //     {
    //         id: "2",
    //         name: "Ravi Prakash2",
    //         email: "raviprakashogs@gmail.com",
    //     },
    // ];
    return (
        <div className="ui container">
            <Header />
            <AddContact addContactHandler = {addContactHandler} />
            <ContactList contacts={contacts} />
        </div>
    );
}

export default App;
