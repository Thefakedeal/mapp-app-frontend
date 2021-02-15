import React from "react";
import useGetPlaces from "../../hooks/places/useGetPlaces";
import { Alert, Row, Col, Spinner } from "react-bootstrap";
import Map from "../../components/Map";
import PlaceCard from "../../components/PlaceCard";
import { postData } from "../../helpers/fetchData";

export default function Places() {
  


  const { err, loading, result, reload } = useGetPlaces();
  if (loading) return <Spinner animation="grow" role="status" />;
  if (err) return <Alert variant="danger">{err}</Alert>;
  return (
    <Row>
      <Col md={8}>
        <Map places={result} />
      </Col>
      <Col md={4}>
        {result.map((place) => (
          <PlaceCard key={place._id} place={place} deletePlace = {async ()=>{
            const confirm_delete = window.confirm("Are You Sure?");
            if(!confirm_delete) return; 
            const places = await postData({endpoint:`/api/v1/places/${place._id}`, method: 'DELETE'})
            reload();
          }} />
        ))}
      </Col>
    </Row>
  );
}
