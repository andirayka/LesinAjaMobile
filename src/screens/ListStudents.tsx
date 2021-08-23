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
import {Card, Subheading} from 'react-native-paper';

type StudentType = {
  nama: string;
  kelas: string;
  sekolah: string;
};

const studentItems: StudentType[] = [
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
  {nama: 'Andi Rayka', kelas: '1 SD', sekolah: 'SDN 1 Buduran'},
];

type Props = {
  navigation: any;
};
export const ListStudents: FC<Props> = ({navigation}) => {
  const [isEmptyData, setIsEmptyData] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Daftar Siswa Anda" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{flex: 1, padding: dimens.standard, paddingTop: dimens.small}}>
          {isEmptyData ? (
            <EmptyData />
          ) : (
            <>
              <OneLineInfo info="Klik item untuk mengubah data" />

              {studentItems.map((item, index) => {
                return (
                  <StudentItem
                    item={item}
                    onPress={() => {
                      navigation.navigate('EditStudent', {item});
                    }}
                    key={index}
                  />
                );
              })}
            </>
          )}
        </View>

        <Gap y={72} />
      </ScrollView>

      {/* Add button */}
      <FABList
        label="Tambah Siswa Baru"
        onPress={() => {
          navigation.navigate('EditStudent');
        }}
      />
    </SafeAreaView>
  );
};

const StudentItem: FC<{item: StudentType; onPress: () => void}> = ({
  item,
  onPress,
}) => {
  return (
    <Card style={{marginTop: dimens.standard}} onPress={onPress}>
      <Card.Title title={item.nama} />
      <Card.Content>
        <CardKeyValue keyName="Jenjang Kelas" value={item.kelas} />
        <CardKeyValue keyName="Sekolah" value={item.sekolah} />
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
