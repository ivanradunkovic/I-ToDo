
import React from "react";

class Contact extends React.Component
{
    onSubmit = () =>
    {
        this.props.history.push("/");
    };

    render()
    {
        return (
            <form>
                <input placeholder="First name" type="First name" />
                <input placeholder="Last name" type="Last name" />
                <input placeholder="Email" type="Email" />
                <button onClick={this.onSubmit}>Submit</button>
            </form>
        );
    }
}

export default Contact;