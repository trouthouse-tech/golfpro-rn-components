import React from 'react';
import { MediumButton } from "../../src/Buttons";

import { render, cleanup, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

describe('MediumButton', () => {

  const mockClickFunction = jest.fn();

  afterEach(cleanup);
  it('renders and matches snapshot', () => {
    const tree = renderer.create(<MediumButton text="Request Lesson" onPress={mockClickFunction} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a clickable MediumButton", () => {
    const { getByText } = render(
      <MediumButton text="Request Lesson" onPress={mockClickFunction} />
    );

    const button = getByText("Request Lesson");
    fireEvent.press(button); //press the button
    expect(mockClickFunction).toHaveBeenCalledTimes(1);
  });

  it("styles MediumButton correctly", () => {
    const { getByTestId } = render(
      <MediumButton text="Request Lesson" onPress={mockClickFunction}
        buttonColor="red" borderColor="red" />
    );

    const baseButton = getByTestId("basebutton");
    expect(baseButton).toHaveStyle({
      backgroundColor: 'red',
      borderColor: 'red'
    });
  });

});

