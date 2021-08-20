import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

export const Home: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <Title style={{color: 'black'}}>Home</Title>
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
