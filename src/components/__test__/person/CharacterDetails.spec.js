import React from 'react'
import { Router } from "@reach/router"
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { screen , render, act } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import { getPersonByName} from '../../queries/queries'
import results from './mockResults'
import CharcterDetails from '../../characters/CharacterDetails';
const mocks = [
    {
      request: {
        query: getPersonByName,
        variables: { name: 'Luke skywalker' }
      },
      result : {
        ...results
      }
    },
  ]
  describe('renders without error', () => {
    
    test("The CharacterDetails component renders correctly()", async()=>{
      jest.mock('@reach/router', () => ({
        ...jest.requireActual('@reach/router'),
        useParams: ()=>jest.fn().mockReturnValue({ name: 'Luke skywalker' }),
      }));
      
      const promise = new Promise(resolve => setTimeout(resolve, 10));
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router>
            <CharcterDetails  path='/' name="Luke Skywalker"/>
          </Router>
        </MockedProvider>,
      );
      await act(()=> promise)
      console.log(screen.getByTestId('character-name'))
      //console.log(JSON.stringify(results))
    })
    test("The loader component renders correctly()", ()=>{
      jest.mock('@reach/router', () => ({
        useParams: jest.fn().mockReturnValue({ name: 'Luke skywalker' }),
      }));
  
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router>
            <CharcterDetails  path="/"/>
          </Router>
        </MockedProvider>,
      );
      expect(screen.getByRole('status')).toHaveClass('spinner-grow');
    })
  });
  