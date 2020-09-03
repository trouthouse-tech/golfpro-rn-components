import React from 'react';
import {LargeButton} from "../src/Buttons/";

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<LargeButton text="Test" onPress={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});