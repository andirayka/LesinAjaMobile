import React, {FC} from 'react';
import {ButtonFormSubmit, Header} from '@components';
import {color, dimens} from '@constants';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

export const Account: FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onChange'});

  const onSubmit = async (data: object) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Ubah Data Akun" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: dimens.standard}}>
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Nama"
                placeholder="Masukkan nama lengkap Anda"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInputStyle}
                error={errors.nama}
              />
            )}
            name="nama"
            defaultValue=""
          />
          {errors.nama && <Text>Nama harus diisi.</Text>}

          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Nomor WhatsApp"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInputStyle}
                error={errors.waNumber}
                keyboardType="phone-pad"
              />
            )}
            name="waNumber"
            defaultValue=""
          />
          {errors.waNumber && <Text>Nomor WhatsApp harus diisi.</Text>}

          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Alamat rumah"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInputStyle}
                error={errors.alamat}
              />
            )}
            name="alamat"
            defaultValue=""
          />
          {errors.alamat && <Text>Alamat rumah harus diisi.</Text>}

          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Pekerjaan"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInputStyle}
                error={errors.pekerjaan}
              />
            )}
            name="pekerjaan"
            defaultValue=""
          />
          {errors.pekerjaan && <Text>Pekerjaan harus diisi.</Text>}
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
