import {dimens} from '@constants';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Paragraph} from 'react-native-paper';

export const CardKeyValue: FC<{
  keyName: string;
  value: string;
  keyFlex?: number;
}> = ({keyName, value, keyFlex}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Paragraph style={{flex: keyFlex || 6, fontSize: dimens.standard}}>
        {keyName}
      </Paragraph>
      <Paragraph style={{flex: 10, fontSize: dimens.standard}}>
        : {value}
      </Paragraph>
    </View>
  );
};
