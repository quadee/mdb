import React from 'react';

import {Flex} from "@chakra-ui/core";

const tabBarItem = ({children, label, activeTab}) => (
    <Flex 
        direction="row" 
        alignItems="flex-start" 
        justify="space-between" 
        p="20px" 
        display={activeTab === label ? "flex" : "none"} 
        overflowX='scroll' 
        overflowY="hidden"
        >
            {children}
    </Flex>
)

export default tabBarItem;