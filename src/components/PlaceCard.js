import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function PlaceCard({ place,deletePlace }) {
  const history = useHistory();
  const goToPlace = () => {
    history.push(`/places/${place._id}`);
  };

  return (
    <Row className="p-3">
      <Col xs={9} onClick={goToPlace}>
        {place.name}
      </Col>
      <Col>
        <Button onClick={deletePlace} size="sm">
          <FaTrash />
        </Button>
      </Col>
    </Row>
  );
}
