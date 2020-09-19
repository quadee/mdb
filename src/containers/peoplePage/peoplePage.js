import React, { useState, useEffect } from "react";

import API from "../../API";
import PeopleCredits from "../../components/people/peopleCredits/peopleCredits";

import { Flex, Image, Text } from "@chakra-ui/core";
import styled from "styled-components";

const Content = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin: 30px auto;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
`;
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
`;

const ProfilePicContainer = styled.div`
  overflow: hidden;
  display: inline-block;
  border-radius: 2%;
  margin-bottom: 20px;
  width: 300px;
  height: 450px;
`;

const ProfilePic = styled.img`
  width: 300px;
  height: 450px;
  transition: transform 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.025);
  }
`;
const PersonalInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 25px 0;
  width: 100%;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

const PIName = styled.strong`
  font-size: 13.5px;
  font-weight: 600;
`;
const PIValue = styled.span`
  font-size: 13.5px;
`;
const H3 = styled.h3`
  font-size: 21px;
  text-align: left;
  margin: 8px 0 0 0;
`;
const Name = styled.a`
  text-decoration: none;
  font-weight: 800;
  font-size: 35px;
`;
const Bio = styled.section`
  margin-top: 30px;
  width: 100%;
`;
const KnownFor = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
`;
const PeoplePage = (props) => {
  const [details, setDetails] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);

  const id = props.match.params.id;

  function renderKnownFor(credits) {
    const sortedCredits = credits.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    return sortedCredits
      .map((castMember) => (
        <Flex
          direction="column"
          justify="flex-start"
          align="center"
          m="5px 5px 10px 5px"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${castMember.poster_path}`}
            w="130px"
            h="195px"
            borderRadius="10px"
            mb="12px"
          />
          <Text fontSize="10px" textAlign="center" m="0">
            {" "}
            {castMember.original_title}{" "}
          </Text>
        </Flex>
      ))
      .slice(0, 11);
  }

  useEffect(() => {
    API.get(`person/${id}`).then((response) => {
      setDetails(response.data);
    });
    API.get(`person/${id}/movie_credits`).then((response) => {
      setMovieCrew(response.data.crew);
      setMovieCast(response.data.cast);
    });

    // API.get(`person/${id}/combined_credits`).then( response => {
    //     setCombinedCredits(response.data.crew)
    // } )
  }, []);

  const profilePic = `https://image.tmdb.org/t/p/w500/${details.profile_path}`;

  return (
    <>
      <Content>
        <LeftColumn>
          <ProfilePicContainer>
            <ProfilePic src={profilePic} />
          </ProfilePicContainer>
          <H3>Personal Info</H3>
          <PersonalInfoContainer>
            <PersonalInfo>
              <PIName>Known For</PIName>
              <PIValue>{details.known_for_department}</PIValue>
            </PersonalInfo>
            <PersonalInfo>
              <PIName>Gender</PIName>
              <PIValue>{details.gender === 2 ? "Male" : "Female"}</PIValue>
            </PersonalInfo>
            <PersonalInfo>
              <PIName>Birthday</PIName>
              <PIValue>{details.birthday}</PIValue>
            </PersonalInfo>
            <PersonalInfo>
              <PIName>Place of Birth</PIName>
              <PIValue>{details.place_of_birth}</PIValue>
            </PersonalInfo>
          </PersonalInfoContainer>
        </LeftColumn>
        <RightColumn>
          <Name>{details.name}</Name>
          <Bio>
            <H3>Biography</H3>
            <p>{details.biography}</p>
          </Bio>
          <H3>Known For</H3>
          <KnownFor>{renderKnownFor(movieCast)}</KnownFor>
          <PeopleCredits crew={movieCrew} />
        </RightColumn>
      </Content>
    </>
  );
};

export default PeoplePage;
