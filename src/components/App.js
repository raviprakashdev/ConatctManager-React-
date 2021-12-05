import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";

function App() {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setsearchterm] = useState("");
    const [searchResults, setsearchResults] = useState([]);

    const retreiveContacts = async () => {
        const response = await api.get("/contacts");
        return response.data;
    };

    const addContactHandler = async (contact) => {
        console.log(contact);
        const request = {
            id: uuid(),
            ...contact,
        };
        const response = await api.post("/contacts", request);
        setContacts([...contacts, response.data]);
    };

    const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        const { id, name, email } = response.data;
        setContacts(
            contacts.map((contact) => {
                return contact.id === id ? { ...response.data } : contact;
            })
        );
    };

    const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);

        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    const searchHandler = (searchTerm) => {
        setsearchterm(searchTerm);
        if (searchTerm !== "") {
            const newContactList = contacts.filter((contact) => {
                return Object.values(contact)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            console.log(newContactList);
            setsearchResults(newContactList);
        } else {
            setsearchResults(contacts);
        }
    };

    const LOCAL_STORAGE_KEY = "contacts";

    useEffect(() => {
        // const retriveContacts = JSON.parse(
        //     localStorage.getItem(LOCAL_STORAGE_KEY)
        // );
        // if (retriveContacts) {
        //     setContacts(retriveContacts);
        // }
        const getAllContacts = async () => {
            const allContacts = await retreiveContacts();
            if (allContacts) setContacts(allContacts);
        };
        getAllContacts();
    }, []);

    useEffect(() => {
        // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
                {/* <Switch> */}
                <Switch>
                    {/* <Route path="/" exact component={() => <ContactList contacts={contacts}
                        getContactId={removeContactHandler} />} />
                    <Route
                        path="/add"
                        exact
                        component={() => (
                            <AddContact addContactHandler={addContactHandler} />
                        )} */}
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <ContactList
                                {...props}
                                contacts={searchTerm.length < 1 ? contacts : searchResults}
                                getContactId={removeContactHandler}
                                term={searchTerm}
                                searchKeyWord={searchHandler}
                            />
                        )}
                    />
                    <Route
                        path="/add"
                        exact
                        render={(props) => (
                            <AddContact
                                {...props}
                                addContactHandler={addContactHandler}
                            />
                        )}
                    />
                    <Route
                        path="/edit"
                        exact
                        render={(props) => (
                            <EditContact
                                {...props}
                                updateContactHandler={updateContactHandler}
                            />
                        )}
                    />
                    <Route
                        path="/contact/:id"
                        exact
                        component={ContactDetail}
                    />
                </Switch>
                {/* </Switch> */}

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
