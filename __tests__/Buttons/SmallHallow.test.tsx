import React from 'react';
import { SmallHallowButton } from "../../src/Buttons";
import { Colors } from '../../src/styles';

import { render, cleanup, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

describe('SmallHallowButton', () => {

  const mockClickFunction = jest.fn();

  afterEach(cleanup);
  it('renders and matches snapshot', () => {
    const tree = renderer.create(<SmallHallowButton text="Test" onPress={mockClickFunction} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a clickable SmallHallowButton", () => {
    const { getByText } = render(
      <SmallHallowButton text="Clickable" onPress={mockClickFunction} />
    );

    const button = getByText("Clickable");
    fireEvent.press(button); //press the button
    expect(mockClickFunction).toHaveBeenCalledTimes(1);
  });

  it("styles SmallHallowButton correctly", () => {
    const { getByTestId } = render(
      <SmallHallowButton text="Clickable" onPress={mockClickFunction}
      />
    );
    const baseButton = getByTestId("basebutton");
    expect(baseButton).toHaveStyle({
      backgroundColor: Colors.white,
      borderColor: Colors.main_green
    });
  });

});

