import React, {FC} from 'react';
import {Header, Gap, CardLabelValue} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Card, Divider, Paragraph, Button} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailLowongan'>;
export const DetailLowongan: FC<ScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Lowongan" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card>
          <Card.Title
            title="Gambar Teknik TK B"
            titleStyle={{alignSelf: 'center'}}
            style={{marginBottom: dimens.standard}}
          />
          <Card.Content>
            {/* if over */}
            <Paragraph style={{fontSize: dimens.standard}}>
              Tanggal mulai: 9 September 2020
            </Paragraph>
            <Gap y={dimens.tiny} />
            <Divider />
            <Gap y={dimens.tiny} />

            <CardLabelValue label="Siswa" value="Gopi" />
            <CardLabelValue label="Wali Murid" value="Mikasa" />
            <CardLabelValue label="Paket" value="8 Pertemuan" />
            <CardLabelValue label="Paket" value="8 Pertemuan" />
            <CardLabelValue label="Gaji Tutor" value="Rp 300000" />
            <Button style={{marginTop: dimens.standard}}>Ambil Lowongan</Button>
            <Gap y={dimens.standard} />
          </Card.Content>
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
  scrollView: {
    flexGrow: 1,
    padding: dimens.standard,
  },
  subTitle: {
    fontSize: dimens.standard,
    alignSelf: 'center',
  },
  presenceStatus: {
    textAlign: 'center',
    fontSize: dimens.standard,
    marginTop: dimens.small,
    color: color.green_500,
  },
});
