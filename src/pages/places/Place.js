import React from 'react'
import {useParams} from 'react-router-dom'
import useGetPlace from '../../hooks/places/useGetPlace'
import { Alert, Row,Col,Spinner } from 'react-bootstrap'
import Map from '../../components/Map'

export default function Place() {
    const { id } = useParams();
    const { err,loading, result } = useGetPlace(id)
    
    if(loading) return <Spinner animation="grow" role="status"/>
    if(err) return (<Alert variant='danger'>{err}</Alert>)
    return (
        <Row>
            <Col md={8}>
                <Map places={[result]}/>
            </Col>
            <Col md={4}>
                <h3 className='m-2'>
                    {result.name}
                </h3>
                <p>
                    {result.description}
                </p>
            </Col>
        </Row>
    );
    return 'sasd';
}
