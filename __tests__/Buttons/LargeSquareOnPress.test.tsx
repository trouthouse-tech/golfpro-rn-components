import React from 'react';
import { LargeSquareOnPress } from "../../src/Buttons";
import { render, cleanup, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

describe('LargeSquareOnPress', () => {

  const mockClickFunction = jest.fn();

  afterEach(cleanup);
  it('renders and matches snapshot', () => {
    const tree = renderer.create(<LargeSquareOnPress text="Test" onPress={mockClickFunction} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a clickable LargeSquareOnPress", () => {
    const { getByText } = render(
      <LargeSquareOnPress text="Clickable" onPress={mockClickFunction} />
    );

    const button = getByText("Clickable");
    fireEvent.press(button); //press the button
    expect(mockClickFunction).toHaveBeenCalledTimes(1);
  });

  it("styles LargeSquareOnPress correctly", () => {
    const { getByTestId } = render(
      <LargeSquareOnPress text="Clickable" onPress={mockClickFunction} buttonColor="red"
      />
    );
    const baseButton = getByTestId("basebutton");
    expect(baseButton).toHaveStyle({
      backgroundColor: 'red',
      borderColor: 'red'
    });
  });

});

