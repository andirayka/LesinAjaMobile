import React, {FC, useState} from 'react';
import {CardKeyValue, Header} from '@components';
import {color, dimens} from '@constants';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Button, Card, Text, Title} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import {getSingleDocument} from '@utils';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailLes'>;
export const DetailLes: FC<ScreenProps> = ({navigation}) => {
  const [buktiBayar, setBuktiBayar] = useState({
    path: '',
  });

  const onPressUploadBuktiBayar = async () => {
    if (buktiBayar.path === '') {
      const res = await getSingleDocument();
      if (res) {
        setBuktiBayar(prev => ({...prev, path: res.uri}));
      }
    } else {
      // Upload
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Les" />

      <ScrollView
        contentContainerStyle={{flexGrow: 1, padding: dimens.standard}}>
        {/* About Les */}
        <Card>
          <Card.Title title="IPA kelas 5 SD" subtitle="5/8 Pertemuan" />
          <Card.Content>
            <CardKeyValue keyName="Siswa" value="Andi Rayka" keyFlex={8} />
            <CardKeyValue keyName="Tutor" value="Udin Harun" keyFlex={8} />
            <CardKeyValue
              keyName="Tgl Mulai"
              value="12 Agustus 2021"
              keyFlex={8}
            />
            <CardKeyValue
              keyName="Tgl Selesai"
              value="12 September 2021"
              keyFlex={8}
            />
          </Card.Content>
        </Card>

        {/* Pay Les */}
        <Card style={{marginTop: dimens.standard}}>
          <Card.Title
            title="Anda Belum Membayar Biaya Les"
            subtitle="Biaya Les: Rp 200.000"
            titleStyle={{color: '#F59E0B'}}
            subtitleStyle={{fontSize: dimens.medium_14}}
          />
          {buktiBayar.path !== '' && (
            <Card.Cover
              source={{uri: buktiBayar.path}}
              style={{
                marginTop: dimens.small,
                marginHorizontal: dimens.standard,
              }}
            />
          )}
          <Card.Actions>
            <Button onPress={onPressUploadBuktiBayar}>
              {buktiBayar.path === '' ? 'Unggah Bukti Pembayaran' : 'Kirim'}
            </Button>
          </Card.Actions>
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
});
