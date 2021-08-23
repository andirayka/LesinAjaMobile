import React, {FC} from 'react';
import {dimens} from '@constants';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  text: string;
  onPress: () => void;
};
export const ButtonFormSubmit: FC<Props> = ({text, onPress}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'padding', android: 'height'})}>
      <View
        style={{
          backgroundColor: 'white',
          height: 68,
          justifyContent: 'center',
          paddingHorizontal: dimens.standard,
        }}>
        <Button mode="contained" contentStyle={{height: 48}} onPress={onPress}>
          {text}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};
