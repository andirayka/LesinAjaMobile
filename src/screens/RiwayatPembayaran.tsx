import React, {FC, useState} from 'react';
import {CardKeyValue, Header} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AdminDrawerParamList, AppStackParamList} from '@routes/RouteTypes';
import {CompositeScreenProps} from '@react-navigation/core';
import {DrawerScreenProps} from '@react-navigation/drawer';

type ScreenProps = CompositeScreenProps<
  DrawerScreenProps<AdminDrawerParamList, 'RiwayatPembayaran'>,
  StackScreenProps<AppStackParamList>
>;
export const RiwayatPembayaran: FC<ScreenProps> = ({navigation}) => {
  const [riwayat, setRiwayat] = useState([
    {
      keterangan: 'Bayar Gaji Tutor',
      wali: 'Handoko',
      siswa: 'Waluyo',
      biaya: 'Rp 1.200.000',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Riwayat Pembayaran" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: dimens.standard}}>
          {riwayat.map((item, key) => {
            return (
              <Card key={key}>
                <Card.Title title={'Admin kepada Tutor Suprayitno'} />
                <Card.Content>
                  <CardKeyValue
                    keyFlex={9}
                    keyName="Keterangan"
                    value={item.keterangan}
                  />
                  <CardKeyValue
                    keyFlex={9}
                    keyName="Nama Wali Murid"
                    value={item.wali}
                  />
                  <CardKeyValue
                    keyFlex={9}
                    keyName="Nama Siswa"
                    value={item.siswa}
                  />
                  <CardKeyValue
                    keyFlex={9}
                    keyName="Biaya Gaji Tutor"
                    value={item.biaya}
                  />
                </Card.Content>
                <Card.Actions>
                  <Button>Tandai Sudah Mengirim Gaji</Button>
                  {/* <Button>Lihat Bukti Pembayaran</Button> */}
                </Card.Actions>
              </Card>
            );
          })}
        </View>
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
