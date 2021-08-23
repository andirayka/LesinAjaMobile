import React, {FC} from 'react';
import {ButtonFormSubmit, Header} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Card, Paragraph, Subheading, Title} from 'react-native-paper';

type StudentType = {
  nama: string;
  kelas: string;
  sekolah: string;
};

const studentItems = [
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Daftar Siswa Anda" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{flex: 1, padding: dimens.standard, paddingTop: dimens.small}}>
          <Subheading>
            <Subheading style={{fontWeight: 'bold'}}>Info:</Subheading> Klik
            item siswa untuk mengubah data
          </Subheading>

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
        </View>
      </ScrollView>

      {/* Add button */}
      <ButtonFormSubmit
        text="Tambah Siswa Baru"
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
      <Card.Content>
        <Title>{item.nama}</Title>
        <CardKeyValue keyName="Jenjang Kelas" value={item.kelas} />
        <CardKeyValue keyName="Sekolah" value={item.sekolah} />
      </Card.Content>
    </Card>
  );
};

const CardKeyValue: FC<{keyName: string; value: string}> = ({
  keyName,
  value,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Paragraph style={{flex: 3, fontSize: dimens.standard}}>
        {keyName}
      </Paragraph>
      <Paragraph style={{flex: 5, fontSize: dimens.standard}}>
        : {value}
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
