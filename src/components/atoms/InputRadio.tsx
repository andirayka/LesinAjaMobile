import {dimens} from '@constants';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, RadioButton, Text} from 'react-native-paper';

type RadioItem = {
  text: string;
  value: string;
};
type ComponentProps = {
  label: string;
  onChange: (val: string) => void;
  value: string;
  radioItems: RadioItem[];
  error: boolean;
  errorMessage: string;
};
export const InputRadio: FC<ComponentProps> = ({
  label,
  onChange,
  value,
  radioItems,
  error,
  errorMessage,
}) => {
  return (
    <View style={{marginBottom: dimens.standard}}>
      <Text style={styles.label}>{label}</Text>

      <RadioButton.Group onValueChange={onChange} value={value}>
        <View style={styles.itemsContainer}>
          {radioItems.map(item => {
            return (
              <View key={item.value} style={styles.radioTextContainer}>
                <RadioButton value={item.value} />
                <Text style={{fontSize: dimens.standard}}>{item.text}</Text>
              </View>
            );
          })}
        </View>
      </RadioButton.Group>

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
  label: {
    fontSize: dimens.standard,
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: dimens.tiny,
  },
  radioTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: dimens.small_10,
  },
});
