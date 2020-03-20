import React from "react";
import { Card, CardHeader, CardText, CardBody, Col } from "reactstrap";

const cardStyle = {
    margin: '20px'
}

const CharCard = props => {

    return (
        <Col xl="6">
            <Card style = {cardStyle}>
                <CardHeader>Name: {props.name}</CardHeader>
                <CardBody>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Mass: {props.mass}</CardText>
                    <CardText>Hair Color: {props.hair_color}</CardText>
                    <CardText>Skin Color: {props.skin_color}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CharCard;