import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled from "styled-components";

const PI = styled(PaginationItem)`
  background-color: white !important;
`;

const PL = styled(PaginationLink)`
  border: hidden !important;
  background-color: white !important;
`;
//unsure why mouseover still causes gray background color

export default class Pages extends React.Component {
  render() {
    return (
      <span style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Pagination>
          <PI active>
            <PL href="#">1</PL>
          </PI>
          <PI>
            <PL href="#">2</PL>
          </PI>
          <PI>
            <PL href="#">3</PL>
          </PI>
          <PI>
            <PL href="#">4</PL>
          </PI>
          <PI>
            <PL href="#">5</PL>
          </PI>
          <PI>
            <PL href="#">6</PL>
          </PI>
          <PI>
            <PL href="#">7</PL>
          </PI>
          <PI>
            <PL href="#">8</PL>
          </PI>
          <PI>
            <PL href="#">9</PL>
          </PI>
          <PI>
            <PL next href="#">Next</PL>
          </PI>
          <PI>
            <PL last href="#">></PL>
          </PI>
        </Pagination>
      </span>
    );
  }
}
