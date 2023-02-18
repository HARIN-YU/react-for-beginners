import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 969.5px;
    background-color: #ce93d8;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #ce93d8;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center
`

const Loading = styled.h1`
    font-family: 'Gaegu', cursive;
    color: white;
    font-size: 70px;
`

function Home() {
const [loading, setLoading] = useState(true);
const [movies, setMovies] = useState([]);
const getMoives = async () => {
const json = await (
    await fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
    ).json();
    console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
    };
    useEffect(() => {
    getMoives()
    }, []);
    console.log(movies);
    return (
    <div>
        {loading ? 
                (<Wrapper><Loading>Loading...</Loading></Wrapper>) :
        (
        <Container>
            {movies.map(movie => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            ))}
        </Container>
            ) }
    </div>
    );
}

export default Home;