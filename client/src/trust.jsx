import React from 'react';
import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYelp } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const TrustAlert = styled(Alert)`
  color: #333333;
`;

const yelpBurst = <FontAwesomeIcon icon={ faYelp } />;

export default class Trust extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <TrustAlert color="secondary" isOpen={this.state.visible} toggle={this.onDismiss}>
        <span style={{color: "#d32323"}}>{yelpBurst}</span> <b>Your trust is our top concern,</b> so businesses can't pay to alter or remove their reviews.  <a href="#">Learn more.</a>
      </TrustAlert>
    );
  }
}