import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import styled from 'styled-components'

const SummaryP = styled.p`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    font-family: 'Gaegu', cursive;
    word-break: break-all;
    width: 400px;
`
const MoiveImg = styled.img`
    width: 250px;
    height: 300px;
    border-radius: 20px;
`;

const StyledLink = styled(Link)`
	color: black;
    text-decoration: none;
    font-size: 30px;
`;

const RatingAndRuntime = styled.span`
    color: #616161;
`

const Title = styled.h1`
    font-size: 25px;
    font-family: 'Gaegu', cursive;
    height: 100px;
`;

const GenreList = styled.ul`
    font-family: 'Gaegu', cursive;
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`

const Genre = styled.li`
    margin-left: 8px;
    background-color: #ce93d8;
    padding: 5px;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    height: 20px;
    box-shadow: 1px 1px 3px #8a6391;
`

const Boxes = styled.div`
    margin: 20px;
`

const Box = styled.div`
    background-color: #fbdeff;
    width: 400px;
    height: 700px;
    margin-bottom: 40px;
    border-radius: 10px;
    padding: 10px;
    padding-top: 40px;
    box-shadow: 2px 2px 5px #8a6391;
`

const GridBox = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
`

function Moive({id, rating, runtime, coverImg, title, summary, genres}) {
    return (
        <Boxes>
            <Box>
                <div>
                <MoiveImg src={coverImg} alt={title} />
                <div>
                    <Title>
                        <StyledLink to={`/movie/${id}`}>{title}</StyledLink>
                        <br />
                        <RatingAndRuntime>&nbsp;★{rating}/10, {runtime}min</RatingAndRuntime>
                        </Title>
                </div>
                <GridBox>
                    <SummaryP fontSize='20px' color='grey'>{summary.length > 200 ? `${summary.slice(0,200)}...` : summary}</SummaryP>
                    <GenreList>
                        {genres.map((g) => (
                            <Genre key={g}>{g}</Genre>
                        ))}
                        </GenreList>
                </GridBox>
                </div>
            </Box>
        </Boxes>
    );
}

Moive.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Moive;