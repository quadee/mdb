import React, { Component } from "react";

import { Box, Flex, Image, Text, Scale } from "@chakra-ui/core";
import { Link } from "react-router-dom";

import SearchBox from "../../components/searchBox/searchBox";
import TabBar from "../../components/tabs/tabBar";
import TabBarItem from "../../components/tabs/tabBarItem";
import PeopleTabContent from "../../components/people/peopleTabContent/peopleTabContent";

import API from "../../API";

class FrontPage extends Component {
  state = {
    movies: [],
    tv: [],
    people: [],
    trendingByDay: [],
    trendingByWeek: [],
  };

  componentDidMount() {
    API.get("/movie/popular").then((response) => {
      this.setState({ movies: response.data.results });
    });

    API.get("/tv/popular").then((response) => {
      this.setState({ tv: response.data.results });
    });

    API.get("/person/popular").then((response) => {
      this.setState({ people: response.data.results });
    });

    API.get("/trending/all/day").then((response) => {
      this.setState({ trendingByDay: response.data.results });
    });

    API.get("/trending/all/week").then((response) => {
      this.setState({ trendingByWeek: response.data.results });
    });
  }

  render() {
    const { movies, tv, people, trendingByDay, trendingByWeek } = this.state;
    console.log(people);

    const movieContent = movies
      .map((el) => {
        return (
          <Flex direction="column" justifyContent="center" alignItems="center]">
            <Link to={`/movie/${el.id}/${el.original_title}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                w="150px"
                h="225px"
                m="20px"
                borderRadius="10px"
                mb="5px"
              />
            </Link>
            <Link to={`/movie/${el.id}/${el.original_title}`}>
              <Text fontSize="11px" textAlign="center" fontWeight="800" m="0">
                {el.original_title}
              </Text>
            </Link>
            <Text fontSize="10px" color="black" m="0" textAlign="center">
              {el.release_date}
            </Text>
          </Flex>
        );
      })
      .slice(1, 11);
    const tvContent = tv.map((el) => {
      return (
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          m="20px"
        >
          <Link to={`/tv/${el.id}/${el.original_name}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              w="150px"
              h="225px"
              borderRadius="10px"
              mb="5px"
              cursor="pointer"
            />
          </Link>
          <Link to={`/tv/${el.id}/${el.original_name}`}>
            <Text fontSize="11px" textAlign="center" fontWeight="800" m="0">
              {el.original_name}
            </Text>
          </Link>
          <Text fontSize="10px" m="0" color="black">
            {el.first_air_date}
          </Text>
        </Flex>
      );
    });
    const peopleContent = this.state.people.map((el) => {
      return (
        <PeopleTabContent
          id={el.id}
          imgSrc={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
          knownFor={el.id}
        />
      );
    });
    const trendingByDayContent = trendingByDay.map((el) => {
      return (
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          m="20px"
        >
          <Link
            to={
              typeof el.first_air_date === "string"
                ? `/tv/${el.id}/${el.original_name}`
                : `/movie/${el.id}/${el.original_title}`
            }
            textDecor="none"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path} `}
              w="150px"
              h="225px"
              borderRadius="10px"
              mb="5px"
              cursor="pointer"
            />
          </Link>
          <Link
            to={
              typeof el.first_air_date === "string"
                ? `/tv/${el.id}/${el.original_name}`
                : `/movie/${el.id}/${el.original_title}`
            }
            textDecor="none"
          >
            <Text fontSize="11px" textAlign="center" fontWeight="800" m="0">
              {el.original_name || el.original_title}
            </Text>
          </Link>
          <Text fontSize="10px" textAlign="center" m="0">
            {el.first_air_date || el.release_date}
          </Text>
        </Flex>
      );
    });
    const trendingByWeekContent = trendingByWeek.map((el) => {
      return (
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          m="20px"
        >
          <Link
            to={
              typeof el.first_air_date === "string"
                ? `/tv/${el.id}/${el.original_name}`
                : `/movie/${el.id}/${el.original_title}`
            }
            textDecor="none"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path} `}
              w="150px"
              h="225px"
              borderRadius="10px"
              mb="5px"
              cursor="pointer"
            />
          </Link>
          <Link
            to={
              typeof el.first_air_date === "string"
                ? `/tv/${el.id}/${el.original_name}`
                : `/movie/${el.id}/${el.original_title}`
            }
            textDecor="none"
          >
            <Text fontSize="11px" textAlign="center" fontWeight="800" m="0">
              {" "}
              {el.original_name || el.original_title}{" "}
            </Text>
          </Link>
          <Text fontSize="10px" textAlign="center" m="0">
            {" "}
            {el.first_air_date || el.release_date}{" "}
          </Text>
        </Flex>
      );
    });

    console.log(movies);
    return (
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        minHeight="100%"
        mb="100px"
      >
        <SearchBox />
        <TabBar tabHeading="Popular">
          <TabBarItem label="Movies">{movieContent}</TabBarItem>
          <TabBarItem label="TV">{tvContent}</TabBarItem>
          <TabBarItem label="People">{peopleContent}</TabBarItem>
        </TabBar>
        <TabBar tabHeading="Trending">
          <TabBarItem label="Today">{trendingByDayContent}</TabBarItem>
          <TabBarItem label="This Week">{trendingByWeekContent}</TabBarItem>
        </TabBar>
      </Flex>
    );
  }
}

export default FrontPage;
