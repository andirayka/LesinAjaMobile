import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';

// Login screen for Parent and Tutor
export const GeneralLogin: FC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      <Button
        title="LOGIN ADMIN"
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
