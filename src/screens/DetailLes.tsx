import React, {FC, useState} from 'react';
import {CardKeyValue, Gap, Header} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Avatar, Button, Card, Subheading, Text} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import {getSingleDocument} from '@utils';

const listApplyingTutor = [
  {nama: 'Fahrul Firdaus'},
  {nama: 'Nico Aidin'},
  {nama: 'Fiqri Akbar'},
];

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
            titleStyle={{color: '#EF4444'}}
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

        {/* There is no applying tutor */}
        <Card style={{marginTop: dimens.standard}}>
          <Card.Title
            title="Menunggu Ada Tutor"
            titleStyle={{color: '#2563EB'}}
          />
          <Card.Content>
            <Subheading>Belum ada tutor yang mengambil les ini</Subheading>
          </Card.Content>
        </Card>

        {/* Choose Tutor */}
        <Card style={{marginTop: dimens.standard}}>
          <Card.Title
            style={{width: '100%'}}
            title="Anda Belum Memilih Tutor"
            subtitle="Klik item untuk melihat detail tutor "
            titleStyle={{color: '#F59E0B'}}
            subtitleStyle={{fontSize: dimens.medium_14}}
          />
          <Card.Content>
            {listApplyingTutor.map((item, index) => {
              return (
                <TutorItem
                  key={index}
                  item={item}
                  onPress={() => {
                    navigation.navigate('DetailTutor');
                  }}
                />
              );
            })}
          </Card.Content>
        </Card>
        <Gap y={dimens.standard} />
      </ScrollView>
    </SafeAreaView>
  );
};

const TutorItem: FC<{item: any; onPress: () => void}> = ({item, onPress}) => {
  return (
    <Card onPress={onPress} style={{marginTop: dimens.standard}}>
      <Card.Title
        title={item.nama}
        subtitle={item.nama}
        left={props => (
          <Avatar.Image
            {...props}
            size={45}
            source={{uri: 'http://placekitten.com/100/100'}}
          />
        )}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
