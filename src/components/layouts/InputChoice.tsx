import React, {FC, useState} from 'react';
import {color, dimens, PilihanLesType} from '@constants';
import {StyleSheet, View} from 'react-native';
import {List, Modal, Portal, Searchbar} from 'react-native-paper';
import {InputText} from '@components/atoms';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import {ScrollView} from 'react-native-gesture-handler';

interface InputProps extends Partial<TextInputProps> {}
type ComponentProps = InputProps & {
  onSelect: (item: PilihanLesType) => void;
  errorMessage?: string;
  listData: any[];
  keyMenuTitle: string;
  keyMenuDescription?: string;
};
export const InputChoice: FC<ComponentProps> = props => {
  const {onSelect, errorMessage, listData, keyMenuTitle, keyMenuDescription} =
    props;
  const [modalVisible, setModalVisible] = useState(false);
  const [keyword, setKeyword] = useState('');

  const searchedData = listData.filter(item => {
    // i artinya tidak case sensitive
    const matchKeyword = RegExp(keyword, 'i');

    // return data yang sesuai dengan pencarian
    return matchKeyword.test(item.nama);
  });

  const onPressItem = (item: any) => {
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
            <ScrollView
              contentContainerStyle={{padding: dimens.standard, flexGrow: 1}}>
              {searchedData.map((item, index) => {
                return (
                  <List.Item
                    style={styles.listItem}
                    key={index}
                    title={item[keyMenuTitle]}
                    description={keyMenuDescription && item[keyMenuDescription]}
                    onPress={() => onPressItem(item)}
                  />
                );
              })}
            </ScrollView>
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
