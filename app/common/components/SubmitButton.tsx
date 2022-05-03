import React from 'react';
import type { ReactNode } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../styles';

interface OwnProps {
  isValid: boolean;
  onPress: () => void;
  validButtonText: string;
  notValidButtonText: string;
}

const SubmitButton = ({
  isValid,
  onPress,
  notValidButtonText = '',
  validButtonText,
}: OwnProps) => {
  const hasNotValidButtonText = Boolean(notValidButtonText);

  const buttonStyle = isValid ? styles.notDisabled : styles.disabled;

  const textRender = () => {
    if (hasNotValidButtonText) {
      return (
        <>
          {isValid ? (
            <Text style={styles.validText}>{validButtonText}</Text>
          ) : (
            <Text style={styles.validText}>{notValidButtonText}</Text>
          )}
        </>
      )
    }
    return (
      <Text style={styles.validText}>{validButtonText}</Text>
    )
  }

  return (
    <Pressable
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      {textRender()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  validText: {
    color: colors.text.white
  },
  notValidText: {
    color: colors.text.red
  },
  button: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  disabled: {
    backgroundColor: colors.button.disabled
  },
  notDisabled: {
    backgroundColor: colors.button.primary
  }
});

export default SubmitButton;
