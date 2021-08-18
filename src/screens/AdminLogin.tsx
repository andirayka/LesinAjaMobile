import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

// Login screen for Admin only
export const AdminLogin: FC = () => {
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
