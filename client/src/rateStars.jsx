import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const placeholderStar = <FontAwesomeIcon icon={faStar} />;
import { Button, Tooltip } from "reactstrap";

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <span style={{display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <Button color="secondary" id={'OneStar-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'OneStar-' + this.props.id} toggle={this.toggle}>
          Eek! Methinks not.
        </Tooltip>&nbsp;

        <Button color="secondary" id={'TwoStar-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'TwoStar-' + this.props.id} toggle={this.toggle}>
          Meh. I've experienced better.
        </Tooltip>&nbsp;

        <Button color="secondary" id={'ThreeStar-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'ThreeStar-' + this.props.id} toggle={this.toggle}>
          A-OK.
        </Tooltip>&nbsp;

        <Button color="secondary" id={'FourStar-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'FourStar-' + this.props.id} toggle={this.toggle}>
          Yay! I'm a fan.
        </Tooltip>&nbsp;

        <Button color="secondary" id={'FiveStar-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'FiveStar-' + this.props.id} toggle={this.toggle}>
          Woohoo! As good as it gets!
        </Tooltip>

      </span>
    );
  }
}

class ReactStars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltips: [
        {
          placement: 'top',
          text: placeholderStar
        }
      ]
    };
  }

  render() {
    return (
      <div>
        { this.state.tooltips.map((tooltip, i) => {
          return <TooltipItem key={i} item={tooltip} id={i} />;
        })}
      </div>
    );
  }
}

export default ReactStars;