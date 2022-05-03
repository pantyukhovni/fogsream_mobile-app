import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { UsesTech } from '../types';

type OwnProps = Omit<UsesTech, 'id'>;

const TechnicalSkills = ({
  icon: IconComponent,
  text,
}: OwnProps) => {
  return (
    <View style={styles.container}>
      <IconComponent />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24
  },
  text: {
    marginLeft: 12
  }
});

export default TechnicalSkills;