import React, {FC} from 'react';
import {Header, Gap, CardKeyValue} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Card, Divider, Paragraph, Button} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import dayjs from 'dayjs';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailPresensi'>;
export const DetailPresensi: FC<ScreenProps> = () => {
  const tanggalPertemuan = dayjs.unix(1630610037).format('DD MMMM YYYY');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Presensi" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card>
          <Card.Title
            title="Presensi Les Siswa Gopi"
            titleStyle={{alignSelf: 'center'}}
            subtitle="Presensi ke 1"
            subtitleStyle={styles.subTitle}
            style={{marginBottom: dimens.standard}}
          />
          <Card.Content>
            {/* if over */}
            <Paragraph style={{fontSize: dimens.standard}}>
              {tanggalPertemuan}
            </Paragraph>
            <Gap y={dimens.tiny} />
            <Divider />
            <Gap y={dimens.tiny} />

            <CardKeyValue keyFlex={10} keyName="Les" value="Mengaji TK A" />
            <CardKeyValue
              keyFlex={10}
              keyName="Tutor"
              value="Nico Akbar Prasetyo"
            />
            <Paragraph style={styles.presenceStatus}>Selesai</Paragraph>
            <Gap y={dimens.standard} />

            {/* if not over */}
            <Paragraph style={{fontSize: dimens.standard}}>
              {tanggalPertemuan}
            </Paragraph>
            <Gap y={dimens.tiny} />
            <Divider />
            <Gap y={dimens.tiny} />

            <CardKeyValue keyFlex={10} keyName="Les" value="Mengaji TK A" />
            <CardKeyValue
              keyFlex={10}
              keyName="Tutor"
              value="Nico Akbar Prasetyo"
            />
            <Button style={{marginTop: dimens.standard}} icon="pencil-outline">
              Edit tanggal pertemuan
            </Button>
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
  scrollContainer: {
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
