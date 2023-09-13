import React from 'react';

const ContactCard = ({ contact, index, onRemove }) => {
  return (
  
    <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="circle mr-3">{contact.fullName[0]}</div>
            <div>
              <strong>{contact.fullName}</strong>
              <br />
              <small>{contact.mobileNo}</small>
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onRemove(index)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
