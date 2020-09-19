import React from 'react';
import { Box } from '@chakra-ui/core';


const searchModal = ({children, isSearching}) => {

    return (
        <Box 
            w="95%" 
            display={isSearching.length === 0 ? "none" : "flex"} 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="flex-start"
            background="white"
            >
            {children}
        </Box>
    )
} 

export default searchModal;