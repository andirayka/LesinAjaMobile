import React, {FC, useContext} from 'react';
import {ButtonFormSubmit, CardLabelValue, Gap, Header} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Avatar, Card, Divider, Subheading, Title} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import {AuthContext} from '@context/AuthContext';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailWalmur'>;
export const DetailWalmur: FC<ScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Wali Murid" />

      <ScrollView
        contentContainerStyle={{flexGrow: 1, padding: dimens.standard}}>
        <Card style={styles.contentContainer}>
          <Title style={{textAlign: 'center'}}>Abdul Malik, S.Kom.</Title>

          <Gap y={dimens.tiny} />
          <Divider />
          <Gap y={dimens.tiny} />

          <CardLabelValue label="Jenis Kelamin" value="Laki - Laki" />
          <CardLabelValue label="Email" value="abdmlk@gmail.com" />
          <CardLabelValue label="Nomor WA" value="089778664331" />
          <CardLabelValue label="Pekerjaan" value="Swasta" />
          <CardLabelValue
            label="Alamat"
            value="Jl.Kenari No 37, RT 004, RW 036, Desa Arjosari, Kecamatan Kalipare, Kabupaten Malang, Provinsi Jawa Timur"
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: dimens.standard,
  },
});
