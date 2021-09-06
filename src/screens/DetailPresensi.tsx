import React, {FC} from 'react';
import {Header, Gap, CardKeyValue} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {
  Card,
  Title,
  Subheading,
  Divider,
  Paragraph,
  Button,
} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import dayjs from 'dayjs';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailPresensi'>;
export const DetailPresensi: FC<ScreenProps> = ({navigation}) => {
  const tanggalPertemuan = dayjs.unix(1630610037).format('DD MMMM YYYY');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Presensi" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card style={styles.contentContainer}>
          <Title style={{textAlign: 'center'}}>Presensi Les Siswa Gopi</Title>
          <Subheading style={styles.subHeading}>Pertemuan ke 1</Subheading>

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
          <Button style={{marginTop: dimens.small}} icon="pencil-outline">
            Edit tanggal pertemuan
          </Button>
          <Gap y={dimens.standard} />
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
  scrollView: {
    flexGrow: 1,
    padding: dimens.standard,
  },
  subHeading: {
    textAlign: 'center',
    marginBottom: 30,
  },
  presenceStatus: {
    textAlign: 'center',
    fontSize: dimens.standard,
    marginTop: dimens.small,
    color: color.green_500,
  },
});
