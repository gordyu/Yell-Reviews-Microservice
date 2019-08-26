import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const magnifyingGlass = <FontAwesomeIcon icon={faSearch} />;
import {
  InputGroup, InputGroupAddon, InputGroupButtonDropdown, Input, Button, Spinner, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from "reactstrap";
import Trust from "./trust.jsx";
import RateStars from "./rateStars.jsx";
import Pages from "./pages.jsx";
import Feed from "./reviewsFeed.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      error: null,
      isLoaded: false,
      items: [],
      value: "Lowest Rated"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  componentDidMount() {
    fetch("http://localhost:${process.env.PORT}/lowestrated")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    if (this.state.error) return <div>Error: {error.message}</div>;
    else if (!this.state.isLoaded)
      return (
        <div>
          <Spinner
            style={{ width: "25rem", height: "25rem" }}
            type="grow"
            color="danger"
          />
        </div>
      );
    else {
      return (
        <div className="feed">
          <div className="feed_header">
            <h2>
              Recommended Reviews <b>for Hack Reactor</b>
            </h2>
            <Trust />
          </div>
          <span className="search">
            <InputGroup>
              <Input placeholder="Search within the reviews" />
              <InputGroupAddon addonType="append">
                <Button color="danger">{magnifyingGlass}</Button>
              </InputGroupAddon>
              &nbsp;&nbsp;
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                Sort by
              </div>
              <InputGroupButtonDropdown
                addonType="append"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleDropDown}
              >
                &nbsp;
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle color="danger" caret>
                    {this.state.value}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><div onClick={()=>{
                      fetch("http://localhost:9002/highestratedladies")
                      .then(res => res.json())
                      .then(
                        result => {
                          this.setState({
                            isLoaded: true,
                            items: result,
                            value: 'Highest Rated Ladies'
                          });
                        },
                        error => {
                          this.setState({
                            isLoaded: true,
                            error
                          });
                        })}
                    }>Highest Rated Ladies</div>
                    </DropdownItem>
                    <DropdownItem><div onClick={()=>{
                      fetch("http://localhost:9002/highestratedgents")
                      .then(res => res.json())
                      .then(
                        result => {
                          this.setState({
                            isLoaded: true,
                            items: result,
                            value: 'Highest Rated Gentlemen'
                          });
                        },
                        error => {
                          this.setState({
                            isLoaded: true,
                            error
                          });
                        })}
                    }>Highest Rated Gentlemen</div>
                    </DropdownItem>
                    <DropdownItem><div onClick={()=>{
                      fetch("http://localhost:9002/lowestrated")
                      .then(res => res.json())
                      .then(
                        result => {
                          this.setState({
                            isLoaded: true,
                            items: result,
                            value: 'Lowest Rated'
                          });
                        },
                        error => {
                          this.setState({
                            isLoaded: true,
                            error
                          });
                        })}                      
                    }>Lowest Rated</div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </InputGroupButtonDropdown>
            </InputGroup>
          </span>
          <hr />
          <div>
            <Container>
              <Row>
                <Col>
                  <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1f2e356daa5c/writeareview/empty_profile.png" />
                </Col>
                <Col>
                  <div
                    className="new_review"
                    style={{
                      backgroundColor: "#e6e6e6",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      borderRadius: "5px",
                      borderColor: "gray",
                      paddingTop: "7px"
                    }}
                  >
                    <RateStars />
                    <hr />
                    <div className="horizontally_centered">
                      <a
                        href="#"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        Start your review of&nbsp;<b>Hack Reactor.</b>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <hr />
          <Feed reviews={this.state.items} />
          <hr />
          <div className="pagnation">
            Page 1 of 10
            <span className="pages">
              <Pages />
            </span>
          </div>
          <hr />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("reviews"));