import React from 'react'
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { screen , render ,act } from '@testing-library/react'
import CharacterCard from '../../characters/card/CharacterCard';
import { keyframes } from 'styled-components';

const mock = {
    name: "Luke Skywalker",
    mass: "77",
    height: "172",
    gender: "male",
    homeworld: "Tatooine"
}
  describe('renders without error', () => {
    test("The CharacterCard component renders correctly()", async()=>{
      const component = render(
        <CharacterCard  {...mock}/>
      );
      for(const [k,v] of Object.entries(mock)){
          expect(screen.getByTestId(`${mock.name}-${k}`)).toHaveTextContent(v)
      }
    })
    test("Get a snapshot of the CharacterCard component", ()=>{
      const tree = TestRenderer.create(<CharacterCard  {...mock}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
  });