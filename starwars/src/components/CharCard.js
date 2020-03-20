import React from "react";
import { Card, CardHeader, CardText, Col } from "reactstrap";

const CharCard = props => {

    if(!props) return <h3>Loading...</h3>

    return (
        <Col>
        <Card>
            <CardHeader>Name: {props.name}</CardHeader>
            <CardText>Height: {props.height}</CardText>
            <CardText>Mass: {props.mass}</CardText>
            <CardText>Hair Color: {props.hair_color}</CardText>
            <CardText>Skin Color: {props.skin_color}</CardText>
        </Card>
        </Col>
    );
}

export default CharCard;