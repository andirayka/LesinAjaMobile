import React, {FC} from 'react';
import {LogoLesinAja} from '@assets';
import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
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
});
