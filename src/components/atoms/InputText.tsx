import {color, dimens} from '@constants';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface InputProps extends Partial<TextInputProps> {}
type ComponentProps = InputProps & {errorMessage?: string};
export const InputText: FC<ComponentProps> = props => {
  const {errorMessage, error} = props;
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
  textInputStyle: {
    backgroundColor: 'white',
    color: color.btn_black,
  },
});
