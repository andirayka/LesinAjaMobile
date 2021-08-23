import React, {FC, useState} from 'react';
import {
  ButtonFormSubmit,
  CardKeyValue,
  EmptyData,
  FABList,
  Gap,
  Header,
  OneLineInfo,
} from '@components';
import {color, dimens} from '@constants';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {
  Button,
  Card,
  FAB,
  Paragraph,
  Text,
  TextInput,
  Title,
} from 'react-native-paper';
import dayjs from 'dayjs';

type LesType = {
  namaLes: string;
  totalPertemuan: number;
  pertemuanSelesai: number;
  tglMulai: number;
  tglSelesai: number;
  siswa: string;
  tutor: string;
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
  },
  {
    namaLes: 'Mengaji TK A',
    totalPertemuan: 8,
    pertemuanSelesai: 6,
    tglMulai: 1629698756,
    tglSelesai: 1631403073,
    siswa: 'Andi Rayka',
    tutor: 'Udin Harun',
  },
  {
    namaLes: 'Mengaji TK A',
    totalPertemuan: 8,
    pertemuanSelesai: 6,
    tglMulai: 1629698756,
    tglSelesai: 1631403073,
    siswa: 'Andi Rayka',
    tutor: 'Udin Harun',
  },
];

type Props = {
  navigation: any;
};
export const Les: FC<Props> = ({navigation}) => {
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
          // navigation.navigate('EditStudent');
        }}
      />
    </SafeAreaView>
  );
};

const StudentItem: FC<{item: LesType; onPress: () => void}> = ({
  item,
  onPress,
}) => {
  const tglMulai = dayjs.unix(item.tglMulai).format('DD MMMM YYYY');
  const tglSelesai = dayjs.unix(item.tglSelesai).format('DD MMMM YYYY');

  return (
    <Card style={{marginTop: dimens.standard}} onPress={onPress}>
      <Card.Title
        title={item.namaLes}
        subtitle={`${item.pertemuanSelesai}/${item.totalPertemuan} Pertemuan`}
      />

      <Card.Content>
        <CardKeyValue keyName="Siswa" value={item.siswa} />
        <CardKeyValue keyName="Tutor" value={item.tutor} />
        <CardKeyValue keyName="Tgl Mulai" value={tglMulai} />
        <CardKeyValue keyName="Tgl Selesai" value={tglSelesai} />
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
