import React from 'react';

import styled from "styled-components";

import MovieCast from "../movieCast/movieCast";
import TabBar from "../../tabs/tabBar";
import TabBarItem from "../../tabs/tabBarItem"

const AdditionalInfo = styled.section`
    width: 90%;
    margin: 10px auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 79%;
`
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 21%;
    margin-left: 20px;
`
const Heading = styled.h3`
    font-size: 17px;
    font-weight: 600;
    width: 100%;
    margin-top: 15px;

`

const MovieStats = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 25px;

`
const Stat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
`
const StatName = styled.strong`
    font-size: 13.5px;
`
const StatValue = styled.span`
    font-size: 13.5px;
`
const Keywords = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`
const Keyword = styled.a`
    text-decoration: none;
    background: #ccc;
    border-radius: 6%;
    padding: 5px 10px;
    margin: 5px 5px 5px 0;
    color: black;
    font-size: 11px;
`

const Poster = styled.img`
    width: 200px;
    height: 300px;
`
const Backdrop = styled.img`
    width: 533px;
    height: 270px;
`
const NetworkLogo = styled.img`
    width: 73px;
    height: 30px;
    margin-top: 5px;
`


const movieDetails = ({ 
    cast, 
    ogTitle, 
    status, 
    ogLanguage,
    revenue,
    budget,
    keywords,
    posters,
    backdrops,
    isMovie,
    type,
    network
}) => {

    const renderedKeywords = keywords.map( kword => (
        <Keyword key={kword.id}>
            {kword.name}
        </Keyword>
    ) )

    const renderedPosters = posters.map( poster => (
        <Poster src={`https://image.tmdb.org/t/p/w500/${poster.file_path}`} />
    ) )
    const renderedBackdrops = backdrops.map( backdrop => (
        <Backdrop src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop.file_path}`} />
    ) )


    return (
        <AdditionalInfo>
            <LeftColumn>
                <Heading>Top Billed Cast</Heading>
                <MovieCast cast={cast}/>
                <TabBar tabHeading="Media">
                    <TabBarItem label="Posters">
                        {renderedPosters}
                    </TabBarItem>
                    <TabBarItem label="Backdrops">
                        {renderedBackdrops}
                    </TabBarItem>
                </TabBar>
            </LeftColumn>
            <RightColumn>
                <MovieStats>
                    { isMovie ? (
                        <>
                        <Stat>
                        <StatName>Original Title</StatName>
                        <StatValue> {ogTitle} </StatValue>
                    </Stat>
                    <Stat>
                        <StatName>Status</StatName>
                        <StatValue> {status} </StatValue>
                    </Stat>
                    <Stat>
                        <StatName>Original Language</StatName>
                        <StatValue> {ogLanguage} </StatValue>
                    </Stat>
                    <Stat>
                        <StatName>Budget</StatName>
                        <StatValue> {budget} </StatValue>
                    </Stat>
                    <Stat>
                        <StatName>Revenue</StatName>
                        <StatValue> {revenue} </StatValue>
                    </Stat>
                    </>
                    ) : (
                        <>
                        <Stat>
                        <StatName>Original Title</StatName>
                        <StatValue> {ogTitle} </StatValue>
                    </Stat>
                    <Stat>
                        <StatName>Status</StatName>
                        <StatValue> {status} </StatValue>
                    </Stat>
                    <Stat>
                    <Stat>
                        <StatName>Network</StatName>
                        <StatValue> 
                            <NetworkLogo src={network} /> 
                        </StatValue>
                    </Stat>
                        <StatName>Original Language</StatName>
                        <StatValue> {ogLanguage} </StatValue>
                    </Stat>
                    <Stat>
                        <StatName>Type</StatName>
                        <StatValue> {type} </StatValue>
                    </Stat>
                    </>
                    )}
                </MovieStats>
                <Keywords>
                    <Heading>Keywords</Heading>
                    {renderedKeywords.length > 0 ? renderedKeywords : "-"}
                </Keywords>
            </RightColumn>     
        </AdditionalInfo>
    )
}

export default movieDetails;

