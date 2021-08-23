import {dimens} from '@constants';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Headline, Subheading} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};
export const EmptyData: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="database-remove"
        size={130}
        style={{color: 'grey'}}
      />

      <Headline style={{textAlign: 'center', marginTop: dimens.large}}>
        Belum ada data.
      </Headline>
      <Subheading
        style={{textAlign: 'center', paddingHorizontal: dimens.large}}>
        Klik tombol tambah di bawah untuk menambah data
      </Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: dimens.massive,
  },
});
