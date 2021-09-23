import {dimens, color} from '@constants';
import React, {FC} from 'react';
import {FAB} from 'react-native-paper';

type Props = {
  label: string;
  onPress: () => void;
};
export const FABList: FC<Props> = ({label, onPress}) => {
  return (
    <FAB
      style={{
        position: 'absolute',
        margin: dimens.large_26,
        right: 0,
        bottom: 0,
        backgroundColor: color.green_500,
      }}
      color="black"
      label={label}
      icon="plus"
      onPress={onPress}
    />
  );
};
