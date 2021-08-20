import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

export const Home: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      {/* <Button title="Home" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
