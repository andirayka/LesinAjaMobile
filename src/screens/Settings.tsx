import React, {FC} from 'react';
import {Header} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

export const Settings: FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header noBackButton title="Pengaturan" />

      <ScrollView contentContainerStyle={{flex: 1}}>
        <Button
          contentStyle={styles.settingsItem}
          labelStyle={styles.settingsText}
          onPress={() => {
            navigation.navigate('Account');
          }}>
          Ubah Data Pribadi
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
  settingsItem: {
    justifyContent: 'flex-start',
    paddingVertical: dimens.tiny_6,
  },
  settingsText: {
    fontSize: dimens.standard_18,
    color: color.modal_subtitle,
  },
});
