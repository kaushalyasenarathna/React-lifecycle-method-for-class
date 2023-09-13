import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import Mainapp from '../../layouts/Mainapp';
import ContactCard from '../../components/ContactCard';

import '../../styles/style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    try {
      const storedContacts = localStorage.getItem('contacts');
      if (storedContacts) {
        this.setState({ contacts: JSON.parse(storedContacts) });
      }
    } catch (error) {
      console.error('Error loading contacts from localStorage:', error);
    }
  }
  handleRemoveContact = (index) => {
    this.setState((prevState) => {
      const updatedContacts = [...prevState.contacts];
      updatedContacts.splice(index, 1);
      return { contacts: updatedContacts };
    });
  };
  componentDidUpdate( prevState) {
    try {
      if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    } catch (error) {
      console.error('Error saving contacts to localStorage:', error);
    }
  }
  
  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Mainapp>
          <div>
            <ContactForm onSubmit={this.handleAddContact} />
          </div>
          <div className='card mt-5'>
        <div className='card-body'>
        <div className="row justify-content-center">
            <h2 className='text-center text-info'>Contact List</h2>
            
            {contacts.length > 0 ? (
                contacts.map((contact, index) => (
                  <ContactCard
                    key={index}
                    contact={contact}
                    index={index}
                    onRemove={this.handleRemoveContact}
                  />
                ))
              ) : (
                <p>No contacts available.</p>
              )}
          </div>
        </div>
         </div>
     
        </Mainapp>
      </div>
    );
  }
}

export default Home;