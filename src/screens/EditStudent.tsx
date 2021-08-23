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

type FormDataType = {
  nama: string;
  sekolah: string;
  jenjangKelas: string;
};
type Props = {
  navigation: any;
  route: any;
};
export const EditStudent: FC<Props> = ({navigation, route}) => {
  const item = route.params?.item || {};

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

      <Header title={`${item.nama ? 'Ubah' : 'Tambah'} Data Siswa`} />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: dimens.standard}}>
          {/* Nama */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                placeholder="Masukkan nama lengkap Siswa"
                label="Nama"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.nama}
                errorMessage="Nama harus diisi"
              />
            )}
            name="nama"
            defaultValue={item.nama}
          />
          {/* Sekolah */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                label="Asal Sekolah"
                placeholder="Masukkan nama sekolah siswa"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.sekolah}
                errorMessage="Asal sekolah harus diisi"
              />
            )}
            name="sekolah"
            defaultValue={item.sekolah}
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
});
