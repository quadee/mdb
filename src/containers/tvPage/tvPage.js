import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import {} from "@chakra-ui/core";
import { usePalette } from "react-palette";

import MovieDescr from "../../components/movie/movieDescr/movieDescr";
import MovieDetails from "../../components/movie/movieDetails/movieDetails";
import API from "../../API";

const CastContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const CastMemberContainer = styled.div`
  margin: 0 40px 30px 0;
`;
const MemberName = styled.a`
  font-weight: 600;
  color: white;
  font-size: 12px;
`;
const MemberJob = styled.p`
  color: white;
  margin: 5px 0 0 0;
  font-weight: 300;
  font-size: 12px;
`;

const TVPage = (props) => {
  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState("");
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [posters, setPosters] = useState([]);
  const [backdrops, setBackdrops] = useState([]);

  const id = props.match.params.id;
  const imgPath = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/w500/${details.poster_path}`;

  function hexToRGB(hex) {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return (
      "linear-gradient(to right, rgba(" +
      r +
      ", " +
      g +
      ", " +
      b +
      ", .80) 150px, rgba(0, 0, 0, 0.77) 100%)"
    );
  }

  function outputGenres(data) {
    const genres = [];
    data.forEach((el) => {
      genres.push(el.name);
    });

    return genres.length === 1 ? genres[0] : genres.join(", ");
  }

  function runtimeInHours(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;

    return hours + "h" + " " + minutes + "m";
  }

  useEffect(() => {
    API.get(`tv/${id}`).then((response) => {
      setDetails(response.data);
      setGenres(response.data.genres);
      setYear(response.data.first_air_date);
    });

    API.get(`tv/${id}/credits`).then((response) => {
      setCrew(response.data.crew);
      setCast(response.data.cast);
    });

    API.get(`tv/${id}/keywords`).then((response) => {
      setKeywords(response.data.results);
    });

    API.get(`tv/${id}/images`).then((response) => {
      setPosters(response.data.posters);
      setBackdrops(response.data.backdrops);
    });
  }, []);

  const { data, loading, error } = usePalette(imgPath);
  console.log(data.vibrant);

  let vibrant, episodeRuntime, createdBy, networkImg;

  if (
    data.vibrant &&
    details.episode_run_time &&
    details.created_by &&
    details.networks
  ) {
    vibrant = hexToRGB(data.vibrant);
    episodeRuntime = details.episode_run_time[0] + " min";
    createdBy = details.created_by.map((member) => (
      <CastMemberContainer>
        <MemberName>{member.name}</MemberName>
        <MemberJob>Creator</MemberJob>
      </CastMemberContainer>
    ));
    networkImg = `https://image.tmdb.org/t/p/w500/${
      details.networks[details.networks.length - 1].logo_path
    }`;
  }
  console.log(networkImg);

  return (
    <>
      <MovieDescr
        background={imgPath}
        bgGradient={vibrant}
        poster={posterPath}
        title={details.name + " " + `(${year.slice(0, 4)})`}
        release={details.first_air_date}
        tagline={details.tagline}
        plot={details.overview}
        genres={outputGenres(genres)}
        runtime={episodeRuntime}
        rating={details.vote_average * 10}
      >
        <CastContainer>{createdBy}</CastContainer>
      </MovieDescr>
      <MovieDetails
        cast={cast}
        ogTitle={details.name}
        ogLanguage={details.original_language}
        status={details.status}
        type={details.type}
        network={networkImg}
        keywords={keywords}
        posters={posters}
        backdrops={backdrops}
        isMovie={false}
      />
    </>
  );
};

export default TVPage;
