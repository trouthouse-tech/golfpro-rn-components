import React from 'react';

import { StyleSheet, TextInput } from 'react-native';
import { Fonts, Utils } from '../../styles';
import { InputProps } from './types';

export function StandardTextInput(props: InputProps) {
    const {
        placeholder,
        onChangeText,
        value,
        autoFocus,
        secureTextEntry,
        onBlur,
        keyboardType,
        editable,
        blurOnSubmit = false,
    } = props;

    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="rgba(0,0,0,.5)"
            autoCapitalize="none"
            autoFocus={autoFocus || false}
            secureTextEntry={secureTextEntry || false}
            style={styles.textInput}
            onChangeText={(username) => onChangeText(username)}
            value={value}
            onBlur={() => !onBlur || onBlur()}
            keyboardType={keyboardType || 'default'}
            editable={editable || true}
            blurOnSubmit={blurOnSubmit}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: Fonts.normal,
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 10,
        borderRadius: 10,
        width: Utils.DEVICE_WIDTH / 1.3,
        height: 40,
        padding: 10,
        color: 'black',
    },
});
