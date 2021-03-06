import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Character } from '../../types/types'
import '../../characters/style.css';
import './characterCard.css'
import styled from 'styled-components';
import { Link } from "@reach/router"

const CharacterCard = ({name, height, gender, mass, homeworld}: Character) => {
    return (
        <Card data-testid={name} className="character-card mb-4">
            <Card.Header className="mb-5 text-center"><h3 data-testid={`${name}-name`}>{name}</h3></Card.Header>
            <Card.Body className="mt-3">
            <Card.Text className="d-flex justify-content-center">
                <Item>Heigth: <Span data-testid={`${name}-height`}>{height}</Span></Item>
            </Card.Text>
            <Card.Text className="d-flex justify-content-center">
                <Item>Mass: <Span data-testid={`${name}-mass`}>{mass}</Span></Item>
            </Card.Text>
            <Card.Text className="d-flex justify-content-center">
                <Item>Gender: <Span data-testid={`${name}-gender`}>{gender}</Span></Item>
            </Card.Text>
            <Card.Text className="d-flex justify-content-center">
                <Item>Homeworld: <Span data-testid={`${name}-homeworld`}>{homeworld}</Span></Item>
            </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-end mt-2">
        <Link to={`/character/${name}`} >
            <Button variant="danger">See More</Button>
        </Link>
        </div>
        </Card>
    )
}
const Item = styled.div`
    font-size: 20px;
`
const Span = styled.span`
    font-weight: bold;
`
export default CharacterCard
