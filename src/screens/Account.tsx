import React, {FC, useEffect, useState} from 'react';
import {
  ButtonFormSubmit,
  Header,
  InputText,
  SkeletonLoading,
} from '@components';
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
import {AppStackParamList} from '@routes/RouteTypes';
import {apiGet, cancelApiRequest} from '@utils';
import {getListDaerah} from '@utils/getListData';

type FormDataType = {
  wali: string;
  pekerjaan: string;
  idprovinsi: string;
  idkabupaten: string;
  idkecamatan: string;
  iddesa: string;
  alamat: string;
  telp: string;
};

type ScreenProps = StackScreenProps<AppStackParamList, 'Account'>;

export const Account: FC<ScreenProps> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({mode: 'onChange'});
  const [daerah, setDaerah] = useState({
    provinsi: [],
    kota: [],
    kecamatan: [],
    desa: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInitialData = async () => {
      const provinsi = await getListDaerah({type: 'provinsi'});
      setDaerah(prev => ({...prev, provinsi}));

      // const {data} = await apiGet({url: 'wali/profile'});
      // console.log(data);

      setIsLoading(false);
    };

    getInitialData();

    return () => {
      cancelApiRequest();
    };
  }, []);

  const onSubmit: SubmitHandler<FormDataType> = async data => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Ubah Data Akun" />

      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <>
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
                    error={!!errors.wali}
                    errorMessage="Nama harus diisi"
                  />
                )}
                name="wali"
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
                    error={!!errors.telp}
                    errorMessage="Nomor WhatsApp harus diisi"
                    keyboardType="phone-pad"
                  />
                )}
                name="telp"
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
        </>
      )}
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
