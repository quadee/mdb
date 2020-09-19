import React, { Component, useState, useEffect } from 'react';

import { Flex, Text, IconButton, Input, List, ListItem} from "@chakra-ui/core";

import API from "../../../../mdb/src/API";
import SearchModal from "./searchModal/searchModal"


const SearchBox = ({props}) => {
        
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
  }

  useEffect(() => {
    API.get("/search/multi",{
        params: {
        query: searchTerm,

    }}).then( (response) => {
        debounce(setResults(response.data.results), 3000);
        console.log(response.data);
    })
  }, [searchTerm]);

  const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    console.log(results.results);

    const res = results.map( result => (
        <ListItem>
            {result.original_title}
        </ListItem>
    ))
    return (
        <Flex 
            w="80%" 
            m="10px auto" 
            background="linear-gradient(to left bottom, rgba(0, 0, 0, 1.00) 60%, rgba(246, 224, 94, 0.84))"
            direction="column"
            padding="90px"
            outline="0"
        >
            <Text color="white" fontSize="22px">Welcome.</Text>
            <Text color="white" fontSize="22px">Millions of movies, TV shows and people to discover. Explore now.</Text>
            <Flex justify="center" align="center" mt="20px" > 
                <Input 
                    h="42px"
                    w="95%" 
                    borderRight="0" 
                    borderRadius="3%"
                    value={searchTerm}
                    onChange={handleChange}
                    
                />
                <IconButton 
                    aria-label="Search database"
                    icon="search"
                    variantColor="#00000"
                    color="black"
                    border="0"
                    h="44px"
                    w="60px"
                    borderRadius="10%"
                    ml="3px"
                />
            </Flex>
            <SearchModal isSearching={searchTerm}>
                <List styleType="none">
                    {res.slice(1,11).map( listItem => (
                        <ListItem _hover={{color:"#319795", cursor: "pointer", transition:"color 1s"}}>
                            {listItem}
                        </ListItem>
                    ))}
                </List>
            </SearchModal>
        </Flex>
    )
}

export default SearchBox;