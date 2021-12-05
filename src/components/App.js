import {React,useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Route ,Switch,Route } from "react-router-dom";
import { uuid } from 'uuidv4';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

    const [contacts, setContacts] = useState([]);
    
    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, {id:uuid() , ...contact}]);
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    }

    const LOCAL_STORAGE_KEY = "contacts";

     useEffect(() => {
         const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
         if (retriveContacts) {
             setContacts(retriveContacts);
         }
     }, []);
    
    useEffect(() => {  
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    }, [contacts]);


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
    // ]
    return (
        <div className="ui container">
            <Router>
                <Header />
                <Switch>
                    <Route path="/add" exa component={AddContact} />
                    <Route path="/" component={ContactList} />
                </Switch>

                {/* <AddContact addContactHandler={addContactHandler} /> */}
                {/* <ContactList
                    contacts={contacts}
                    getContactId={removeContactHandler}
                /> */}
            </Router>
        </div>
    );
}

export default App;
