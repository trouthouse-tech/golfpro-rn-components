import React from 'react';
import { TextButton } from "../src/Buttons";
import { render, cleanup, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

describe('TextButton', () => {

  const mockClickFunction = jest.fn();

  afterEach(cleanup);
  test('renders and matches snapshot', () => {
    const tree = renderer.create(<TextButton text="Test" buttonStyle={{ padding: 10 }}
      textStyle={{ fontSize: 10 }} onPress={mockClickFunction} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a clickable TextButton", () => {
    const { getByText } = render(
      <TextButton text="Clickable" buttonStyle={{ padding: 10 }}
        textStyle={{ fontSize: 10 }} onPress={mockClickFunction} />
    );

    const button = getByText("Clickable");
    fireEvent.press(button); //press the button
    expect(mockClickFunction).toHaveBeenCalledTimes(1);
  });

  it("styles TextButton correctly", () => {
    const { getByTestId } = render(
      <TextButton text="Clickable" onPress={mockClickFunction} buttonStyle={{ padding: 10 }}
        textStyle={{ fontSize: 10 }} />
    );

    const baseButton = getByTestId("basebutton");
    expect(baseButton).toHaveStyle({
      padding: 10,
    });

    const textInButton = getByTestId("textInButton");
    expect(textInButton).toHaveStyle({
      fontSize: 10,
    });

  });

});

