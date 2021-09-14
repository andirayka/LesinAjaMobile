import React, {FC} from 'react';
import {Header, OneLineInfo, CardKeyValue} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {AdminDrawerParamList, AppStackParamList} from '@routes/RouteTypes';
import {StackScreenProps} from '@react-navigation/stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {Card, Button} from 'react-native-paper';

type ScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<AdminDrawerParamList, 'ListTutor'>,
  StackScreenProps<AppStackParamList>
>;

export const ListTutor: FC<ScreenProps> = ({navigation}) => {
  const tutorList = [
    {
      nama: 'Nico Prakoso',
      email: 'nico@null.net',
      nomorWhatsApp: '089778889331',
      alamat: 'bojong kidul',
    },
    {
      nama: 'Akbar Wibowo',
      email: 'akbar@void.net',
      nomorWhatsApp: '089778889331',
      alamat: 'bojong lor',
    },
    {
      nama: 'Prasetyo',
      email: 'pras@lewd.net',
      nomorWhatsApp: '089778889331',
      alamat: 'bojong utara',
    },
    {
      nama: 'Wendy Akbar',
      email: 'wendy@mock.net',
      nomorWhatsApp: '089778889331',
      alamat: 'bojong tenggara',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header noBackButton withFilter title="Daftar Tutor" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <OneLineInfo info="Klik item untuk melihat detail" />
        {tutorList.map((item, index) => {
          return (
            <Card
              key={index}
              style={{marginTop: dimens.standard}}
              onPress={() => navigation.navigate('DetailTutor')}>
              <Card.Title title={item.nama} />
              <Card.Content>
                <CardKeyValue keyName="Nama" value={item.nama} />
                <CardKeyValue keyName="Email" value={item.email} />
                <CardKeyValue keyName="Nomor WA" value={item.nomorWhatsApp} />
                <CardKeyValue keyName="Alamat" value={item.alamat} />
              </Card.Content>
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
