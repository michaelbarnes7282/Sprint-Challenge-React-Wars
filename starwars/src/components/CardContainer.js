import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./CharCard"
import { Container } from "reactstrap";

export default function CardContainer() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                // console.log(response.data);
                setData(response.data.results);

            })
            .catch(error => {
                console.log('there was an error: ', error);
            })
    }, []);
    console.log(data);
    return <div>
        {
            data.map((item, index) => {
              return  <CharCard name = {item.name} height = {item.height} mass = {item.mass} 
              hair_color = {item.hair_color} skin_color = {item.skin_color} key ={index} />
            })
        }
        
        
    </div>;
}