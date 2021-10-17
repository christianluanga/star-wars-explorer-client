import React from 'react'
import { Router } from "@reach/router"
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { screen , render, act } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import { getAllPeople } from '../../queries/queries'
import results from './mock_results'
import CharacterList from '../../characters/CharacterList';
const mocks = [
    {
      request: {
        query: getAllPeople,
        variables: { page: 1 }
      },
      result : {
        ...results
      }
    },
    {
      request: {
        query: getAllPeople,
        variables: { page: 80 }
      },
      error: new Error("Something went wrong")
    }
  ]
  describe('renders without error', () => {
    
    test("The CharacterList component renders correctly()", async()=>{
      const component = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <CharacterList  />
        </MockedProvider>,
      );
      await act(()=> new Promise(resolve => setTimeout(resolve, 10)))
      //console.log(component.root.findByType('main'))
    })
  });
  