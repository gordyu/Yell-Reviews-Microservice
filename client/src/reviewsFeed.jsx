import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faStarHalfAlt, faCamera, faCode, faAward, faCommentAlt, faUserPlus, faLightbulb, faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
const friendsIcon = <FontAwesomeIcon icon={faUserFriends} />;
const halfStar = <FontAwesomeIcon icon={faStarHalfAlt} />;
const camera = <FontAwesomeIcon icon={faCamera} />;
const code = <FontAwesomeIcon icon={faCode} />;
const award = <FontAwesomeIcon icon={faAward} />;
const message = <FontAwesomeIcon icon={faCommentAlt} />;
const follow = <FontAwesomeIcon icon={faUserPlus} />;
const lightbulb = <FontAwesomeIcon icon={faLightbulb} />;
const thermometer = <FontAwesomeIcon icon={faTemperatureLow} />;
import { faShareSquare, faLaugh } from "@fortawesome/free-regular-svg-icons";
const shareSquare = <FontAwesomeIcon icon={faShareSquare} />;
const laugh = <FontAwesomeIcon icon={faLaugh} />;
import { Button, Badge, Container, Row, Col, 
         ListGroup, ListGroupItem } from "reactstrap";

const Feed = (props) => {
  return (
    <ul>
      <div className="feed">
        {props.reviews.map((review) => {
          return (
            <div className="feed-list-item" key={review.id}>
              <Container>
                <Row>
                  <Col>
                    <Row>
                      <Col xs="auto">
                        <img
                          src={`./profilepics/${review.photoID}.jpg`}
                          style={{ borderRadius: "4px", height: "60px", width: "60px" }}
                        />
                      </Col>
                      <Col>
                        <b>
                          <a href="#" style={{ color: "#0073bb", fontSize: "18px"}}>
                            {review.username}
                          </a>
                        </b>
                        <br />
                        <b>{review.cityState}</b>
                        <br />
                        <span style={{ color: "#f15c00" }}> 
                          {friendsIcon} &nbsp;
                        </span>
                        <span style={{ color: "#666666" }}>   
                          {review.numFriends} friends
                        </span>
                        <br />
                        <span style={{ color: "#f15c00" }}>
                          {halfStar} &nbsp;&nbsp;
                        </span>
                        <span style={{ color: "#666666" }}> 
                          {review.numReviews} reviews</span>
                        <br />
                        <span style={{ color: "#f15c00" }}>
                          {camera} &nbsp;&nbsp;
                        </span>
                        <span style={{ color: "#666666" }}> 
                          {review.numPhotos} photos
                        </span>
                        <br />
                          <div className="list_group">
                            <ListGroup flush style={{fontSize:"15px"}}>
                                <ListGroupItem tag="a" href="#" style={{lineHeight:"normal",paddingTop:"12px", paddingBottom:"3px"}}>
                                  {shareSquare}&nbsp;&nbsp;
                                  Share review
                                </ListGroupItem>
                                <ListGroupItem tag="a" href="#" style={{lineHeight:"normal",paddingTop:"6px", paddingBottom:"3px"}}>
                                  {code}&nbsp;
                                  Embed review
                                </ListGroupItem>
                                <ListGroupItem tag="a" href="#" style={{lineHeight:"normal",paddingTop:"6px", paddingBottom:"3px"}}>
                                  {award}&nbsp;&nbsp;&nbsp;
                                  Compliment
                                </ListGroupItem>
                                <ListGroupItem tag="a" href="#" style={{lineHeight:"normal",paddingTop:"6px", paddingBottom:"3px"}}>
                                  {message}&nbsp;&nbsp;
                                  Send message
                                </ListGroupItem>
                                <ListGroupItem tag="a" href="#" style={{lineHeight:"normal",paddingTop:"6px", paddingBottom:"3px"}}>
                                  {follow}&nbsp;
                                  Follow {review.username}
                                </ListGroupItem>
                            </ListGroup>
                          </div>
                        <br />
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <span className="star_bar">
                      {
                        review.reviewScore === 1 ? 
                        <img src="./starimgs/one.png" /> 
                        : null
                      }
                      {
                        review.reviewScore === 2 ? 
                        <img src="./starimgs/two.png" />
                        : null
                      }
                      {
                        review.reviewScore === 3 ? 
                        <img src="./starimgs/three.png" /> 
                        : null
                      }
                      {
                        review.reviewScore === 4 ? 
                        <img src="./starimgs/four.png" />
                        : null
                      }
                      {
                        review.reviewScore === 5 ? 
                        <img src="./starimgs/five.png" />
                        : null
                      }
                    </span>&nbsp; 
                    <span style={{ color: "#666666" }}> 
                      {review.date}
                    </span>
                    <br />
                      {review.reviewText}
                    <br />
                    <div style={{ fontSize: "14px" }}>
                      <br />
                      <b>
                        <a href="#" style={{ color: "#0073bb" }}>
                          {review.numVotes} others
                        </a> voted for this review
                      </b>
                      <br />
                      <Button outline color="secondary" size="sm">
                        {lightbulb} Useful &nbsp;
                          <Badge color="secondary">
                            {review.numUseful}
                          </Badge>
                      </Button>
                      &nbsp;&nbsp;
                      <Button outline color="secondary" size="sm">
                        {laugh} Funny &nbsp;
                        <Badge color="secondary">
                          {review.numFunny}
                        </Badge>
                      </Button>
                      &nbsp;&nbsp;
                      <Button outline color="secondary" size="sm">
                        {thermometer} Cool &nbsp;
                        <Badge color="secondary">
                          {review.numCool}
                        </Badge>
                      </Button>
                    </div>
                  </Col>
                </Row>
                <hr />
              </Container>
            </div>
          );
        })}
      </div>
    </ul>
  )
};

export default Feed;