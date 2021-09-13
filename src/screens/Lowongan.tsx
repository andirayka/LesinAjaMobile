import React, {FC, useState} from 'react';
import {Header, NestedCard, OneLineInfo} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {AppStackParamList, MainTabParamList} from '@routes/RouteTypes';
import {StackScreenProps} from '@react-navigation/stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

type ScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<MainTabParamList, 'Lowongan'>,
  StackScreenProps<AppStackParamList>
>;

export const Lowongan: FC<ScreenProps> = ({navigation}) => {
  const lowonganList = [
    {
      les: 'Mengaji TK A',
      jumlahPertemuan: 4,
      gaji: 240000,
    },
    {
      les: 'Fisika SMK Kelas 2',
      jumlahPertemuan: 8,
      gaji: 250000,
    },
    {
      les: 'Gambar Teknik PAUD',
      jumlahPertemuan: 12,
      gaji: 300000,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header noBackButton title="Lowongan" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <OneLineInfo info="Klik item untuk melihat detail" />

        {lowonganList.map((item, index) => {
          return (
            <NestedCard
              key={index}
              title={item.les}
              subtitle={`${item.jumlahPertemuan} pertemuan `}
              additionalText={`Rp. ${item.gaji}`}
              onPress={() => {
                navigation.navigate('DetailLowongan');
              }}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: dimens.standard,
    paddingTop: dimens.small,
  },
});
