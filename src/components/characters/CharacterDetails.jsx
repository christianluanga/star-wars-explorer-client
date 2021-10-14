import React from 'react';
import { useParams } from '@reach/router';
import { useQuery } from '@apollo/client';
import { getPersonByName } from './queries';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Loader from '../shared/Loader'
import styled from 'styled-components';
import '../characters/style.css';
//@ts-ignore
import { Link } from '@reach/router';
import MyNavBar from '../shared/NavBar';
import Error from '../shared/Error';

const CharcterDetails = () => {
  const params = useParams();
  const { error, loading, data } = useQuery(getPersonByName, {
    variables: {
      name: params.name,
    },
  });
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <Error />
  }
  const page = sessionStorage.getItem('page') || '1';
  const {
    results: { name, height, mass, gender, homeworld },
    films,
    birth_year,
  } = data.person;
  return (
    <>
      <MyNavBar />
      <Container>
        <Wrapper>
          <Header >
            <span>Character <Span>{name}</Span></span>
            <Link to={'/'}>
              <Button size='lg' variant='outline-secondary'>
                Back to previous page{' '}
              </Button>
            </Link>
          </Header>
          <Basic >
            <p>
              Born on the{' '}
              <Span>{homeworld.toUpperCase()}</Span> planet in {' '}
              <Span>{birth_year}, </Span> <h5 className='d-inline'> {name} </h5>
               appears in a total of {films.length} episodes.
            </p>
          </Basic>
          <Row>
            {films.map(({ title, director, release_date, opening_crawl }) => (
              <Col lg={6} className='mb-4'>
                <Card className='film-card'>
                  <Card.Header>
                    Episode : <Span>{title.toUpperCase()}</Span>
                  </Card.Header>
                  <Card.Body className='p-4'>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
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
      </Container>
    </>
  );
};
const Span = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const Basic = styled.div`
font-size: 24px;
padding-left: 10rem
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
`;
const Wrapper = styled.div`
  padding: 3rem;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
padding-left: 10rem;
padding-bottom: 3rem;
`
export default CharcterDetails;
