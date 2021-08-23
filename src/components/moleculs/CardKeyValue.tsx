import {dimens} from '@constants';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Paragraph} from 'react-native-paper';

export const CardKeyValue: FC<{keyName: string; value: string}> = ({
  keyName,
  value,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Paragraph style={{flex: 3, fontSize: dimens.standard}}>
        {keyName}
      </Paragraph>
      <Paragraph style={{flex: 5, fontSize: dimens.standard}}>
        : {value}
      </Paragraph>
    </View>
  );
};
