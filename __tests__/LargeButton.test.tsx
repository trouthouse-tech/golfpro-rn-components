import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {LargeButton} from "../src/Buttons/";

import { render, cleanup, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

describe('LargeButton', () => {

  const mockClickFunction = jest.fn();

  afterEach(cleanup);
  test('renders and matches snapshot', () => {
    const tree = renderer.create(<LargeButton text="Test" onPress={mockClickFunction} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a clickable LargeButton", () => {
    const { getByText } = render(
      <LargeButton text="Clickable" onPress={mockClickFunction}/>
    );
  
    const button = getByText("Clickable");
    fireEvent.press(button); //press the button
    expect(mockClickFunction).toHaveBeenCalledTimes(1); 
  });

});

