import {dimens} from '@constants';
import React, {FC} from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';
import {Caption, Paragraph} from 'react-native-paper';

export const CardLabelValue: FC<{
  label: string;
  value: string;
  isValueLink?: boolean;
}> = ({label, value, isValueLink}) => {
  return (
    <View style={{marginTop: dimens.medium}}>
      <Caption style={{fontSize: dimens.standard}}>{label}</Caption>

      {isValueLink ? (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(value);
          }}>
          <Paragraph style={{fontSize: dimens.medium_14, color: 'blue'}}>
            klik_disini
          </Paragraph>
        </TouchableOpacity>
      ) : (
        <Paragraph style={{fontSize: dimens.medium_14}}>{value}</Paragraph>
      )}
    </View>
  );
};
