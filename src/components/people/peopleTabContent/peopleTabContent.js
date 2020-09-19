import React, {useState, useEffect} from 'react';

import { Flex, Image, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

import API from "../../../API";

const PeopleTabContent = ({id, imgSrc}) => {
    const [name, setName] = useState("");
    const [knownFor, setKnownFor] = useState([]);

    

    useEffect(() => {
        const credits = [];

        API.get(`person/${id}`).then( response => {
            setName(response.data.name)
        } );
        API.get(`/person/${id}/movie_credits`).then( response => {
            
            response.data.cast.slice(1, 5).map( el => {
                return credits.push(el["title"]);
            } )

            setKnownFor([...credits]);
        } );
        console.log()
    }, [id])

    console.log(name, knownFor)
    return (
        <Flex direction="column" justify="flex-start" align="center" m="10px" w="200px" h="350px">
            <Link to={`/person/${name}/${id}`}>
                <Image src={imgSrc} w="150px" h="225px" borderRadius="10px" mb="20px" cursor="pointer"/>
            </Link>
            
            <Text fontSize="11px" textAlign="center" fontWeight="800" m="0">{name}</Text>
            <Text fontSize="10px" textAlign="center" m="5px 0">{knownFor.join(",  ")}</Text>
        </Flex>
    )
}

export default PeopleTabContent;