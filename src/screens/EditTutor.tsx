import React, {FC} from 'react';
import {Header} from '@components';
import {color, dimens} from '@constants';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type FormDataType = {
  nama: string;
  noWa: string;
  alamat: string;
  perguruanTinggi: string;
  jurusan: string;
  pengalamanMengajar: string;
  jenisKelamin: string;
  linkMicroteaching: string;
  bank: string;
  rekening: string;
};
type ScreenProps = StackScreenProps<AppStackParamList, 'EditTutor'>;
export const EditTutor: FC<ScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({mode: 'onChange'});

  const onSubmit = async (data: object) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Tutor" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          {/* Profile Photo */}
          <Avatar.Image
            size={160}
            source={{uri: 'http://placekitten.com/200/200'}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: dimens.standard,
    alignItems: 'center',
  },
});
