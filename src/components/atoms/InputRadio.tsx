import {dimens} from '@constants';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

type RadioItem = {
  text: string;
  value: string;
};
type ComponentProps = {
  label: string;
  onChange: (val: string) => void;
  value: string;
  radioItems: RadioItem[];
};
export const InputRadio: FC<ComponentProps> = ({
  label,
  onChange,
  value,
  radioItems,
}) => {
  return (
    <View>
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
