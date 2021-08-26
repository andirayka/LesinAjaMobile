import React, {FC, useContext} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {AuthContext} from '@context/AuthContext';
import {Button, Subheading, Title} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import {color, dimens} from '@constants';
import {LogoLesinAja} from '@assets';

type ScreenProps = StackScreenProps<AppStackParamList, 'LoginGeneral'>;
// Login screen for Parent and Tutor
export const LoginGeneral: FC<ScreenProps> = ({navigation}) => {
  const {loginParent} = useContext(AuthContext);

  const onPressLogin = () => {
    loginParent();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={{flexGrow: 1, padding: dimens.standard}}>
        {/* Logo */}
        <Image
          source={LogoLesinAja}
          style={{width: 300, height: 100, resizeMode: 'contain'}}
        />
        <Title>Selamat Datang!</Title>
        <Subheading>Masuk dengan akun Google untuk melanjutkan.</Subheading>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
