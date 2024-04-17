import React from 'react';
import './Search.css'
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function Search() {
  return (
    <div className="input-group mb-3">
      <MDBInput
        className="form-control"
      />
      {/* <div className="input-group-append"> */}
        <MDBBtn rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </div>
    // </div>
  );
}