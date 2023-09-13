import React, { Component } from 'react';
import InputElement from './reusable-components/InputElement';
import ButtonElement from './reusable-components/ButtonElement';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        fullName: '',
        mobileNo: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, mobileNo } = this.state.formData;
    if (fullName.trim() && mobileNo.trim()) {
      this.props.onSubmit({ fullName, mobileNo });
      this.setState({
        formData: {
          fullName: '',
          mobileNo: '',
        },
      });
    }
  };

  render() {
    const { formData } = this.state;

    return (
      <div className='card'>
        <div className='card-body'>
          <h1 className='text-center text-success' >Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <InputElement
            labelName="Full Name"
            type="text"
            name="fullName"
            placeholder="Enter Your Full Name"
            value={formData.fullName}
            onChange={this.handleChange}
          />
          <InputElement
            labelName="Mobile Number"
            placeholder="Enter Your Mobile Number"
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={this.handleChange}
          />
          <ButtonElement className="btn btn-info floate-right" type="submit"  buttonName="Save Your Contact"/>
        </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
