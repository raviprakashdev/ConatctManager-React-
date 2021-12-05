import React from "react";

class EditContact extends React.Component {

    constructor(props) {
        super(props);
        const { id, name, email } = props.location.state.contact;
        this.state = {
            id,
            name,
            email,
        };
    }

    // state = {
    //     name:"",
    //     email:""
    // }
    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are required");
            return;
        }
        console.log(this.state)
        this.props.updateContactHandler(this.state)
        this.setState({ name: "", email: "" });
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="ui main" style={{marginTop:"50px"}}>
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        ></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Eamil"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        ></input>
                        <div>
                            <button className="ui button blue" >Update</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditContact;
