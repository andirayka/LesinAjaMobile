import React, {FC, useState} from 'react';
import {color, dimens} from '@constants';
import {StyleSheet, View} from 'react-native';
import {Button, List, Modal, Portal, Searchbar, Text} from 'react-native-paper';
import {InputText} from '@components/atoms';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface InputProps extends Partial<TextInputProps> {}
type ComponentProps = InputProps & {
  onSelect: (item: {nama: string}) => void;
  errorMessage?: string;
  listData: {nama: string}[];
};
export const InputChoice: FC<ComponentProps> = props => {
  const {onSelect, errorMessage, listData} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [keyword, setKeyword] = useState('');

  const searchedData = listData.filter(item => {
    // i artinya tidak case sensitive
    const matchKeyword = RegExp(keyword, 'i');

    // return data yang sesuai dengan pencarian
    return matchKeyword.test(item.nama);
  });

  const onPressItem = (item: object) => {
    onSelect(item);
    setModalVisible(false);
  };

  return (
    <View>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: color.bg_grey}}>
            <Searchbar
              inputStyle={{paddingVertical: dimens.standard}}
              placeholder="Cari data..."
              onChangeText={setKeyword}
              value={keyword}
            />
            <View style={{padding: dimens.standard}}>
              {searchedData.map(item => {
                return (
                  <List.Item
                    style={styles.listItem}
                    key={item.nama}
                    title={item.nama}
                    onPress={() => onPressItem(item)}
                  />
                );
              })}
            </View>
          </View>
        </Modal>
      </Portal>

      <InputText
        {...props}
        buttonMode
        onPressButton={() => setModalVisible(true)}
        errorMessage={errorMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    marginBottom: dimens.standard,
    borderRadius: dimens.tiny,
    paddingVertical: dimens.small_10,
  },
});
