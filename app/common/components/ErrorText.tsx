import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../styles';

interface OwnProps {
  message?: string;
}

const ErrorText = ({ message = '' }: OwnProps) => {
  return (
    <Text style={styles.errorText}>
      {message}
    </Text>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 14,
    color: colors.text.red,
    marginTop: 10
  }
});

export default ErrorText;