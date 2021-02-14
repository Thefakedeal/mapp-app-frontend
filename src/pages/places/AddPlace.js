import React from 'react'
import {Row,Col} from 'react-bootstrap'
import AddMap from '../../components/AddMap'
import PlaceForm from '../../components/PlaceForm'

export default function AddPlace() {
    return (
        <Row>
            <Col md={8}>
                <AddMap />
            </Col>
            <Col md={4}>
                <PlaceForm /> 
            </Col>
        </Row>
    )
}
