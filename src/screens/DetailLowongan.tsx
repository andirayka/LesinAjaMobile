import React, {FC} from 'react';
import {Header, Gap, CardLabelValue} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {Card, Divider, Paragraph, Button, Caption} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import dayjs from 'dayjs';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailLowongan'>;
export const DetailLowongan: FC<ScreenProps> = () => {
  const jadwalLes = [
    1630991440, 1631074240, 1631074240, 1631074240, 1631074240, 1631074240,
    1631074240, 1631074240,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Lowongan" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card>
          <Card.Title
            title="Gambar Teknik TK B"
            titleStyle={{alignSelf: 'center'}}
          />
          <Card.Content>
            <Divider />
            <Gap y={dimens.tiny} />

            <CardLabelValue label="Siswa" value="Gopi" />
            <CardLabelValue label="Wali Murid" value="Mikasa" />
            <CardLabelValue label="Paket" value="8 Pertemuan" />
            <CardLabelValue label="Paket" value="8 Pertemuan" />
            <CardLabelValue label="Gaji Tutor" value="Rp 300000" />
            <CardLabelMultipleValue label="Jadwal Les" value={jadwalLes} />
            <Button style={{marginTop: dimens.standard}}>Ambil Lowongan</Button>
            <Gap y={dimens.standard} />
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const CardLabelMultipleValue: FC<{
  label: string;
  value: Array<number>;
}> = ({label, value}) => {
  return (
    <View style={{marginTop: dimens.medium}}>
      <Caption style={{fontSize: dimens.standard}}>{label}</Caption>
      {value.map((item, index) => {
        return (
          <Paragraph key={index} style={{fontSize: dimens.medium_14}}>
            {dayjs.unix(item).format('dddd MMMM YYYY')}
          </Paragraph>
        );
      })}
    </View>
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
