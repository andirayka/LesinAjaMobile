import {color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

type Props = {
  title: string;
  noBackButton?: boolean;
  withFilter?: boolean;
  onPressFilter?: () => void;
};
export const Header: FC<Props> = ({
  title,
  noBackButton,
  withFilter,
  onPressFilter,
}) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.container}>
      {!noBackButton && <Appbar.BackAction onPress={navigation.goBack} />}

      <Appbar.Content title={title} titleStyle={{color: color.btn_black}} />

      {withFilter && (
        <Appbar.Action icon="filter-outline" onPress={onPressFilter} />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
  },
});
