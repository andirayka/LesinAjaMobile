import React, {FC} from 'react';
import {ButtonFormSubmit, Header, InputText} from '@components';
import {color, dimens} from '@constants';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AdminDrawerParamList, AppStackParamList} from '@routes/RouteTypes';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

type FormDataType = {
  mapel: string;
  jenjangKelas: string;
  paket: string;
  wilayah: string;
  biaya: string;
  gajiTutor: string;
};

type ScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<AdminDrawerParamList, 'ListLes'>,
  StackScreenProps<AppStackParamList>
>;
export const EditListLes: FC<ScreenProps> = ({
  route,
  navigation: {navigate},
}) => {
  const {data}: any = route.params;

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
    setValue,
  } = useForm<FormDataType>({mode: 'onChange'});

  const onSubmit: SubmitHandler<FormDataType> = async data => {
    const success = true;

    if (success) {
      navigate('ListLes');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title={`${data ? 'Ubah' : 'Tambah'} Data Les`} />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: dimens.standard}}>
          {/* Mapel */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                placeholder="Masukkan nama mapel"
                label="Mapel"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.mapel}
                errorMessage="Mapel harus diisi"
              />
            )}
            name="mapel"
            defaultValue={data && data.mapel}
          />

          {/* Jenjang Kelas */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                placeholder="Masukkan nama jenjang kelas"
                label="Jenjang Kelas"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.jenjangKelas}
                errorMessage="Jenjang kelas harus diisi"
              />
            )}
            name="jenjangKelas"
            defaultValue={data && data.jenjangKelas}
          />

          {/* Paket */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                placeholder="Masukkan nama paket"
                label="Paket"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.paket}
                errorMessage="Paket harus diisi"
              />
            )}
            name="paket"
            defaultValue={data && data.paket}
          />

          {/* Wilayah */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                placeholder="Masukkan nama wilayah"
                label="Wilayah"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.wilayah}
                errorMessage="Wilayah harus diisi"
              />
            )}
            name="wilayah"
            defaultValue={data && data.wilayah}
          />

          {/* Biaya */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                placeholder="Masukkan jumlah biaya"
                label="Biaya"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.biaya}
                errorMessage="Biaya harus diisi"
              />
            )}
            name="biaya"
            defaultValue={data && data.biaya}
          />

          {/* Gaji tutor */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                placeholder="Masukkan jumlah gaji tutor"
                label="Gaji Tutor"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.gajiTutor}
                errorMessage="Mapel harus diisi"
              />
            )}
            name="gajiTutor"
            defaultValue={data && data.gajiTutor}
          />
        </View>
      </ScrollView>

      {/* Submit button */}
      <ButtonFormSubmit
        isLoading={isSubmitting}
        text="Simpan"
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
