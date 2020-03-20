import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./CharCard"
import { Container, Row, Button } from "reactstrap";

const buttonStyle = {
    margin: '0 10px'
}

export default function CardContainer() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState("https://swapi.co/api/people/?page=1");
    useEffect(() => {
        axios
            .get(`${page}`)
            .then(response => {
                // console.log(response.data);
                setData(response.data.results);
                setPage(response.data);

            })
            .catch(error => {
                console.log('there was an error: ', error);
            })
    }, [page]);
    // console.log(data);
    // console.log('page', page)
    return <Container>

        { page.previous != null &&
        <Button style = {buttonStyle} color = "secondary" onClick={() => setPage(page.previous)}>Previous</Button>
        }
        <Button color = "secondary" onClick={() => setPage(page.next)}>Next</Button>
        
        <Row>
            {
                data.map((item, index) => {
                    return <CharCard name={item.name} height={item.height} mass={item.mass}
                        hair_color={item.hair_color} skin_color={item.skin_color} key={index} />
                })
            }
        </Row>
    </Container>;
}