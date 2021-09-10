import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList, MainTabParamList} from '@routes/RouteTypes';
import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

type ScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<MainTabParamList, 'Settings'>,
  StackScreenProps<AppStackParamList>
>;
export const Home: FC<ScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
