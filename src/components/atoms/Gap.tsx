import React, {FC} from 'react';
import {View} from 'react-native';

// Spacing helper to arrange layouts
export const Gap: FC<{x?: number; y?: number}> = ({x, y}) => {
  return <View style={{marginLeft: x, marginTop: y}} />;
};
