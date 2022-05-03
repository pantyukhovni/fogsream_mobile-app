import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import type { ListRenderItemInfo } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { carouselCardItem } from './constants';
import type { TSkillsCard } from './types';
import SkillsCard from './components/SkillsCard';

const { width } = Dimensions.get('window');

const OurSkills = () => {
  const renderItem = ({
    item
  }: ListRenderItemInfo<TSkillsCard>) => {
    const { dec, title, usesTech } = item;

    return (
      <SkillsCard
        dec={dec}
        title={title}
        usesTech={usesTech}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.pageTitle}>Чем занимаемся и что умеем</Text>
        <Text style={styles.pageDec}>У нас 50 разработчиков с разным уровнем компетенций:  15 — фронтенд, 35 — бэкэнд, 5 — мобильные приложения.</Text>
      </View>
      <Carousel
        data={carouselCardItem}
        renderItem={renderItem}
        useScrollView={false}
        sliderWidth={width}
        itemWidth={300}
        onSnapToItem={() => console.log('snap')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
  textContainer: {
    paddingHorizontal: 24,
  },
  pageDec: {
    fontSize: 16,
    marginBottom: 40
  },
  pageTitle: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 40
  }
});

export default OurSkills;
