import React, {FC, useContext} from 'react';
import {Header} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import {AuthContext} from '@context/AuthContext';

export const Settings: FC<{navigation: any}> = ({navigation}) => {
  const {logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header noBackButton title="Pengaturan" />

      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1}}>
          <Button
            contentStyle={styles.settingsItem}
            labelStyle={styles.settingsText}
            onPress={() => {
              navigation.navigate('Account');
            }}>
            Ubah Data Pribadi
          </Button>
          <Button
            contentStyle={styles.settingsItem}
            labelStyle={styles.settingsText}
            onPress={() => {
              navigation.navigate('Account');
            }}>
            Daftar Siswa
          </Button>
        </View>
        <Button
          contentStyle={{
            paddingVertical: dimens.tiny_6,
            marginBottom: dimens.standard,
          }}
          labelStyle={{fontSize: dimens.standard_18, color: color.error_text}}
          onPress={logout}>
          Keluar
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
    color: '#4B5563',
  },
});
