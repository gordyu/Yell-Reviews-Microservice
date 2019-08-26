import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const star = <FontAwesomeIcon icon={faStar} />;
import { Button, UncontrolledTooltip } from "reactstrap";

export default function rateStars(){
  return (
    <span style={{display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <Button color="secondary" id="OneStar">
        {star}
      </Button>
      <UncontrolledTooltip placement="top" target="OneStar">
        Eek! Methinks not.
      </UncontrolledTooltip>&nbsp;

      <Button color="secondary" id="TwoStar">
        {star}
      </Button>
      <UncontrolledTooltip placement="top" target="TwoStar">
        Meh. I've experienced better.
      </UncontrolledTooltip>&nbsp;

      <Button color="secondary" id="ThreeStar">
        {star}
      </Button>
      <UncontrolledTooltip placement="top" target="ThreeStar">
        A-OK.
      </UncontrolledTooltip>&nbsp;

      <Button color="secondary" id="FourStar">
        {star}
      </Button>
      <UncontrolledTooltip placement="top" target="FourStar">
        Yay! I'm a fan.
      </UncontrolledTooltip>&nbsp;

      <Button color="secondary" id="FiveStar">
        {star}
      </Button>
      <UncontrolledTooltip placement="top" target="FiveStar">
        Woohoo! As good as it gets!
      </UncontrolledTooltip>&nbsp;

    </span>
  );
}