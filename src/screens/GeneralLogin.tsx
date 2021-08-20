import React, {FC, useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AuthContext} from '@context/AuthContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text} from 'react-native-elements';

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
        containerStyle={{marginTop: 50}}
        title="LOGIN WALI MURID"
        onPress={() => {
          loginParent();
        }}
      />

      <Button
        containerStyle={{marginTop: 50}}
        title="MASUK LOGIN ADMIN"
        onPress={() => {
          navigation.navigate('AdminLogin');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
