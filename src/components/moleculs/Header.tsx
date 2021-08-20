import {color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

type Props = {
  title: string;
};
export const Header: FC<Props> = ({title}) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.container}>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title={title} titleStyle={{color: color.btn_black}} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
  },
});
