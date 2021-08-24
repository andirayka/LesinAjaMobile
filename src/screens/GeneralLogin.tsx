import React, {FC, useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AuthContext} from '@context/AuthContext';
import {Button} from 'react-native-paper';

type ScreenType = {
  navigation: any;
};
// Login screen for Parent and Tutor
export const GeneralLogin: FC<ScreenType> = ({navigation}) => {
  const {loginParent} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <Button
        contentStyle={{padding: 30}}
        onPress={() => {
          loginParent();
        }}>
        LOGIN WALI MURID
      </Button>

      <Button
        contentStyle={{padding: 30}}
        onPress={() => {
          navigation.navigate('AdminLogin');
        }}>
        MASUK LOGIN ADMIN
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
