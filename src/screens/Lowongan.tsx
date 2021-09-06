import React, {FC} from 'react';
import {Header, Gap, NestedCard} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type ScreenProps = StackScreenProps<AppStackParamList, 'Lowongan'>;
export const Lowongan: FC<ScreenProps> = ({navigation}) => {
  const lowonganList = [
    {
      les: 'Mengaji TK A',
      jumlahPertemuan: 4,
      gaji: 240000,
    },
    {
      les: 'Fisika SMK Kelas 2',
      jumlahPertemuan: 8,
      gaji: 250000,
    },
    {
      les: 'Gambar Teknik PAUD',
      jumlahPertemuan: 12,
      gaji: 300000,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Lowongan" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card>
          <Card.Title
            title="Lowongan Les"
            titleStyle={{alignSelf: 'center'}}
            subtitle="Pilih lowongan"
            subtitleStyle={styles.subTitle}
            style={{marginBottom: dimens.standard}}
          />
          <Card.Content>
            {lowonganList.map((item, index) => {
              return (
                <NestedCard
                  key={index}
                  title={item.les}
                  subtitle={`${item.jumlahPertemuan} pertemuan `}
                  additionalText={`Rp. ${item.gaji}`}
                  onPress={() => {
                    navigation.navigate('DetailLowongan');
                  }}
                />
              );
            })}
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
    textAlign: 'center',
    fontSize: dimens.standard,
  },
});
