import React from 'react';
import { SmallHallowRoundedButton } from "../../src/Buttons";
import { Colors } from '../../src/styles';

import { render, cleanup, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

describe('SmallHallowRoundedButton', () => {

  const mockClickFunction = jest.fn();

  const defaultProps = {
    text: "Test",
    onPress: mockClickFunction
  };

  afterEach(cleanup);

  it('renders and matches snapshot', () => {
    const tree = renderer.create(<SmallHallowRoundedButton {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a clickable SmallHallowRoundedButton", () => {
    const { getByText } = render(
      <SmallHallowRoundedButton {...defaultProps} />
    );

    const button = getByText("Test");
    fireEvent.press(button); //press the button
    expect(mockClickFunction).toHaveBeenCalledTimes(1);
  });

  it("styles SmallHallowRoundedButton correctly", () => {
    const { getByTestId } = render(
      <SmallHallowRoundedButton {...defaultProps}
      />
    );
    const baseButton = getByTestId("basebutton");
    expect(baseButton).toHaveStyle({
      backgroundColor: Colors.white,
      borderColor: Colors.main_green,
      borderRadius: 15,
    });
  });

});

