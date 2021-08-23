import React, {FC} from 'react';
import {Subheading} from 'react-native-paper';

export const OneLineInfo: FC<{info: string}> = ({info}) => {
  return (
    <Subheading>
      <Subheading style={{fontWeight: 'bold', color: '#F59E0B'}}>
        Info:
      </Subheading>{' '}
      {info}
    </Subheading>
  );
};
