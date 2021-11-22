import React from "react";
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
                    style={{ height: "50px",marginRight:"20px" }}
                    src={user}
                    alt="user"
                />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", marginLeft: "auto" }}
                onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    );
};
export default ContactCard;
