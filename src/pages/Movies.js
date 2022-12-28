import React from 'react'
import Movie from '../components/Movie';
import { useGlobalContext } from '../Context'
import styled from 'styled-components';
import Search from '../components/Search';

const Movies = () => {
  const {filmData} = useGlobalContext();
  const movies = filmData.filter((film) => film.category == "Movie")
 

  console.log(movies)
  return (
  <MainContainer>
    <Search
      placeholder={"Search for movies"}
    />
    <Text>Movies</Text>
    <MoviesCont>
      {
        movies.map((movie,index) => {
          return <Movie key={index} {...movie}/>
        })
      }
    </MoviesCont>
  </MainContainer>
  )
}

export default Movies

const MoviesCont = styled.div`
width:100%;
display:grid;
grid-template-columns:auto auto auto auto;
justify-content:space-between;
gap:80px 60px;
`

const MainContainer = styled.div`
width:100%;
padding:25px;
overflow:hidden;
`

const Text = styled.h2`
font-family: 'Outfit';
font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 40px;
letter-spacing: -0.5px;
color: #FFFFFF;
margin-bottom:20px;
`