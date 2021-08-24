import {color, dimens} from '@constants';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface InputProps extends Partial<TextInputProps> {}
type ComponentProps = InputProps & {
  errorMessage?: string;
  buttonMode?: boolean;
  onPressButton?: () => void;
};
export const InputText: FC<ComponentProps> = props => {
  const {errorMessage, error, buttonMode, onPressButton} = props;

  // Change view with button, and make textinput disabled
  if (buttonMode) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={onPressButton}>
        <TextInput disabled {...props} style={styles.textInputStyle} />

        {error && (
          <HelperText
            style={{paddingLeft: 0, fontSize: dimens.medium_14}}
            type="error">
            {errorMessage}
          </HelperText>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <View style={{marginBottom: dimens.standard}}>
      <TextInput {...props} style={styles.textInputStyle} />

      {error && (
        <HelperText
          style={{paddingLeft: 0, fontSize: dimens.medium_14}}
          type="error">
          {errorMessage}
        </HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: dimens.standard,
  },
  textInputStyle: {
    backgroundColor: 'white',
    color: color.btn_black,
  },
});
