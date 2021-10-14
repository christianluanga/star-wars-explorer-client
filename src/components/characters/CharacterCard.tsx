import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Character } from '../types/types'
import '../characters/style.css';
import styled from 'styled-components';
//@ts-ignore
import { Link } from "@reach/router"

const CharacterCard = ({name, height, gender, mass, homeworld}: Character) => {
    return (
        <Card className="character-card" style={{ width: '19%', height: '25rem', marginLeft: '1%', marginBottom: '3rem'}}>
        <Card.Body className="mt-3">
            <Card.Title className="mb-5 text-center"><h3>{name}</h3></Card.Title>
            <Card.Text className="d-flex justify-content-center">
                <Item>Heigth: <Span>{height}</Span></Item>
            </Card.Text>
            <Card.Text className="d-flex justify-content-center">
                <Item>Mass: <Span>{mass}</Span></Item>
            </Card.Text>
            <Card.Text className="d-flex justify-content-center">
                <Item>Gender: <Span>{gender}</Span></Item>
            </Card.Text>
            <Card.Text className="d-flex justify-content-center">
                <Item>Homeworld: <Span>{homeworld}</Span></Item>
            </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-end mt-2">
        <Link to={`/character/${name}`}>
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
