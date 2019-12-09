import React from 'react';
import { withRouter } from 'react-router-dom';

function EditGift(props) {
  return (
    <div>
      <h3>Create a new gift</h3>
      <form onSubmit={props.handleSubmit}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.giftForm.photo}
          onChange={props.handleFormChange} />
        <p>Gift's name:</p>

        <input
          type="text"
          name="name"
          value={props.giftForm.name}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditGift);