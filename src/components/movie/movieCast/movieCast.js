import React from 'react';

import { Flex, Image, Text } from "@chakra-ui/core";

const MovieCast = ({cast}) => {
   
    function renderTopBilledCast(castMembers) {
        const sortedCast = castMembers.sort( (a,b) => {
            return a.castMembers_id - b.castMembers_id;
        } )
        return sortedCast.map( castMember => (
            <Flex direction="column" justify="flex-start" align="center" m="5px" w="200px" h="270px">
                <Image src={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}` || "https://team8.vc/wp-content/uploads/2017/07/img_avatar.jpg"} 
                    w="130px" 
                    h="195px" 
                    borderRadius="10px" 
                    mb="12px"/>
                <Text fontSize="11px" textAlign="center" fontWeight="800" m="0"> {castMember.name} </Text>
                <Text fontSize="10px" textAlign="center" m="0"> {castMember.character} </Text>
            </Flex>
        ) ).slice(0, 11);
    }

    return (
        <Flex 
            direction="row" 
            alignItems="center" 
            justify="flex-start" 
            display="flex"
            overflowX='scroll' 
            overflowY="hidden"
            width="90%"
        >
            {renderTopBilledCast(cast)}
        </Flex>  
    )
}

export default MovieCast;
