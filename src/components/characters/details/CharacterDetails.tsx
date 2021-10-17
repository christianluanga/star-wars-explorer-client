import React from 'react';
import { useParams, Link, RouterProps } from '@reach/router';
import { useQuery } from '@apollo/client';
import { getPersonByName } from '../../queries/queries';
import { Button, Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import '../../characters/style.css';
import './characterDetails.css';
import MyNavBar from '../../shared/NavBar';
import CenteredContainer from '../../shared/CenteredContainer';
import Loader from '../../shared/Loader'
import Error from '../../shared/Error';
import { Film } from '../../types/types';

const CharcterDetails = (props: RouterProps) => {
  const params = useParams();
  const { error, loading, data } = useQuery(getPersonByName, {
    variables: {
      name: params.name || "Luke Skywalker",
    },
  });
  if (loading) {
    return <Loader />
  }
  if (error) {
    console.log(error)
    return <Error />
  }
  if(!data.person) {
    return (
    <CenteredContainer styles={{fontSize: '24px', flexDirection: 'column'}}>
      <p style={{marginRight: '10px'}}> Ooops {' '}<Span>"{ params.name.toUpperCase() }"</Span> is not a valid character name </p>
      <Link style={{textDecoration: 'none'}} to="/">{'<='} Back to previous page</Link>
      </CenteredContainer>
    )
  }
  const {
    results: { name, homeworld },
    films,
    birth_year,
  } = data.person;
  return (
    <>
      <MyNavBar />
      <Container>
        <Wrapper>
          <Header className="pt-2">
            <h5 data-testid="character-name" className='d-inline'>Character {name.toUpperCase()}</h5>
            <Link to={'/'} className="back-btn-large-screen">
              <Button size='lg' variant='outline-secondary'>
                Back to previous page{' '}
              </Button>
            </Link>
          </Header>
          <Basic >
            <p>
              Born on the{' '}
              <Span>{homeworld}</Span> planet in {' '}
              <Span>{birth_year}, </Span> <h5 className='d-inline'> {name.toUpperCase()} </h5>
               appears in a total of {films.length} episode(s).
            </p>
          </Basic>
          <Row>
            {films.map(({ title, director, release_date, opening_crawl }: Film) => (
              <Col sm={12} lg={6} className='mb-4'>
                <Card className='film-card'>
                  <Card.Header>
                    Episode : <Span>{title.toUpperCase()}</Span>
                  </Card.Header>
                  <Card.Body className='p-4'>
                    <Card.Text>
                      <div className="d-flex justify-content-between flex-wrap">
                        <p>Directed by <Span>{director}</Span></p> 
                        <p>Realease Date <Span>{release_date}</Span></p>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <p>
                        <Span>Synopsis</Span>
                      </p>
                      <div className='synopsis'>{opening_crawl}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Wrapper>
        <div className="pb-3 back-btn-small-screen">
        <Link to={'/'} >
              <Button size='lg' variant='outline-secondary'>
                Back to previous page{' '}
              </Button>
        </Link>
          
        </div>
      </Container>
    </>
  );
};
const Span = styled.span`
  font-size: inherit;
  font-weight: bold;
  padding: 0 5px;
`;
const Basic = styled.div`
font-size: 16px;
@media all and (min-width: 800px){
font-size: 24px;
padding-left: 10rem
}
`
const Container = styled.div`
padding: 0 1rem;
@media all and (min-width: 800px){
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
}
`;
const Wrapper = styled.div`
@media all and (min-width: 800px){
  padding: 3rem;
}
`;

const Header = styled.div`
display: flex;
flex-flow: row wrap;
flex-direction: column-reverse;
justify-content: space-between;

@media all and (min-width: 800px){
padding-left: 10rem;
padding-bottom: 3rem;
flex-flow: nowrap;
}
`
export default CharcterDetails;
