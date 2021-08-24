import React, {FC} from 'react';
import {dimens} from '@constants';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

type ComponentProps = {
  label: string;
  buttonText: string;
};
export const InputChoice: FC<ComponentProps> = ({label, buttonText}) => {
  return (
    <View
      style={{
        marginBottom: dimens.standard,
        // backgroundColor: 'pink',
      }}>
      <Text style={styles.label}>{label}</Text>

      <Button
        mode="contained"
        // labelStyle={{}}
        uppercase={false}
        style={{marginTop: dimens.small}}
        contentStyle={{justifyContent: 'flex-start'}}
        // onPress={onPress}
      >
        {buttonText}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: dimens.standard,
  },
});
