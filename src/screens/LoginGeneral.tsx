import React, {FC, useContext} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {AuthContext} from '@context/AuthContext';
import {Button, Subheading, Text, Title} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import {color, dimens} from '@constants';
import {LogoLesinAja} from '@assets';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

type ScreenProps = StackScreenProps<AppStackParamList, 'LoginGeneral'>;
// Login screen for Parent and Tutor
export const LoginGeneral: FC<ScreenProps> = ({navigation}) => {
  const {loginParent} = useContext(AuthContext);

  const onPressLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log({userInfo});
      // this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available or outdated');
      } else {
        console.log(error);
        // some other error happened
      }
    }

    // loginParent();
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

        <GoogleSigninButton
          style={{height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onPressLogin}
          disabled={false}
        />
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
