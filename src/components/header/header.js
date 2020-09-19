import React, {useState} from 'react';

import { Box, Flex, Link , Image } from "@chakra-ui/core";

import {Link as RouterLink} from "react-router-dom"

import NavLink from "../navLink/navLink";

const Header = () => {
	const [isHovered, setHovered] = useState(false);

	const hoverHandler = () => {
		setHovered(!isHovered);
	}
	
	console.log(isHovered);

    return (
        <Flex justify="flex-start" align="center" w="100%" h="100px" background="black">
					<Flex justify="center" align="center" ml="80px">
						<RouterLink to="/">
						<Image src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-flat-film-image_1127471.jpg" 
							alt="Site logo" 
							size="50px" 
							mr="20px"
							/>
						</RouterLink>
						<NavLink topic="Movies" />
						<NavLink topic="TV" />
						<Link
							color="white" href="#"  
							_hover={{color: "#B2F5EA"}} 
							mx={"20px"}
							fontSize="18px"
							fontFamily="Open Sans, sans-serif"
							padding="13px"
							fontWeight="300"
						>
							People
						</Link>
					</Flex>

        </Flex>
    )
}

export default Header;
