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
};

const lesItems: LesType[] = [
  {
    namaLes: 'Mengaji TK A',
    totalPertemuan: 8,
    pertemuanSelesai: 6,
    tglMulai: 1629698756,
    tglSelesai: 1631403073,
    siswa: 'Andi Rayka',
    tutor: 'Udin Harun',
    sudahBayar: true,
  },
  {
    namaLes: 'Mengaji TK B',
    totalPertemuan: 12,
    pertemuanSelesai: null,
    tglMulai: null,
    tglSelesai: null,
    siswa: 'Andi Rayka',
    tutor: null,
    sudahBayar: false,
  },
  {
    namaLes: 'Mengaji 1 SD',
    totalPertemuan: 4,
    pertemuanSelesai: null,
    tglMulai: null,
    tglSelesai: null,
    siswa: 'Andi Rayka',
    tutor: 'Udin Harun',
    sudahBayar: false,
  },
];

type ScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<MainTabParamList, 'Settings'>,
  StackScreenProps<AppStackParamList>
>;
export const Les: FC<ScreenProps> = ({navigation}) => {
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

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{flex: 1, padding: dimens.standard, paddingTop: dimens.small}}>
          {isEmptyData ? (
            <EmptyData />
          ) : (
            <>
              <OneLineInfo info="Klik item untuk melihat detail" />

              {lesItems.map((item, index) => {
                return (
                  <StudentItem key={index} item={item} onPress={() => {}} />
                );
              })}
            </>
          )}
        </View>
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
          {!item.tutor && (
            <Chip
              icon="cash-multiple"
              style={{
                marginTop: dimens.small,
                marginRight: dimens.small,
                backgroundColor: '#FBBF24',
              }}>
              Belum pilih tutor
            </Chip>
          )}
          {item.tutor && !item.sudahBayar && (
            <Chip
              icon="cash-multiple"
              style={{
                marginTop: dimens.small,
                marginRight: dimens.small,
                backgroundColor: '#F87171',
              }}>
              Belum bayar les
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
});
