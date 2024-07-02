import { Card, Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AntCard = (props) => {
  const { Meta } = Card;

  if (props.landingPage) {
    //// [LandingPage] 처리 ====================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          {/* <a href={`/movie/${props.movieId}`}> */}
          <Link to={`/detail/${props.movieId}`}>
            {" "}
            &nbsp;&nbsp;
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img src={props.path} alt={props.title} />}
            >
              <Meta title={props.title} />
            </Card>
          </Link>{" "}
          &nbsp;&nbsp;
          {/* </a> */}
        </div>
      </Col>
    );
  } else {
    //// [Detail] 처리 ====================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img src={props.path} alt={props.castName} />}
          >
            <Meta title={props.castName} />
          </Card>
        </div>
      </Col>
    );
  }
};

export default AntCard;
