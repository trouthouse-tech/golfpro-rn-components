import React from 'react';
import { LargeButton } from "../../src/Buttons";

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
      <LargeButton text="Clickable" onPress={mockClickFunction} />
    );

    const button = getByText("Clickable");
    fireEvent.press(button); //press the button
    expect(mockClickFunction).toHaveBeenCalledTimes(1);
  });

  it("styles LargeButton correctly", () => {
    const { getByTestId } = render(
      <LargeButton text="Clickable" onPress={mockClickFunction}
        buttonColor="red" borderColor="red" />
    );

    const baseButton = getByTestId("basebutton");
    expect(baseButton).toHaveStyle({
      backgroundColor: 'red',
      borderColor: 'red'
    });
  });

});

