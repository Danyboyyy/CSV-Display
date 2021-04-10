import React from 'react'
import { Jumbotron } from 'react-bootstrap';

const Header = () => {
 return (
  <Jumbotron className="jumb">
    <h1>CSV Display</h1>
    <p>
      Here you can drag n' drop your CSV files to display them in an amazing table.
    </p>
  </Jumbotron>
 );
}

export default Header;