import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// Login screen for Admin only
export const LoginAdmin: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      {/* <Text>ok</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
