import React, {FC} from 'react';
import {Button, Dialog, Paragraph, Portal} from 'react-native-paper';

type Props = {
  visible: boolean;
  onDismiss?: () => void;
  title: string;
  description: string;
  action1Text: string;
  action2Text?: string;
  onPressAction1: () => void;
  onPressAction2?: () => void;
};
export const StandardDialog: FC<Props> = ({
  visible,
  onDismiss,
  title,
  description,
  action1Text,
  action2Text,
  onPressAction1,
  onPressAction2,
}) => {
  return (
    <Portal>
      <Dialog dismissable={!!onDismiss} visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{description}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onPressAction1}>{action1Text}</Button>

          {action2Text && (
            <Button onPress={onPressAction2}>{action2Text}</Button>
          )}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
