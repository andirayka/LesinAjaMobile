import React, {FC} from 'react';
import {Header, InputRadio} from '@components';
import {color, dimens} from '@constants';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Button, Text, TextInput, RadioButton} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type FormDataType = {
  siswa: '' | 'laki-laki' | 'perempuan' | 'bebas';
};
type ScreenProps = StackScreenProps<AppStackParamList>;
export const AddLes: FC<ScreenProps> = ({navigation}) => {
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

      <Header title="Tambah Les Baru" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{flex: 1, padding: dimens.standard, paddingTop: dimens.small}}>
          {/* Jenis kelamin tutor */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <InputRadio
                label="Preferensi Jenis Kelamin Tutor"
                value={value}
                onChange={onChange}
                radioItems={[
                  {text: 'Laki-laki', value: 'laki-laki'},
                  {text: 'Perempuan', value: 'perempuan'},
                  {text: 'Bebas', value: 'bebas'},
                ]}
              />
            )}
            name="siswa"
            defaultValue={''}
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
});
