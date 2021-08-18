import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';

// Login screen for Admin only
export const GeneralLogin: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <Button title="LOGIN" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
