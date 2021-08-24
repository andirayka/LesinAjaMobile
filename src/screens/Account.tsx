import React, {FC} from 'react';
import {ButtonFormSubmit, Header, InputText} from '@components';
import {color, dimens} from '@constants';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type FormDataType = {
  nama: string;
  noWa: string;
  alamat: string;
  pekerjaan: string;
};

type ScreenProps = StackScreenProps<AppStackParamList, 'Account'>;

export const Account: FC<ScreenProps> = () => {
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

      <Header title="Ubah Data Akun" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: dimens.standard}}>
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                label="Nama"
                placeholder="Masukkan nama lengkap Anda"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.nama}
                errorMessage="Nama harus diisi"
              />
            )}
            name="nama"
            defaultValue=""
          />

          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                label="Nomor WhatsApp"
                placeholder="Masukkan nomor WhatsApp Anda"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.noWa}
                errorMessage="Nomor WhatsApp harus diisi"
                keyboardType="phone-pad"
              />
            )}
            name="noWa"
            defaultValue=""
          />

          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                label="Alamat Rumah"
                placeholder="Masukkan alamat rumah Anda"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.alamat}
                errorMessage="Alamat rumah harus diisi"
              />
            )}
            name="alamat"
            defaultValue=""
          />

          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                label="Pekerjaan"
                placeholder="Masukkan pekerjaan Anda"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.pekerjaan}
                errorMessage="Pekerjaan harus diisi"
              />
            )}
            name="pekerjaan"
            defaultValue=""
          />
        </View>
      </ScrollView>

      {/* Submit button */}
      <ButtonFormSubmit text="Simpan" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
  textInputStyle: {
    backgroundColor: 'white',
    marginTop: dimens.standard,
    color: color.btn_black,
  },
});
