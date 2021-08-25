import React, {FC} from 'react';
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

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailLes'>;
export const DetailLes: FC<ScreenProps> = ({navigation}) => {
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
            // subtitle='Klik "Unggah Bukti Pembayaran"'
            titleStyle={{color: '#F59E0B'}}
          />
          <Card.Content>
            <CardKeyValue keyName="Biaya Les" value="Rp 200.000" keyFlex={8} />
          </Card.Content>
          <Card.Actions>
            <Button>Unggah Bukti Pembayaran</Button>
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
