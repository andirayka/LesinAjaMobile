import React, {FC, useState} from 'react';
import {Header} from '@components';
import {color, dimens} from '@constants';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Button, Card, DataTable, Text} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AdminDrawerParamList, AppStackParamList} from '@routes/RouteTypes';
import {CompositeScreenProps} from '@react-navigation/core';
import {DrawerScreenProps} from '@react-navigation/drawer';

type SocialMediaType = {
  nama: string;
  efektivitas?: string;
  keterangan?: string;
};
type ScreenProps = CompositeScreenProps<
  DrawerScreenProps<AdminDrawerParamList, 'HomeAdmin'>,
  StackScreenProps<AppStackParamList>
>;
export const HomeAdmin: FC<ScreenProps> = ({navigation}) => {
  const [socialMedia, setSocialMedia] = useState<SocialMediaType[]>([
    {
      nama: 'Google',
      efektivitas: '10%',
      keterangan: '5',
    },
    {
      nama: 'Tiktok',
      efektivitas: '10%',
      keterangan: '5',
    },
    {
      nama: 'Instagram inst ',
      efektivitas: '10%',
      keterangan: '5',
    },
    {
      nama: 'YouTube',
      efektivitas: '10%',
      keterangan: '5',
    },
    {
      nama: 'Teman',
      efektivitas: '10%',
      keterangan: '5',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header drawerButton noBackButton title="Beranda" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: dimens.standard}}>
          <Card>
            <ScrollView horizontal>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={{minWidth: 100}}>
                    Sosial Media
                  </DataTable.Title>
                  <DataTable.Title style={{minWidth: 100}}>
                    Efektivitas
                  </DataTable.Title>
                  <DataTable.Title style={{minWidth: 100}}>
                    Jumlah Wali murid
                  </DataTable.Title>
                </DataTable.Header>
                {socialMedia.map(item => {
                  return <SocialMediaRow key={item.nama} item={item} />;
                })}
              </DataTable>
            </ScrollView>
          </Card>
          {/* <Card style={{marginTop: 500}}>
            <Card.Title title="ji" />
          </Card> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SocialMediaRow: FC<{item: SocialMediaType}> = ({item}) => {
  return (
    <DataTable.Row>
      <DataTable.Cell style={{minWidth: 100}}>{item.nama}</DataTable.Cell>
      <DataTable.Cell style={{minWidth: 100}}>
        {item.efektivitas}
      </DataTable.Cell>
      <DataTable.Cell style={{minWidth: 100}}>{item.keterangan}</DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
