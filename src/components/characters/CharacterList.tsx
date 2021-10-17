import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import styled from 'styled-components'
import { useQuery } from '@apollo/client';
import { getAllPeople } from '../queries/queries';
import { Character } from '../types/types';
import Pagination from '../shared/Pagination';
import Loader from '../shared/Loader'
import Error from '../shared/Error';
import { Button, FormControl } from 'react-bootstrap';
import { navigate } from "@reach/router"
const CharacterList = () => {

  const previous_page = sessionStorage.getItem('page')
  const [page, setPage] = useState(previous_page? parseInt(previous_page) : 1)
  const [character, setCharacter] = useState('')

  const CHARACTER_PER_PAGE = 10

  const handlePagination = (evt:any)=>{
    const index = evt.target.innerHTML
    sessionStorage.setItem("page", index)
    setPage(parseInt(index))
  }

  
  const {error, loading, data } = useQuery(getAllPeople, {
    variables: {
      page
    }
  })

  if(loading) {
    return <Loader />
  }
  if(error){
    return <Error source="home"/>
  }
  const {count, results} = data.people
  return (
    <>
    <header>
    <img src="/img/cover-img.svg" style={{minWidth: "100%"}}/>
    <div className="d-flex mb-5 justify-content-evenly container">
    <FormControl
    size="lg"
    className="py-3 w-75 pr-5"
      placeholder="Character name"
      aria-label="character name"
      aria-describedby="character name"
      value={character}
      onChange={(evt)=> setCharacter(evt.target.value)}
    />
    <Button variant="info" className="px-5" onClick={()=>navigate(`/character/${character}`)}>
      Search
    </Button>
    </div>
    </header>
    <main style={{padding: "0 10rem"}}>
      <Container >
          {
            results.map((character : Character, index: number) => <CharacterCard  key={character.name.toLowerCase()} {...character}/>)
          }
      </Container>
    </main>
    <footer className="d-flex justify-content-center mb-5">
        <Pagination active={page} total={Math.ceil(count/CHARACTER_PER_PAGE)} handlePagination={handlePagination}/>
    </footer>
    </>
  );
};

const Container = styled.div`
display: flex;
flex-flow: row wrap
`
export default CharacterList;
