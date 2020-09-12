import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { Fonts } from '../../styles/';

type RadioButtonProps = {
  isActive: boolean;
  text: string;
  onPress(): void;
};

export default function RadioButton({ isActive, text, onPress }: RadioButtonProps) {
  return (
    <TouchableHighlight onPress={() => onPress()}>
      <View style={styles.button}>
        <View style={styles.outside}>
          {isActive ? <View style={styles.inside} /> : null}
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },

  outside: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  inside: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },

  text: {
    marginLeft: 5,
    fontSize: Fonts.normal,
  },
});
