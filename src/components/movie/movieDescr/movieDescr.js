import React from "react";

import styled from "styled-components";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Link,
} from "@chakra-ui/core";
import {
  BsBookmarks,
  BsBookmarksFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: ${(props) => props.bgGradient},
    url(${(props) => props.background});
  background-size: cover;
  padding: 20px 0 45px 0;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  padding: 20px;
`;

const PosterContainer = styled.div`
  overflow: hidden;
  display: inline-block;
  width: 300px;
  height: 465px;
  border-radius: 2%;
`;

const Poster = styled.img`
  width: 300px;
  height: 465px;
  transition: transform 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.025);
  }
`;
const Overview = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;
  height: 465px;
  width: 70%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
const Title = styled.a`
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  color: white;
`;

const Actions = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  padding: 0;
`;
const Tagline = styled.p`
  font-style: italic;
  color: #ccc;
  margin: 3px 0 0 0;
  font-size: 14px;
`;
const Plot = styled.p`
  font-size: 14px;
  color: white;
`;
const CrewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Genres = styled.a`
  color: white;
  font-size: 14px;
  margin: 0 10px;
  font-weight: 300;
`;
const Span = styled.span`
  color: white;
  font-weight: 300;
`;
const H3 = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin: 14px 0 0 0;
`;
const UserScore = styled.span`
  color: white;
  font-weight: 400;
  width: 40px;
  margin-left: 12px;
`;

const movieDescr = ({
  title,
  rating,
  plot,
  children,
  background,
  poster,
  release,
  tagline,
  genres,
  runtime,
  bgGradient,
}) => {
  return (
    <Container background={background} bgGradient={bgGradient}>
      <ContentContainer>
        <PosterContainer>
          <Poster src={poster} />
        </PosterContainer>
        <Overview>
          <TitleContainer>
            <Title> {title} </Title>
            <Span> {release} </Span>
            <Genres> {genres} </Genres>
            <Span> {runtime} </Span>
          </TitleContainer>

          <Actions>
            <CircularProgress
              value={rating}
              color="green"
              size="60px"
              capIsRound="true"
            >
              <CircularProgressLabel
                fontSize="15px"
                fontWeight="600"
                color="white"
              >
                {rating}%
              </CircularProgressLabel>
            </CircularProgress>
            <UserScore> User Score </UserScore>
            <Link
              as={BsBookmarks}
              size="30px"
              color="#B2F5EA"
              ml="40px"
              cursor="pointer"
              transition="all .15s"
              _hover={{ color: "#FBD38D", pb: "4px" }}
            />
            <Link
              as={BsHeart}
              size="30px"
              color="#FBB6CE"
              ml="20px"
              cursor="pointer"
              transition="all .15s"
              _hover={{ color: "#F56565", pb: "4px" }}
            />
          </Actions>
          <Tagline> {tagline} </Tagline>
          <H3>Overview</H3>
          <Plot> {plot} </Plot>
          <CrewContainer> {children} </CrewContainer>
        </Overview>
      </ContentContainer>
    </Container>
  );
};

export default movieDescr;
