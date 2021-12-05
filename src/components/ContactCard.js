import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item" style={{ display: "flex", alignItems: "center" }}>
            <div
                className="item"
                style={{ display: "flex", alignItems: "center" }}
            >
                <img
                    className="ui avatar iamge"
                    style={{ height: "50px", marginRight: "20px" }}
                    src={user}
                    alt="user"
                />
                <div className="content">
                    <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
                        <div className="header">{name}</div>
                    </Link>
                    <div>{email}</div>
                </div>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
                onClick={() => props.clickHandler(id)}
            ></i>
             <Link to={{pathname:`/edit`,state:{contact:props.contact}}}>
            <i
                className="edit alternate outline icon"
                style={{ color: "blue", marginTop: "7px", marginLeft: "auto" }}
                // onClick={() => props.clickHandler(id)}
            ></i>
            </Link>
        </div>
    );
};
export default ContactCard;
