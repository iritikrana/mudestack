import React from "react";
import { Col, Row } from "antd";

function Inbox() {
  return (
    <Row
      style={{
        border: "2px solid black",
      }}
    >
      <Col span={24}>
        <Row
          style={{
            border: "2px solid green",
          }}
        >
          <Col>dddddd</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Inbox;
