import React, {FC} from 'react';
import {ButtonFormSubmit, Header, InputChoice, InputRadio} from '@components';
import {
  color,
  dimens,
  master_pilihanles,
  master_siswa,
  PilihanLesType,
} from '@constants';
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
  pilihanles: string;
  preferensiTutor: '' | 'laki-laki' | 'perempuan' | 'bebas';
  siswa: string;
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
        <View style={{flex: 1, padding: dimens.standard}}>
          {/* Siswa */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <InputChoice
                label="Siswa yang Mengikuti Les"
                value={value}
                error={!!errors.siswa}
                errorMessage="Harap pilih siswa yang mengikuti les"
                onSelect={item => onChange(item.nama)}
                listData={master_siswa}
                keyMenuTitle="nama"
                keyMenuDescription="jenjangKelas"
              />
            )}
            name="siswa"
            defaultValue={''}
          />

          {/* Pilihan les */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <InputChoice
                label="Pilihan Les"
                value={value}
                error={!!errors.pilihanles}
                errorMessage="Harap pilih les yang akan diikuti"
                onSelect={item => onChange(item.nama)}
                listData={master_pilihanles}
                keyMenuTitle="nama"
                keyMenuDescription="harga"
              />
            )}
            name="pilihanles"
            defaultValue={''}
          />

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
                error={!!errors.preferensiTutor}
                errorMessage="Harap pilih prefrensi tutor"
              />
            )}
            name="preferensiTutor"
            defaultValue={''}
          />
        </View>
      </ScrollView>

      {/* Submit button */}
      <ButtonFormSubmit text="Kirim" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

const TotalPrice = ({les}) => {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
