import React from 'react';

import {Box, Text} from "@chakra-ui/core";

import {FaTelegramPlane} from "react-icons/fa";

import styled from "styled-components";

const Test = styled.h1`
    font-size: 100px;
    color: yellow;
`

const Link = styled.a`
    cursor: pointer;
    color: white;
    transition: color .4s;
    &:hover {
        color: yellow;
    }
    font-size: 36px;
    width: 36px;
    height: 36px;
`

const footer = () => (
    <Box
        bottom="0"
        p="40px" 
        backgroundColor="#000000"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mt="50px"
        >
            <Text textAlign="center" m="10px auto" color="#F6E05E" fontSize="17px" >
                The website i built to practice with React
            </Text>
        <Link href="https://t.me/ggjjggjjgg" target="_blank">
            <FaTelegramPlane /> 
        </Link>
    </Box>
)

export default footer;
