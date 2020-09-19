import React, { useState, useEffect } from "react";

import { Flex, Collapse } from "@chakra-ui/core";
import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const ProfessionName = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  font-weight: 600;
`;

const Profession = styled.li`
  text-align: left;
  list-style-type: none;
  margin: 10px;
`;

const peopleCredits = ({ crew }) => {
  function findProfessions(credits) {
    const jobs = [];

    credits.map((credit) => {
      jobs.push(credit.job);
    });

    return jobs;
  }

  function structureKeys(structured) {
    const filteredJobs = [...new Set(structured)];

    const jobs = {};

    filteredJobs.forEach((job) => {
      if (job !== "Thanks") {
        jobs[job] = [];
      }
    });

    return jobs;
  }

  function structureValues(structuredWithKeys, credits) {
    const fullyStructured = { ...structuredWithKeys };
    credits.map((c) => {
      Object.keys(fullyStructured).forEach((key) => {
        if (c.release_date && key === c.job && c.job) {
          fullyStructured[`${key}`].push(
            c.release_date.slice(0, 4) + ", " + c.title
          );
        }
      });
    });
    for (let property in fullyStructured) {
      fullyStructured[property].sort((a, b) => {
        return b.slice(0, 4) - a.slice(0, 4);
      });
    }

    return fullyStructured;
  }

  const findedProfessions = findProfessions(crew);
  const structuredKeys = structureKeys(findedProfessions);
  const fullyStructured = structureValues(structuredKeys, crew);

  const renderedCredits = Object.entries(fullyStructured).map((profession) => {
    return (
      <>
        <Flex w="100%">
          <ProfessionName>{profession[0]}</ProfessionName>
        </Flex>
        <Collapse
          isOpen={true}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          {profession[1].map((movie) => (
            <Profession>
              {movie.slice(6, movie.length) + " " + `(${movie.slice(0, 4)})`}
            </Profession>
          ))}
        </Collapse>
      </>
    );
  });

  return (
    <Flex
      direction="column"
      justifyContent="center"
      align-items="center"
      width="100%"
    >
      {renderedCredits}
    </Flex>
  );
};

export default peopleCredits;
