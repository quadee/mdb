import React from 'react';

import {Link} from "@chakra-ui/core";

const tabBarNav = ({onChangeActiveTab, navLabel, activeTab}) => {
   
    return (
    <Link 
        direction="row" 
        justify="center" 
        alignItems="space-between" 
        onClick={() => onChangeActiveTab(navLabel)}
        textDecor={ activeTab ? "underline" : "none"}
        m="15px"
        fontFamily="Open Sans"
        fontWeight="400"
        fontSize="14px"
    >
        {navLabel}
    </Link>
    )
};

export default tabBarNav;
