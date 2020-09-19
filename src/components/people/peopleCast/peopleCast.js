import React from 'react';

import API from "../../../API";

import styled from "styled-components";
import { Flex, Collapse } from "@chakra-ui/core"

const peopleCast = ({cast}) => {

    
    
    function renderCast(cast) {

    const sortedCast = cast.sort( (a, b) => {
            return new Date(b.release_date) - new Date(a.release_date);
        } )

        return (
    <>
        <Flex w="100%">
            <ProfessionName> Acting </ProfessionName>
        </Flex>
        <Collapse isOpen={true} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
            {sortedCast.map( movie => (
                <Profession>
                    {movie.original_title + " " + `(${movie.slice(0,4)})`}
                </Profession>
            ))}
        </Collapse>
    </>
        )
    }

    return (
        
    )
}
