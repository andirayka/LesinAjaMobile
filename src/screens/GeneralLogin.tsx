import React, {FC, useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AuthContext} from '@context/AuthContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-paper';

type ScreenType = {
  navigation: any;
};
// Login screen for Parent and Tutor
export const GeneralLogin: FC<ScreenType> = ({navigation}) => {
  const {loginParent, setUserRole} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <Button
        onPress={() => {
          loginParent();
        }}>
        LOGIN WALI MURID
      </Button>

      <Button
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
