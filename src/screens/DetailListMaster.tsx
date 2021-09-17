import React, {FC, useState} from 'react';
import {Header, OneLineInfo} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Card, DataTable, IconButton, Text} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailListMaster'>;
export const DetailListMaster: FC<ScreenProps> = ({route, navigation}) => {
  const {detailType}: any = route.params;

  const data = {
    jenjangkelas: [
      {
        item: 'TK A',
      },
      {
        item: 'TK B',
      },
      {
        item: 'SMP Kelas 7',
      },
      {
        item: 'SMP Kelas 8',
      },
      {
        item: 'SMP Kelas 9',
      },
    ],
    mapel: [
      {
        item: 'IPS',
      },
      {
        item: 'IPA',
      },
      {
        item: 'Mengaji',
      },
      {
        item: 'Gambar Teknik',
      },
      {
        item: 'Bahasa Inggris',
      },
    ],
    paket: [
      {
        item: 'Paket 1',
        jumlahPertemuan: 4,
      },
      {
        item: 'Paket 2',
        jumlahPertemuan: 8,
      },
      {
        item: 'Paket 3',
        jumlahPertemuan: 12,
      },
    ],
    wilayah: [
      {
        item: 'Wilayah 1',
        biaya: 230000,
        wilayah: ['jawa timur', 'jawa tengah', 'jawa barat'],
      },
      {
        item: 'Wilayah 2',
        biaya: 250000,
        wilayah: ['jakarta', 'banten', 'serang'],
      },
      {
        item: 'Wilayah 3',
        biaya: 200000,
        wilayah: ['bali', 'madura', 'lombok', 'surakarta'],
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title={`Detail Master ${detailType}`} />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.viewContainer}>
          {detailType == 'Wilayah' && (
            <OneLineInfo info="Geser tabel ke kanan untuk melihat data lebih lengkap" />
          )}
          <Card style={{marginTop: dimens.standard}}>
            <ScrollView horizontal>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={styles.tableCell}>
                    Item
                  </DataTable.Title>
                  {detailType == 'Wilayah' && (
                    <>
                      <DataTable.Title style={styles.tableCell}>
                        Biaya Pendaftaran
                      </DataTable.Title>
                      <DataTable.Title style={styles.wideTableCell}>
                        Cakupan Wilayah
                      </DataTable.Title>
                    </>
                  )}
                  <DataTable.Title style={styles.actionCell}>
                    Aksi
                  </DataTable.Title>
                </DataTable.Header>
                {data[detailType.replace(/\s+/g, '').toLowerCase()].map(
                  item => {
                    return (
                      <SocialMediaRow
                        key={item.item}
                        item={item}
                        itemType={detailType}
                      />
                    );
                  },
                )}
              </DataTable>
            </ScrollView>
          </Card>
          <Card style={{marginTop: 500}}>
            <Card.Title title="ji" />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SocialMediaRow: FC<{item: any; itemType: string}> = ({
  item,
  itemType,
}) => {
  return (
    <DataTable.Row>
      <DataTable.Cell style={styles.tableCell}>{item.item}</DataTable.Cell>
      {itemType == 'Wilayah' && (
        <>
          <DataTable.Cell style={styles.tableCell}>{item.biaya}</DataTable.Cell>
          <DataTable.Cell style={styles.wideTableCell}>
            {item.wilayah.map(item => {
              return <Text key={item}>{`${item}, `}</Text>;
            })}
          </DataTable.Cell>
        </>
      )}
      <DataTable.Cell style={styles.actionCell}>
        <IconButton icon="pencil" size={30} onPress={() => {}} />
        <IconButton icon="delete" size={30} onPress={() => {}} />
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    padding: dimens.standard,
    paddingTop: dimens.small,
  },
  tableCell: {
    minWidth: 100,
    marginRight: 10,
  },
  wideTableCell: {
    minWidth: 300,
    marginRight: 10,
  },
  actionCell: {
    minWidth: 300,
  },
});
