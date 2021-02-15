import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Jumbotron} from 'react-bootstrap'
import {FaHandPointLeft} from 'react-icons/fa'


export default function NotFound() {
    const history = useHistory()
    return (
        <Jumbotron >
            <h1>
                Oops! The Thing You're Looking For Isn't Here.
            </h1>
            <Button onClick={()=>{history.goBack()}}>
                <FaHandPointLeft/> Go Back
            </Button>
        </Jumbotron>
    )
}
