import React, {FC} from 'react';
import {LogoAplikasi, LogoLesinAja} from '@assets';
import {dimens} from '@constants';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Gap} from '@components';

// Splash Screen for loading
export const Splash: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={LogoLesinAja}
          style={{width: 300, resizeMode: 'contain'}}
        />
      </View>

      <Gap y={50} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    // color: color.purple_200,
    fontSize: dimens.medium,
    marginBottom: dimens.large,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameText: {
    fontSize: dimens.standard,
    marginLeft: dimens.small,
  },
});
