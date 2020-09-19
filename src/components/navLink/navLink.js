import React, {useState} from 'react';

import { Box, Link, Flex } from "@chakra-ui/core";

const NavLink = ({topic}) => {

    const [isHovered, setHovered] = useState(false);

    const hoverHandler = () => {
        setHovered(!isHovered);
    }

    console.log(isHovered)
    return (
        <Box onMouseEnter={() => hoverHandler()}
        onMouseLeave={hoverHandler}>
							<Link 
								color="white" href="#"  
								_hover={{color: "#B2F5EA"}} 
								mx={"20px"}
								fontSize="18px"
								fontFamily="Open Sans, sans-serif"
								padding="10px"
								fontWeight="300"
								>
									{topic}
								</Link>
								<Flex
									display={isHovered ? "flex" : "none"}
									direction="column"
									justify="space-between"
									align="center"
									background="white"
									position="absolute"
									w="120px"
									h="100px"
									ml="17px"
									mt="7px"
									padding="10px"
									borderRadius="7%"
								>
									<Link _hover={{color:"#4FD1C5"}}>Popular</Link>
									<Link _hover={{color:"#4FD1C5"}}>Upcoming</Link>
									<Link _hover={{color:"#4FD1C5"}}>Top Rated</Link>
								</Flex>
						</Box>
    )
}

export default NavLink;