import React from 'react';
import { StandardTextInput } from "../../src/Inputs";
import { InputProps } from "../../src/Inputs/StandardTextInput/types";

import { render, cleanup, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

describe('StandardTextInput', () => {

    const mockFunction = jest.fn();

    const defaultInputProps: InputProps = {
        value: "Name",
        autoFocus: true,
        editable: true,
        placeholder: "Your Name?",
        secureTextEntry: true,
        onBlur: mockFunction,
        onChangeText: mockFunction,
    }

    afterEach(cleanup);

    test('renders and matches snapshot', () => {
        const tree = renderer.create(<StandardTextInput {...defaultInputProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});