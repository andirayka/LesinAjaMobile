import React, {FC, useState} from 'react';
import {
  CardKeyValue,
  EmptyData,
  FABList,
  Gap,
  Header,
  OneLineInfo,
} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Card, Chip} from 'react-native-paper';
import dayjs from 'dayjs';
import {CompositeScreenProps} from '@react-navigation/native';
import {AppStackParamList, MainTabParamList} from '@routes/RouteTypes';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

type LesType = {
  namaLes: string;
  totalPertemuan: number;
  siswa: string;
  pertemuanSelesai: number | null;
  tglMulai: number | null;
  tglSelesai: number | null;
  tutor: string | null;
  sudahBayar: boolean;
  menungguTutor: boolean;
};

const lesItems: LesType[] = [
  {
    namaLes: 'Mengaji kelas 3 SD',
    totalPertemuan: 8,
    pertemuanSelesai: 6,
    tglMulai: 1629698756,
    tglSelesai: 1631403073,
    siswa: 'Andi Rayka',
    tutor: 'Udin Harun',
    sudahBayar: true,
    menungguTutor: false,
  },
  {
    namaLes: 'Mengaji kelas 2 SD',
    totalPertemuan: 12,
    pertemuanSelesai: null,
    tglMulai: null,
    tglSelesai: null,
    siswa: 'Andi Rayka',
    tutor: null,
    sudahBayar: false,
    menungguTutor: false,
  },
];

type ScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<MainTabParamList, 'LesTutor'>,
  StackScreenProps<AppStackParamList>
>;
export const LesTutor: FC<ScreenProps> = ({navigation}) => {
  const [isEmptyData, setisEmptyData] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header
        noBackButton
        withFilter
        title="Daftar Les"
        onPressFilter={() => {
          alert('Belum jadi');
        }}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {isEmptyData ? (
          <EmptyData />
        ) : (
          <>
            <OneLineInfo info="Klik item untuk melihat detail" />

            {lesItems.map((item, index) => {
              return (
                <StudentItem
                  key={index}
                  item={item}
                  onPress={() => {
                    navigation.navigate('DetailLes');
                  }}
                />
              );
            })}
          </>
        )}
        <Gap y={72} />
      </ScrollView>

      {/* Add button */}
      <FABList
        label="Tambah Les Baru"
        onPress={() => {
          navigation.navigate('AddLes');
        }}
      />
    </SafeAreaView>
  );
};

const StudentItem: FC<{item: LesType; onPress: () => void}> = ({
  item,
  onPress,
}) => {
  const tglMulai =
    item.tglMulai && dayjs.unix(item.tglMulai).format('DD MMMM YYYY');
  const tglSelesai =
    item.tglSelesai && dayjs.unix(item.tglSelesai).format('DD MMMM YYYY');
  const jmlhPertemuanSelesai = item.pertemuanSelesai
    ? `${item.pertemuanSelesai}/`
    : '';

  const statusData = () => {
    if (item.menungguTutor) {
      return {text: 'Menunggu ada tutor', bgColor: '#93C5FD'};
    }
    if (!item.tutor) {
      return {text: 'Belum pilih tutor', bgColor: '#FBBF24'};
    }
    if (!item.sudahBayar) {
      return {text: 'Belum bayar les', bgColor: '#F87171'};
    }

    return null;
  };

  return (
    <Card style={{marginTop: dimens.standard}} onPress={onPress}>
      <Card.Title
        title={item.namaLes}
        subtitle={`${jmlhPertemuanSelesai}${item.totalPertemuan} Pertemuan`}
      />

      <Card.Content>
        <CardKeyValue keyName="Siswa" value={item.siswa} />
        {item.tutor && <CardKeyValue keyName="Tutor" value={item.tutor} />}
        {tglMulai && tglSelesai && (
          <>
            <CardKeyValue keyName="Tgl Mulai" value={tglMulai} />
            <CardKeyValue keyName="Tgl Selesai" value={tglSelesai} />
          </>
        )}

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {statusData() && (
            <Chip
              icon="cash-multiple"
              style={[
                styles.chipStatus,
                {backgroundColor: statusData()?.bgColor},
              ]}>
              {statusData()?.text}
            </Chip>
          )}
        </View>
      </Card.Content>
    </Card>
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
  chipStatus: {
    marginTop: dimens.small,
    marginRight: dimens.small,
  },
});
