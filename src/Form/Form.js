import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        //bind the specific instance of onchange from
        //this particular class to the onchange method
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //set default form state
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        };
    }

    onChange(event) {
        this.setState({
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value
        });
    }

    

    onSubmit() {
        //this.props.onSubmit(this.state);
        //console.log(this.state);
        //if(isValid){
            this.props.onSubmit(this.state);
        //}
    }

    validate(event) {
        event.preventDefault();
        const phoneRegEx = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        const emailRegEx = /\S+@\S+\.\S+/;
        

        var name;
        var text;

        if (this.refs.firstName.value) {
            document.getElementById("firstname").innerHTML = "";
            if (this.refs.lastName.value) {
                document.getElementById("lastname").innerHTML = "";
                if (this.refs.phone.value.match(phoneRegEx)) {
                    document.getElementById("phone").innerHTML = "";
                    if (this.refs.email.value.match(emailRegEx)) {
                        document.getElementById("email").innerHTML = "";
                        //this.props.onSubmit(this.state);                   
                    }
                    else {
                        document.getElementById("email").innerHTML = "";
                        document.getElementById("email").innerHTML = "Enter valid email";
                        document.getElementById("email").style.color = "red";
                    }
                }
                else {
                    document.getElementById("phone").innerHTML = "";
                    document.getElementById("phone").innerHTML = "Enter valid phone number";
                    document.getElementById("phone").style.color = "red";
                }
            }
            else {
                document.getElementById("lastname").innerHTML = "";
                document.getElementById("lastname").innerHTML = "Enter Last Name";
                document.getElementById("lastname").style.color = "red";
            }
        }
        else {
            document.getElementById("firstname").innerHTML = "";
            document.getElementById("firstname").innerHTML = "Enter First Name";
            document.getElementById("firstname").style.color = "red";
        }
    }

    render() {
        return (
            <form onSubmit={this.validate.bind(this)}>
                <label>First Name:</label>
                <input
                    type="text"
                    ref="firstName"
                    onChange={this.onChange}
                    value={this.state.firstName}
                />
                <span id="firstname"> </span>

                <br />

                <label>Last Name:</label>
                <input
                    type="text"
                    ref="lastName"
                    onChange={this.onChange}
                    value={this.state.lastName}
                />
                <span id="lastname"></span>

                <br />

                <label>Phone: </label>
                <input
                    type="text"
                    ref="phone"
                    onChange={this.onChange}
                    value={this.state.phone}
                />
                <span id="phone"></span>

                <br />

                <label>Email:   </label>
                <input
                    type="text"
                    ref="email"
                    onChange={this.onChange}
                    value={this.state.email}
                />
                <span id="email"></span>
                <br />
                <button onClick={this.onSubmit}>Submit</button>

            </form>
        )
    }
}

export default Form;