import React from "react";
import useGetPlaces from "../../hooks/places/useGetPlaces";
import { Alert, Row, Col, Spinner } from "react-bootstrap";
import Map from "../../components/Map";
import PlaceCard from "../../components/PlaceCard";

export default function Place() {
  const { err, loading, result } = useGetPlaces();

  if (loading) return <Spinner animation="grow" role="status" />;
  if (err) return <Alert variant="danger">{err}</Alert>;
  return (
    <Row>
      <Col md={8}>
        <Map places={result} />
      </Col>
      <Col md={4}>
        {result.map((place) => (
          <PlaceCard key={place._id} place={place} />
        ))}
      </Col>
    </Row>
  );
}
