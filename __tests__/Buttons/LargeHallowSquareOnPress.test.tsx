import React from 'react';
import { LargeHallowSquareOnPress } from "../../src/Buttons";
import { Colors } from '../../src/styles/';

import { render, cleanup, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

describe('LargeHallowSquareOnPress', () => {

  const mockClickFunction = jest.fn();

  afterEach(cleanup);
  test('renders and matches snapshot', () => {
    const tree = renderer.create(<LargeHallowSquareOnPress text="Test" onPress={mockClickFunction} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a clickable LargeHallowSquareOnPress", () => {
    const { getByText } = render(
      <LargeHallowSquareOnPress text="Clickable" onPress={mockClickFunction} />
    );

    const button = getByText("Clickable");
    fireEvent.press(button); //press the button
    expect(mockClickFunction).toHaveBeenCalledTimes(1);
  });

  it("styles LargeHallowSquareOnPress correctly", () => {
    const { getByTestId } = render(
      <LargeHallowSquareOnPress text="Clickable" onPress={mockClickFunction}
      />
    );
    const baseButton = getByTestId("basebutton");
    expect(baseButton).toHaveStyle({
      backgroundColor: Colors.white,
      borderColor: Colors.main_green
    });
  });

});

