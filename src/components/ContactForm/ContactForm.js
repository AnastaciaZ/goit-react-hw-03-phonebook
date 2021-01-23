import React from 'react';
import shortid from 'shortid';
import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends React.Component { 
    state = {
        name: '',
        number: '',
    };
    nameInputId = shortid.generate();

    handleChange = event => {
    const { name,value } = event.currentTarget;
    this.setState({ [name]: value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number);
        this.reset();
    };
    reset = () => { 
        this.setState({name: '', number: ''});
        };

    render() { 
        return (
            <form className={ s.contactsForm} onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>  
                    Name
           <br />
                    <input
                    className={ s.contactInput}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                        id={this.nameInputId} />
                </label>
                <br/>
                <label>
                    Number
                     <br />
            <input
                    className={ s.contactInput}
                    type="text"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange} />
                </label>
                 <br/>
                <button type="submit">Add contact</button>
                </form>
        );
    };
};

export default ContactForm;