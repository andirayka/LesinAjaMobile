import React, {FC} from 'react';
import {Header} from '@components';
import {color, dimens} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailPresensi'>;
export const DetailPresensi: FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Presensi" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: dimens.standard}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
