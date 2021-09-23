import React, {FC} from 'react';
import {Header, OneLineInfo, CardKeyValue} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {AdminDrawerParamList, AppStackParamList} from '@routes/RouteTypes';
import {StackScreenProps} from '@react-navigation/stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {Button, Card} from 'react-native-paper';

type ScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<AdminDrawerParamList, 'ListTutor'>,
  StackScreenProps<AppStackParamList>
>;

export const ListLes: FC<ScreenProps> = ({navigation}) => {
  const lesList = [
    {
      mapel: 'Fisika',
      jenjangKelas: 'SMP Kelas 3',
      paket: 'Paket 2',
      wilayah: 'Wilayah 1',
      biaya: '2500000',
      gajiTutor: '200000',
    },
    {
      mapel: 'Gambar Teknik',
      jenjangKelas: 'TK A',
      paket: 'Paket 1',
      wilayah: 'Wilayah 1',
      biaya: '2500000',
      gajiTutor: '200000',
    },
    {
      mapel: 'Matematika',
      jenjangKelas: 'SMP Kelas 1',
      paket: 'Paket 1',
      wilayah: 'Wilayah 2',
      biaya: '2500000',
      gajiTutor: '200000',
    },
    {
      mapel: 'Bahasa Inggris',
      jenjangKelas: 'SMA Kelas 3',
      paket: 'Paket 2',
      wilayah: 'Wilayah 1',
      biaya: '2500000',
      gajiTutor: '200000',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header
        noBackButton
        withFilter
        title="Daftar Les"
        onPressFilter={() => {}}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <OneLineInfo info="Klik item untuk melihat detail" />
        {lesList.map((item, index) => {
          return (
            <Card key={index} style={{marginTop: dimens.standard}}>
              <Card.Title title={`${item.mapel} ${item.jenjangKelas}`} />
              <Card.Content>
                <CardKeyValue keyName="Paket" value={item.paket} />
                <CardKeyValue keyName="Wilayah" value={item.wilayah} />
                <CardKeyValue keyName="Biaya" value={item.biaya} />
                <CardKeyValue keyName="Gaji Tutor" value={item.gajiTutor} />
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => {}}>Edit</Button>
                <Button onPress={() => {}}>Hapus</Button>
              </Card.Actions>
            </Card>
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
