import React, { useMemo } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image
} from 'react-native';
import type { ListRenderItemInfo } from 'react-native';
import { colors } from '../../../common/styles';
import type { TSkillsCard, UsesTech } from '../types';
import TechnicalSkills from './TechnicalSkills';

type OwnProps = TSkillsCard;

const keyExtractor = (item: UsesTech) => item.id;

const SkillsCard = ({
  title,
  dec,
  usesTech
}: OwnProps) => {

  const renderItem = ({
    item
  }: ListRenderItemInfo<UsesTech>) => {
    const { icon, text } = item;

    return (
      <TechnicalSkills
        icon={icon}
        text={text}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.cardTitle]}>{title}</Text>
        <Text style={styles.cardDec}>{dec}</Text>
      </View>
      <FlatList
        data={usesTech}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        numColumns={2}
        contentContainerStyle={styles.usesTech}
        columnWrapperStyle={{
          justifyContent: 'space-around'
        }}
        ListHeaderComponent={() => (
          <View style={styles.usesTechHeder}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 452,
    backgroundColor: colors.basic.white,
    borderRadius: 24,
  },
  textContainer: {
    padding: 24
  },
  text: {
    fontSize: 18,
    color: colors.text.black,
  },
  cardTitle: {
    fontWeight: '800',
    marginBottom: 20
  },
  cardDec: {
    lineHeight: 34,
  },
  usesTechHeder: {
    backgroundColor: colors.background.paleGrey,
    height: 2,
    marginBottom: 24
  },
  usesTech: {
    position: "absolute",
    width: '100%',
    bottom: 0
  }
});

export default SkillsCard;
