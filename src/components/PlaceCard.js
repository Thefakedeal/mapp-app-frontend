import { Card } from 'react-bootstrap';
import React from 'react'
import {useHistory} from 'react-router-dom';

export default function PlaceCard({place}) {
    const history = useHistory()
    const goToPlace= ()=>{
        history.push(`/places/${place._id}`);
    }

    return (
        <Card onClick={goToPlace}>
            <Card.Body>
                {place.name}
            </Card.Body>
        </Card>
    )
}
